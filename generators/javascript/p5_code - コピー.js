Blockly.JavaScript['ellipse'] = function(block) {
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
  var value_width = Blockly.JavaScript.valueToCode(block, 'width', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height = Blockly.JavaScript.valueToCode(block, 'height', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'ellipse(' + value_x + ',' + value_y + ',' + value_width + ',' + value_height + ',' + ');\n';
  return code;
};

Blockly.JavaScript['setup'] = function(block) {
  var statements_do = Blockly.JavaScript.statementToCode(block, 'do');
  // TODO: Assemble JavaScript into code variable.
  var code = 'setup() {\n' + statements_do + '};\n';
  return code;
};

Blockly.JavaScript['createcanvas'] = function(block) {
  var value_width = Blockly.JavaScript.valueToCode(block, 'width', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height = Blockly.JavaScript.valueToCode(block, 'height', Blockly.JavaScript.ORDER_ATOMIC);
  var value_canvas = Blockly.JavaScript.valueToCode(block, 'canvas', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'var myCanvas = createCanvas(' + value_width + ',' + value_height +');\n' + 'myCanvas.parent(' + value_canvas + ');\n';
  return code;
};
