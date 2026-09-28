/**
 * Ocean Vista inquiry form -> Google Sheets
 *
 * Deploy this as a Web App (Extensions > Apps Script in a Google Sheet,
 * paste this file in, then Deploy > New deployment > Web app). See the
 * "Wiring up the inquiry form" section of the project README for the
 * full step-by-step.
 *
 * Every submission from the site's enquiry form becomes one row in the
 * "Inquiries" sheet (created automatically on first submission), with a
 * header row written the first time it runs.
 */

var SHEET_NAME = 'Inquiries';

var COLUMNS = [
  'Timestamp', 'Reference', 'Company Name', 'Contact Person', 'Email',
  'Phone', 'Country', 'Division', 'Quantity', 'Incoterm',
  'Destination Port', 'Message',
];

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var sheet = getOrCreateSheet_();

    sheet.appendRow([
      new Date(),
      data.reference || '',
      data.companyName || '',
      data.contactPerson || '',
      data.email || '',
      data.phone || '',
      data.country || '',
      data.division || '',
      data.quantity || '',
      data.incoterm || '',
      data.port || '',
      data.message || '',
    ]);

    return jsonResponse_({ ok: true });
  } catch (err) {
    return jsonResponse_({ ok: false, error: String(err) });
  }
}

// So you can open the deployed URL in a browser and confirm it's live.
function doGet(e) {
  return jsonResponse_({ ok: true, status: 'Ocean Vista inquiry endpoint is live' });
}

function getOrCreateSheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(COLUMNS);
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function jsonResponse_(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
