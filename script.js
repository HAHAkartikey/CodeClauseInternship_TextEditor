
const fontFamilySelect = document.getElementById('font-family');
const fontSizeInput = document.getElementById('font-size');
const fontColorInput = document.getElementById('font-color');
const fontStyleSelect = document.getElementById('font-style');
const saveButton = document.getElementById('save-button');
const editor = document.getElementById('editor');


function applyStyles() {
    editor.style.fontFamily = fontFamilySelect.value;
    editor.style.fontSize = fontSizeInput.value + 'px';
    editor.style.color = fontColorInput.value;
    editor.style.fontStyle = fontStyleSelect.value;
}


fontFamilySelect.addEventListener('change', applyStyles);
fontSizeInput.addEventListener('input', applyStyles);
fontColorInput.addEventListener('input', applyStyles);
fontStyleSelect.addEventListener('change', applyStyles);


saveButton.addEventListener('click', () => {
    const content = editor.value;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'text.txt';
    a.click();
    URL.revokeObjectURL(url);
});


applyStyles();
