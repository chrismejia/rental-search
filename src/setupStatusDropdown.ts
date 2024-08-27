export function setupStatusDropdown(
  sheet: GoogleAppsScript.Spreadsheet.Sheet,
  row: GoogleAppsScript.Integer
) {
  const statusDropdownAttributes = [
    { text: "Lease Signed", background: "#00FF00", textColor: "#000000" }, // Green background, black text
    { text: "More Info Needed", background: "#FFFF00", textColor: "#000000" }, // Yellow background, black text
    { text: "Discussion Ongoing", background: "#FFA500", textColor: "#000000" }, // Orange background, black text
    { text: "Awaiting Response", background: "#87CEEB", textColor: "#000000" }, // Light blue background, black text
    { text: "Rejected", background: "#FF0000", textColor: "#FFFFFF" }, // Red background, white text
    {
      text: "No Longer on Market",
      background: "#A9A9A9",
      textColor: "#000000",
    }, // Gray background, black text
  ];

  const statusLabels = statusDropdownAttributes.map(({ text }) => text);

  const rule = SpreadsheetApp.newDataValidation()
    .requireValueInList(statusLabels)
    .build();

  const statusColumn = 1; // Assuming Status is in the first column

  sheet.getRange(row, statusColumn).setDataValidation(rule).setValue("");

  const cell = sheet.getRange(row, statusColumn);

  cell.setBackground("#FFFFFF"); // Default white background
  cell.setFontColor("#000000"); // Default black text color
}
