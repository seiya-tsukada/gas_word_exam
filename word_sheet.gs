function doPost(e) {
  
  var ret_s = "";
    
  if(e.parameter.text == "word"){
    var sheet = SpreadsheetApp.getActive().getSheetByName("word_list");
    ret_s = sheet_get(sheet)
  }else if(e.parameter.text == "idiom"){
    var sheet = SpreadsheetApp.getActive().getSheetByName("idiom_list");
    ret_s = sheet_get(sheet)
  }else{
    ret_s = "not supported";
  }   
   
  Logger.log(ret_s);
  return ContentService.createTextOutput(ret_s);

}

function sheet_get(sheet){
  var sheet_lastRow = sheet.getLastRow();
  
  var row = "A2:A" + sheet_lastRow;
  var a_row = "C2:C" + sheet_lastRow;
  
  var range = sheet.getRange(row);
  var value_s = range.getValues();
  
  var a_range = sheet.getRange(a_row);
  var a_value_s = a_range.getValues();
  
  var ret_s = "";
  
  for(var i=0; i < value_s.length; i++) {
    for(var j=0; j < a_value_s.length; j++) {
      if(i == j){
        ret_s = ret_s + value_s[i][0] + ": " + a_value_s[j][0] + "\r\n";
      }
    }
  }
  
  return ret_s;
  
}