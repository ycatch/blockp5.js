class Blockp5 {
    constructor() {
        this._status = "run";
        this.p5_obj = {};
    }

    set status(s) {
        this._status = s;
    }

    get status() {
        return this._status;
    }

    runCode() {
        window.LoopTrap = 1000;
        Blockly.JavaScript.INFINITE_LOOP_TRAP =
            'if (--window.LoopTrap == 0) throw "Infinite loop.";\n';
        let code = Blockly.JavaScript.workspaceToCode(workspace);
        Blockly.JavaScript.INFINITE_LOOP_TRAP = null;

        try {
            let s = new Function("p", code);
            this.p5_obj = new p5(s);
        } catch (e) {
            alert(e);
        }
    }

    viewCode() {
        Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
        let code = Blockly.JavaScript.workspaceToCode(workspace);
        let codeDiv = document.getElementById('codeDiv');
        let html = Prism.highlight(code, Prism.languages.javascript, 'javascript');
        codeDiv.innerHTML = html;
    }
}

//  Block initiarize

let blocklyArea = document.getElementById('blocklyArea');
let blocklyDiv = document.getElementById('blocklyDiv');
let toolboxText = document.getElementById('toolbox').outerHTML;
let toolboxXml = Blockly.Xml.textToDom(toolboxText);
let workspace = Blockly.inject(blocklyDiv, {
    media: '../../media/',
    toolbox: toolboxXml,
    collapse: true,
    comments: true,
    disable: false,
    maxBlocks: Infinity,
    trashcan: true,
    horizontalLayout: false,
    toolboxPosition: 'start',
    css: true,
    media: 'https://blockly-demo.appspot.com/static/media/',
    rtl: false,
    scrollbars: true,
    sounds: true,
    oneBasedIndex: true,
    grid: {
        spacing: 20,
        length: 1,
        colour: '#888',
        snap: true
    },
    zoom: {
        controls: true,
        wheel: false,
        startScale: 1,
        maxScale: 3,
        minScale: 0.3,
        scaleSpeed: 1.2
    }
});

Blockly.Xml.domToWorkspace(document.getElementById('startBlocks'), workspace);

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


var blockp5 = new Blockp5();
blockp5.viewCode();
blockp5.runCode();

document.getElementById('p5Run').onclick = function() {
    blockp5.status = "run";
    blockp5.runCode();
};

document.getElementById('p5Pause').onclick = function() {
    blockp5.status = "pause";
}

document.getElementById('p5Reset').onclick = function() {
    if (confirm("Reset All!")) {
        window.scrollTo(0, 0);
        location.reload(false);
    }
};

document.getElementById('blockly_code_tab').onclick = function() {
    blockp5.viewCode();
};
