# Ocean Vista International — React site

Vite + React port of the published manifest/ledger-styled site. Same design,
same catalogue data, now as proper components with real state instead of
vanilla JS.

## Run it

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Structure

```
src/
  data/catalogue.js       6 divisions, 13 product lines — edit this to change the catalogue
  components/
    SiteHeader.jsx         sticky header + mobile nav
    Hero.jsx                headline + manifest ticker
    ManifestTicker.jsx      the scrolling "shipping manifest" card, built from catalogue.js
    PolicyStrip.jsx         the 4-step "how a quote works" strip
    ContentsNav.jsx         division jump-nav with scroll-based active highlighting
    Division.jsx            one catalogue division (numbered header + ledger rows)
    WhySection.jsx          the 4 "why choose us" cards
    ContactSection.jsx      contact details + open-enquiry card
    InquiryModal.jsx        the quote-request form, prefilled from whichever
                             product/division you clicked, with a confirmation screen
    SiteFooter.jsx
  hooks/useActiveSection.js IntersectionObserver hook for ContentsNav
  lib/submitInquiry.js      where the form actually sends its data — see below
google-apps-script/
  Code.gs                  Apps Script for the Google Sheets backend option
  styles/global.css         the whole design system (CSS variables, manifest
                             ticker animation, responsive layout)
```

## Wiring up the inquiry form

Right now, submitting the form always shows the confirmation screen, but
nothing is actually sent anywhere until you set an endpoint. Copy
`.env.example` to `.env` and fill in `VITE_INQUIRY_ENDPOINT` with one of:

- a **Google Sheet**, via a Google Apps Script Web App — every submission
  becomes a row. This is the fastest way to get enquiries into a
  spreadsheet with no backend to run. Setup:

  1. Create a new Google Sheet (or open the one you want enquiries in).
  2. **Extensions → Apps Script**, delete the placeholder code, and paste in
     the contents of `google-apps-script/Code.gs` from this project.
  3. **Deploy → New deployment**, select type **Web app**, set
     **Execute as: Me** and **Who has access: Anyone**, then **Deploy**.
     (Google will ask you to authorize the script the first time.)
  4. Copy the Web app URL it gives you (it ends in `/exec`) and set it as
     `VITE_INQUIRY_ENDPOINT` in `.env`.
  5. Submit a test enquiry from the site — a new **Inquiries** sheet tab is
     created automatically on the first submission, with a header row and
     one row per enquiry after that.

  If you ever change the script, you need to **Deploy → Manage deployments
  → edit → New version** for the change to take effect — saving the file
  alone doesn't update the live URL.

- a **Formspree** (or similar) form endpoint — also no backend to run, just
  an inbox notification instead of a spreadsheet, or

- the `POST /inquiries` route from a custom backend — see
  `ocean-vista-api-example.js` and `ocean-vista-migrations.sql` from earlier
  in this project, if you want real order/quotation tracking instead of just
  a notification.

Without any of these, the app still runs and the form still works from the
visitor's point of view — it just doesn't deliver anywhere, which is fine for
local development.

## Editing the catalogue

Everything shown in the catalogue — names, descriptions, specs, which
division something sits under — comes from `src/data/catalogue.js`. No other
file needs to change to add, remove or re-word a product.
