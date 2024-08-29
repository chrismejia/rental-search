import { setupStatusDropdown } from "./setupStatusDropdown";

type FormSubmitEvent = GoogleAppsScript.Events.FormsOnFormSubmit;

function onFormSubmit(event: FormSubmitEvent) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const lastRow = sheet.getLastRow();

  console.log(JSON.stringify(event, null, 2));

  setupStatusDropdown(sheet, lastRow);
}
