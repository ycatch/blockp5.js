Blockly.JavaScript['setup'] = function(block) {
  var statements_do = Blockly.JavaScript.statementToCode(block, 'do');
  // TODO: Assemble JavaScript into code variable.
  var code = 'setup = function() {\n' + statements_do + '};\n';
  return code;
};
