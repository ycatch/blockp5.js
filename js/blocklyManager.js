//  Manager for Blockly

export class BlocklyManager {
    constructor() {
        this._area = document.getElementById('blocklyArea');
        this._div = document.getElementById('blocklyDiv');
        this._toolboxText = document.getElementById('toolbox').outerHTML;
        this._toolboxXml = Blockly.Xml.textToDom(this._toolboxText);
        this._workspace = Blockly.inject(this._div, {
            media: '../../media/',
            toolbox: this._toolboxXml,
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

        Blockly.Xml.domToWorkspace(document.getElementById('startBlocks'), this._workspace);
    }

    get area() {
        return this._area;
    }

    get div() {
        return this._div;
    }

    get toolboxText() {
        return this._toolboxText;
    }

    get toolboxXml() {
        return this._toolboxXml;
    }

    get workspace() {
        return this._workspace;
    }
}
