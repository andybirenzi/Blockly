
Blockly.Blocks['bean'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField(new Blockly.FieldTextInput("Bean component"), "mybean");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(200);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['FTPProducer'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("From (FTP):")
        .appendField("file://")
        .appendField("originFolder:")
        .appendField(new Blockly.FieldTextInput("microwave/cifsdata/andytest"), "originFolder")
        .appendField("fileName:")
        .appendField(new Blockly.FieldTextInput("test.csv"), "fileName");
    this.setInputsInline(false);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['FTPConsumer'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("To (FTP):")
        .appendField("file://")
        .appendField("originFolder:")
        .appendField(new Blockly.FieldTextInput("microwave/cifsdata/andytest"), "originFolder")
        .appendField(new Blockly.FieldTextInput("default"), "NAME");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("tooltip");
 this.setHelpUrl("heheheheh");
  }
};

Blockly.JavaScript['FTPConsumer'] = function(block) {
  var text_originfolder = block.getFieldValue('originFolder');
  var text_name = block.getFieldValue('NAME');
  // TODO: Assemble Python into code variable.
  var code = 'from("file://{{'+text_originfolder+'}}'+
              '";{{maxient.source.smb.username}}"' + 
              '"@{{smb.server}}"'+
           ' )'
      
  return code;
};

