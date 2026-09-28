/**
 * Submits an inquiry to your backend.
 *
 * Set VITE_INQUIRY_ENDPOINT (in a .env file, see .env.example) to one of:
 *  - a Google Apps Script Web App URL (ends in /exec) that appends the
 *    inquiry to a Google Sheet — see google-apps-script/Code.gs and the
 *    "Wiring up the inquiry form" section of the README for setup, or
 *  - a Formspree/Getform-style form endpoint, or
 *  - the POST /inquiries route from a custom backend
 *    (see ocean-vista-api-example.js from earlier in this project).
 *
 * With no endpoint configured, this resolves successfully without sending
 * anywhere, so the form still works end-to-end during development.
 */
export async function submitInquiry(data) {
  const endpoint = import.meta.env.VITE_INQUIRY_ENDPOINT;

  if (!endpoint) {
    console.warn('VITE_INQUIRY_ENDPOINT is not set — inquiry was not actually sent:', data);
    return { ok: true, simulated: true };
  }

  // Google Apps Script Web Apps don't answer CORS preflight requests and
  // don't send back an Access-Control-Allow-Origin header, so the browser
  // can neither send a normal application/json POST nor read the response.
  // The standard workaround: send as a "simple request" (text/plain avoids
  // the preflight) in no-cors mode, and treat a fetch that didn't throw as
  // success — we can't inspect res.ok on an opaque no-cors response anyway.
  const isAppsScript = /script\.google\.com\/macros/.test(endpoint);

  if (isAppsScript) {
    await fetch(endpoint, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(data),
    });
    return { ok: true };
  }

  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error(`Inquiry submission failed with status ${res.status}`);
  }
  return { ok: true };
}
