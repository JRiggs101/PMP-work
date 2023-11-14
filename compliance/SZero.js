function onOpen() {
    const ui = SpreadsheetApp.getUi();
    const menu = ui.createMenu('Add S0');
    menu.addItem('Add S0', 'addToColumn')
    menu.addToUi();
    
  }
  
  function addToColumn() {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet1');
    var columnB = sheet.getRange('B2:B');
    var values = columnB.getValues();
    
    for (var i = 0; i < values.length; i++) {
      var cellValue = String(values[i][0]);
  
      if (cellValue !== "" && cellValue.indexOf("S0") !== 0 ) {
  
        values[i][0] = "S0" + cellValue;
        
         }
  
    }
  
    columnB.setValues(values);
  
  }
  