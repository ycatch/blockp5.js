// blockp5js = p5.js + blockly

import { BlocklyManager } from "./blocklyManager.js";
import { onResize } from "./onResize.js";
import { Blockp5 } from "./blockp5.js";

const blocklyManager = new BlocklyManager();

// Add resize
window.addEventListener('resize', function() {onResize(blocklyManager);}, false);
window.scrollTo(0, 0);
blocklyManager.workspace.resizeContents();
setTimeout(function() {
    onResize(blocklyManager);
    Blockly.svgResize(blocklyManager.workspace);
}, 1000)


// Init blockp5
var blockp5 = new Blockp5(blocklyManager.workspace);
blockp5.viewCode();
blockp5.runCode();

document.getElementById('p5Run').onclick = function() {
    blockp5.runCode();
};

document.getElementById('p5Reset').onclick = function() {
    if (confirm("Reset All!")) {
        window.scrollTo(0, 0);
        location.reload(false);
    }
};

document.getElementById('blockly_code_tab').onclick = function() {
    blockp5.viewCode();
};
