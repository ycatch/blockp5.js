// blockp5js = p5.js + blockly

// BlockManger Initialize
import { BlocklyManager } from "./blocklyManager.js";
const blocklyManager = new BlocklyManager();

import { Blockp5 } from "./blockp5.js";


// Browser window resize
let onresize = function(e) {
    // Compute the absolute coordinates and dimensions of blocklyArea.
    let element = blocklyManager.area;
    let x = 0;
    let y = 0;
    do {
        x += element.offsetLeft;
        y += element.offsetTop;
        element = element.offsetParent;
    } while (element);
    // Position blocklyDiv over blocklyArea.
    blocklyManager.div.style.left = x + 'px';
    blocklyManager.div.style.top = y + 'px';
    blocklyManager.div.style.width =
        blocklyManager.area.offsetWidth + 'px';
    blocklyManager.div.style.height =
        blocklyManager.area.offsetHeight + 'px';
};


window.addEventListener('resize', onresize, false);
window.scrollTo(0, 0);
blocklyManager.workspace.resizeContents();
setTimeout(function() {
    onresize();
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
