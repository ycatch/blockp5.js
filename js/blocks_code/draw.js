Blockly.JavaScript['draw'] = function(block) {
  var statements_do = Blockly.JavaScript.statementToCode(block, 'do');
  // TODO: Assemble JavaScript into code variable.
  var code = 'draw = function() {\n if (execStatus == "run") {\n' + statements_do + '}};\n';
  return code;
};
