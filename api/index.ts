// Vercel serverless entry point.
// Vercel calls this like a plain Node request handler — Express apps are
// natively compatible with that signature, so we just re-export app.ts
// (no app.listen() here, unlike artifacts/api-server/src/index.ts which is
// only used for local dev / non-Vercel hosts).
import app from "../artifacts/api-server/src/app.js";

export default app;
