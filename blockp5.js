var PJs;
var blocklyArea = document.getElementById('blocklyArea');
// var blocklyDiv = document.getElementById('blocklyDiv');
var blocklyDiv = document.getElementById('blocklyDiv');
var toolboxText = document.getElementById('toolbox').outerHTML;
var toolboxXml = Blockly.Xml.textToDom(toolboxText);
var workspace = Blockly.inject(blocklyDiv, {
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

var onresize = function(e) {
    // Compute the absolute coordinates and dimensions of blocklyArea.
    var element = blocklyArea;
    var x = 0;
    var y = 0;
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

var runCode = function() {
    // Generate JavaScript code and run it.
    window.LoopTrap = 1000;
    Blockly.JavaScript.INFINITE_LOOP_TRAP =
        'if (--window.LoopTrap == 0) throw "Infinite loop.";\n';
    var code = Blockly.JavaScript.workspaceToCode(workspace);
    Blockly.JavaScript.INFINITE_LOOP_TRAP = null;

    try {
        var s = new Function("p", code);
        Pjs = new p5(s);
    } catch (e) {
        alert(e);
    }
}

var setCode = function() {
    // Generate JavaScript code and display it.
    Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
    var code = Blockly.JavaScript.workspaceToCode(workspace);
    var codeDiv = $("#codeDiv");
    codeDiv.text(code);
    codeDiv.each(function(i, block) {
        hljs.highlightBlock(block);
    });
}

var init = function() {

    $("#p5Run").click(function() {
        execStatus = "run";
        runCode();
    });

    // Pause
    $("#p5Pause").click(function() {
        execStatus = "pause";
    });

    $("#p5Reset").click(function() {
        if (confirm("Reset All!")) {
            $(window).scrollTop(0);
            location.reload(false);
        }
    });

    //rshow to Code tab
    $("#blockly_code_tab").click(function() {
        setCode();
    });

    $(window).scrollTop(0);
    workspace.resizeContents();
    setCode();
}

var execStatus = "run";
window.addEventListener('resize', onresize, false);
init();
runCode();

setTimeout(function() {
    onresize();
    Blockly.svgResize(workspace);
}, 1000)
