import type { Handler } from "@netlify/functions";

export const handler: Handler = async () => {
  const {
    FIREBASE_API_KEY,
    FIREBASE_AUTH_DOMAIN,
    FIREBASE_PROJECT_ID,
    FIREBASE_STORAGE_BUCKET,
    FIREBASE_APP_ID,
    FIREBASE_MEASUREMENT_ID,
    APP_CHECK_SITE_KEY,
    APPCHECK_DEBUG,
    MAPS_API_KEY
  } = process.env;

  return {
    statusCode: 200,
    headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" },
    body: JSON.stringify({
      FIREBASE_API_KEY,
      FIREBASE_AUTH_DOMAIN,
      FIREBASE_PROJECT_ID,
      FIREBASE_STORAGE_BUCKET,
      FIREBASE_APP_ID,
      FIREBASE_MEASUREMENT_ID,
      APP_CHECK_SITE_KEY,
      APPCHECK_DEBUG,
      MAPS_API_KEY
    })
  };
};
