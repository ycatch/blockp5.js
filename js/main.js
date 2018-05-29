// blockp5js = p5.js + blockly

// Block Initialize
import { blockInit } from "./blockInit.js";
const workspace = blockInit();

import { Blockp5 } from "./blockp5.js";


// Browser window resize
let onresize = function(e) {
    // Compute the absolute coordinates and dimensions of blocklyArea.
    let element = blocklyArea;
    let x = 0;
    let y = 0;
    do {
        x += element.offsetLeft;
        y += element.offsetTop;
        element = element.offsetParent;
    } while (element);
    // Position blocklyDiv over blocklyArea.
    blocklyDiv.style.left = x + 'px';
    blocklyDiv.style.top = y + 'px';
    blocklyDiv.style.width = blocklyArea.offsetWidth + 'px';
    blocklyDiv.style.height = blocklyArea.offsetHeight + 'px';
};


window.addEventListener('resize', onresize, false);
window.scrollTo(0, 0);
workspace.resizeContents();
setTimeout(function() {
    onresize();
    Blockly.svgResize(workspace);
}, 1000)


// Init blockp5
var blockp5 = new Blockp5(workspace);
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
