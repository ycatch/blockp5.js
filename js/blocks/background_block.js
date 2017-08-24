Blockly.Blocks['background'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("background");
    this.appendValueInput("NAME")
        .setCheck("Number")
        .appendField("color");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};