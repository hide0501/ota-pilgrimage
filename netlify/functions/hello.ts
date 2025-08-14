import type { Handler } from "@netlify/functions";
export const handler: Handler = async () => ({
  statusCode: 200,
  headers: { "content-type": "application/json; charset=utf-8" },
  body: JSON.stringify({ ok: true, time: new Date().toISOString() })
});
