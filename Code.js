function doGet(e) {
  var file = HtmlService.createTemplateFromFile("index");
  var evaluate = file.evaluate().addMetaTag('viewport', 'width=device-width, initial-scale=1');
  var html = evaluate.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  return html;
}

// 要連結 include 函式
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

// 產生6位數字id
function generateRandomID() {
  var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var result = '';
  for (var i = 0; i < 7; i++) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return result;
}

// 新增資料
function addData(rowData) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("data");
  var id = generateRandomID();
  sheet.appendRow([id, rowData.type, rowData.freq, rowData.force, rowData.number, rowData.qty]);
  return getData();
}

function getData() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("data");
  var data = sheet.getDataRange().getValues();
  if (data.length <= 1) return []; // 只有表頭或空
  data.shift(); // 移除表頭
  return data;
}

function deleteCustomer(id) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("data");
  var data = sheet.getDataRange().getValues();
  for (var i = 0; i < data.length; i++) {
    if (data[i][0] === id) {
      sheet.deleteRow(i + 1); // +1 因為 sheet row 從1開始
      break;
    }
  }
  return getData();
}

function updateCustomerData(data) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("data");
  var values = sheet.getDataRange().getValues();

  for (var i = 0; i < values.length; i++) {
    if (values[i][0] === data.id) {
      sheet.getRange(i + 1, 2).setValue(data.type);
      sheet.getRange(i + 1, 3).setValue(data.freq);
      sheet.getRange(i + 1, 4).setValue(data.force);
      sheet.getRange(i + 1, 5).setValue(data.number);
      sheet.getRange(i + 1, 6).setValue(data.qty);
      return getData();
    }
  }

  Logger.log("找不到 ID: " + data.id);
  return getData();
}