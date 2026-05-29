# This is NOT the Next.js you know

This version (16.2.1) has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

UI components are **shadcn on Base UI** (`@base-ui/react`), not Radix. Use the Base UI `render={<El />}` prop pattern, not `asChild`.

Never run `next dev` — always `next build` + `next start` (production mode) to avoid memory crashes.
