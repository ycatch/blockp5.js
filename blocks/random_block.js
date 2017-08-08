Blockly.Blocks['random'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("random");
    this.appendValueInput("min")
        .setCheck("Number")
        .appendField("min");
    this.appendValueInput("man")
        .setCheck("Number")
        .appendField("max");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip('Getting a random integer between two values');
    this.setHelpUrl('');
  }
};