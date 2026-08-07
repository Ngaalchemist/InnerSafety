// Vercel serverless function entry point.
//
// Root Directory is set to artifacts/inner-safety, so Vercel looks for
// serverless functions inside artifacts/inner-safety/api/*.ts. This file
// re-exports the existing Express app from @workspace/api-server as the
// default handler — Vercel's Node.js runtime knows how to invoke an
// Express app directly (it just calls app(req, res)).
//
// The app itself never calls app.listen() here (that only happens in
// api-server/src/index.ts, which is used for local/VPS dev), so this is
// safe to import in a serverless context.
import app from "../../api-server/dist/app.mjs";

export default app;
