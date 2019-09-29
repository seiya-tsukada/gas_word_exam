function doPost(e) {
  
  var ret_s = "";

  if(e.parameter.text == "word"){
    var sheet = SpreadsheetApp.getActive().getSheetByName("word_list");
  }else if(e.parameter.text == "idiom"){
    var sheet = SpreadsheetApp.getActive().getSheetByName("idiom_list");
  }else{
    ret_s = "not supported";
  }

  // var sheet = SpreadsheetApp.getActive().getSheetByName("word_list");
  ret_s = sheet_get(sheet)
  Logger.log(ret_s);
  return ContentService.createTextOutput(ret_s);

}

function sheet_get(sheet){
  var sheet_lastRow = sheet.getLastRow();
  
  var a_row = "A2:A" + sheet_lastRow;
  var b_row = "B2:B" + sheet_lastRow;
  var c_row = "C2:C" + sheet_lastRow;
  
  // Word
  var a_range = sheet.getRange(a_row);
  var a_value_s = a_range.getValues();
  
  // Part of speech
  var b_range = sheet.getRange(b_row);
  var b_value_s = b_range.getValues();
  
  // Transration Word
  var c_range = sheet.getRange(c_row);
  var c_value_s = c_range.getValues();
  
  var ret_s = "";
  for(var i=(a_value_s.length-1); 0 <= i; i--) {
    ret_s = ret_s + a_value_s[i] + " : " + b_value_s[i] + " => " + c_value_s[i] + "\r\n";
  }

  return ret_s;
  
}