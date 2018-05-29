//  Block Initialize

export function blockInit() {
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

    return workspace;
}
