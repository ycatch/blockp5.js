// Resize for browser window
// Compute the absolute coordinates and dimensions of blocklyArea.
export function onResize(blocklyManager) {
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
