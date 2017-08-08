Blockly.JavaScript['random'] = function(block) {
  var value_min = Blockly.JavaScript.valueToCode(block, 'min', Blockly.JavaScript.ORDER_ATOMIC);
  var value_man = Blockly.JavaScript.valueToCode(block, 'man', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'Math.floor( Math.random() * (' + value_man + ' - ' + value_min + ' + 1 )) + ' +  value_min;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
