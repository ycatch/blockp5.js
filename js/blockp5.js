export class Blockp5 {
    constructor(workspace) {
        this.p5_obj = {};
        this.workspace = workspace;
    }

    runCode() {
        window.LoopTrap = 1000;
        Blockly.JavaScript.INFINITE_LOOP_TRAP =
            'if (--window.LoopTrap == 0) throw "Infinite loop.";\n';
        let code = Blockly.JavaScript.workspaceToCode(this.workspace);
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
        let code = Blockly.JavaScript.workspaceToCode(this.workspace);
        let codeDiv = document.getElementById('codeDiv');
        let html = Prism.highlight(code, Prism.languages.javascript, 'javascript');
        codeDiv.innerHTML = html;
    }

}
