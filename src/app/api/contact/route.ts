import { NextResponse } from "next/server";
import twilio from "twilio";

function sanitize(input: string): string {
  return input.replace(/<[^>]*>/g, "").trim();
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone: string): boolean {
  const digits = phone.replace(/\D/g, "");
  return digits.length >= 7 && digits.length <= 15;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = sanitize(body.name ?? "");
    const phone = sanitize(body.phone ?? "");
    const email = sanitize(body.email ?? "");
    const service = sanitize(body.service ?? "");
    const message = sanitize(body.message ?? "");

    const errors: string[] = [];

    if (!name || name.length < 2) {
      errors.push("Name is required and must be at least 2 characters.");
    }
    if (!phone || !isValidPhone(phone)) {
      errors.push("A valid phone number is required.");
    }
    if (!email || !isValidEmail(email)) {
      errors.push("A valid email address is required.");
    }
    if (service && service.length > 200) {
      errors.push("Invalid service selection.");
    }
    if (message && message.length > 5000) {
      errors.push("Message is too long.");
    }

    if (errors.length > 0) {
      return NextResponse.json(
        { success: false, error: errors.join(" ") },
        { status: 400 }
      );
    }

    const formData = {
      name,
      phone,
      email,
      service,
      message,
      submittedAt: new Date().toISOString(),
    };

    // 1. Log the submission (fallback record)
    console.log("[Contact Form Submission]", JSON.stringify(formData, null, 2));

    // 2. Send SMS notification to contractor via Twilio
    const twilioAccountSid = process.env.TWILIO_ACCOUNT_SID;
    const twilioApiKey = process.env.TWILIO_API_KEY_SID;
    const twilioApiSecret = process.env.TWILIO_API_SECRET;
    const twilioMsgServiceSid = process.env.TWILIO_MESSAGING_SERVICE_SID;
    const contractorPhone = process.env.CONTRACTOR_PHONE_NUMBER;

    if (twilioAccountSid && twilioApiKey && twilioApiSecret && twilioMsgServiceSid && contractorPhone) {
      try {
        const client = twilio(twilioApiKey, twilioApiSecret, { accountSid: twilioAccountSid });

        const smsBody = [
          `NEW LEAD from website!`,
          `Name: ${name}`,
          `Phone: ${phone}`,
          `Email: ${email}`,
          service ? `Service: ${service}` : null,
          message ? `Message: ${message}` : null,
        ]
          .filter(Boolean)
          .join("\n");

        await client.messages.create({
          body: smsBody,
          messagingServiceSid: twilioMsgServiceSid,
          to: contractorPhone,
        });

        console.log("[Twilio SMS] Sent to", contractorPhone);
      } catch (twilioError) {
        console.error("[Twilio SMS Error]", twilioError);
        // Don't fail the form — the lead is still logged
      }
    }

    // 3. POST to webhook (RenoLaunch OS CRM)
    const webhookUrl = process.env.WEBHOOK_URL;
    if (webhookUrl) {
      try {
        const webhookResponse = await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            source: "website_contact_form",
            ...formData,
          }),
        });

        if (!webhookResponse.ok) {
          console.error(
            "[Webhook Error]",
            webhookResponse.status,
            await webhookResponse.text()
          );
        }
      } catch (webhookError) {
        console.error("[Webhook Error]", webhookError);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! We will get back to you shortly.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Contact Form Error]", error);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred. Please try again or call us directly.",
      },
      { status: 500 }
    );
  }
}
