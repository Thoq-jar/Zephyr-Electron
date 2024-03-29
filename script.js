function showSaveDialog() {
    document.getElementById('saveDialog').style.display = 'block';
}

function hideSaveDialog() {
    document.getElementById('saveDialog').style.display = 'none';
}

function saveFile() {
    console.log("Save called...");
    showSaveDialog();
}

document.getElementById('saveButton').addEventListener('click', function() {
    var fileName = document.getElementById('filenameInput').value;
    console.log("fileName:", fileName);
    if (fileName != null && fileName != "") {
        var textToSave = document.getElementById("editor").value;
        console.log("textToSave:", textToSave);

        // Extract the file extension from the filename
        var fileExtension = fileName.split('.').pop().toLowerCase();
        console.log("fileExtension:", fileExtension);

        // Set the MIME type based on the file extension
        var mimeType;
        switch (fileExtension) {
            case 'html':
                mimeType = 'text/html';
                break;
            case 'css':
                mimeType = 'text/css';
                break;
            case 'js':
                mimeType = 'application/javascript';
                break;
            case 'json':
                mimeType = 'application/json';
                break;
            case 'txt':
                mimeType = 'text/plain';
                break;
            case 'xml':
                mimeType = 'application/xml';
                break;
            // Add more cases as needed for other file types
            default:
                mimeType = 'application/octet-stream'; // Fallback to a generic binary MIME type
        }

        console.log("mimeType:", mimeType);

        var blob = new Blob([textToSave], { type: mimeType });
        var url = URL.createObjectURL(blob);
        var a = document.createElement("a");
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        hideSaveDialog();
    }
});

document.getElementById('cancelButton').addEventListener('click', function() {
    hideSaveDialog();
});

// Function to clear the editor
function clearEditor() {
    var confirmation = confirm("Are you sure you want to clear your project? (Make sure you saved anything you wanted to keep!)");
    if (confirmation) {
        document.getElementById("editor").value = "";
    }
}

// Function to display a message
function showMessage(message, color) {
    var messageBox = document.createElement("div");
    messageBox.style.position = "fixed";
    messageBox.style.top = "10px";
    messageBox.style.left = "50%";
    messageBox.style.transform = "translateX(-50%)";
    messageBox.style.padding = "10px 20px";
    messageBox.style.backgroundColor = color;
    messageBox.style.color = "white";
    messageBox.style.borderRadius = "5px";
    messageBox.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.2)";
    messageBox.style.zIndex = "9999";
    messageBox.textContent = message;
    document.body.appendChild(messageBox);
    setTimeout(function () {
        document.body.removeChild(messageBox);
    }, 3000);
}

// Function for smooth typing animation
function smoothTyping() {
    clearTimeout(timer);
    var timer = setTimeout(function () {
        document.querySelector(".container").style.animation = "none";
    }, 500);
    document.querySelector(".container").style.animation = "pageSlideUp 0.5s ease";
}

function changeFontFamily() {
    var fontFamily = document.getElementById("fontFamilyPicker").value;
    document.getElementById("editor").style.fontFamily = fontFamily;
}

function toggleHighContrast() {
    var body = document.body;
    var editor = document.getElementById("editor");
    if (body.classList.contains("high-contrast")) {
        // Switch to regular mode
        body.classList.remove("high-contrast");
        editor.classList.remove("high-contrast");
    } else {
        // Switch to high contrast mode
        body.classList.add("high-contrast");
        editor.classList.add("high-contrast");
    }
}

// Generate font size options dynamically
var fontSizePicker = document.getElementById("fontSizePicker");
for (var i = 1; i <= 500; i++) {
    var option = document.createElement("option");
    option.value = i + "px";
    option.textContent = i;
    fontSizePicker.appendChild(option);
}

// Function to change font size from select element
function changeFontSize() {
    var fontSize = document.getElementById("fontSizePicker").value;
    document.getElementById("editor").style.fontSize = fontSize;
}

// Function to change font size from input field
function changeFontSizeFromInput() {
    var fontSize = document.getElementById("fontSizeInput").value;
    document.getElementById("editor").style.fontSize = fontSize + "px";
}

function changeFontFamily() {
    var fontFamily = document.getElementById("fontFamilyPicker").value;
    document.getElementById("editor").style.fontFamily = fontFamily;
}

function toggleBold() {
    document.execCommand("bold", false, null);
    updateStyle();
}

function toggleItalic() {
    document.execCommand("italic", false, null);
    updateStyle();
}

function toggleUnderline() {
    document.execCommand("underline", false, null);
    updateStyle();
}

function toggleCrossout() {
    document.execCommand("strikeThrough", false, null);
    updateStyle();
}

function alignLeft() {
    document.execCommand("justifyLeft", false, null);
    updateStyle();
}

function alignCenter() {
    document.execCommand("justifyCenter", false, null);
    updateStyle();
}

function alignRight() {
    document.execCommand("justifyRight", false, null);
    updateStyle();
}

function alignJustify() {
    document.execCommand("justifyFull", false, null);
    updateStyle();
}

function changeFontSize() {
    var fontSize = document.getElementById("fontSizePicker").value;
    document.getElementById("editor").style.fontSize = fontSize;
}

document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === 's') {
        event.preventDefault();
        saveFile();
    }else if (event.ctrlKey && event.key === 'o') {
        event.preventDefault();
        loadFile();
    }
});

function updateStyle() {
    var fontFamily = document.getElementById("fontFamilyPicker").value;
    var isBold = document.queryCommandState("bold");
    var isItalic = document.queryCommandState("italic");
    var isUnderline = document.queryCommandState("underline");
    var isCrossout = document.queryCommandState("strikeThrough");
    var textAlign = document.queryCommandValue("justify");

    var style = "font-family: " + fontFamily + ";";
    if (isBold) style += " font-weight: bold;";
    if (isItalic) style += " font-style: italic;";
    if (isUnderline) style += " text-decoration: underline;";
    if (isCrossout) style += " text-decoration: line-through;";
    style += " text-align: " + textAlign + ";";

    document.getElementById("editor").setAttribute("style", style);
}

function updateEditor(content) {
    var editor = document.getElementById('editor');
    editor.textContent = content;
    Prism.highlightAll();
}

function loadFile() {
    var fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.txt';
    fileInput.onchange = function (event) {
        var file = event.target.files[0];
        var reader = new FileReader();
        reader.onload = function (event) {
            document.getElementById('editor').value = event.target.result;
        };
        reader.readAsText(file);
    };
    fileInput.click();
}

function toggleLightMode() {
    var body = document.body;
    var editor = document.getElementById("editor");
    var buttons = document.getElementsByClassName("button");
    if (body.classList.contains("light-mode")) {
        // Switch to default mode
        body.classList.remove("light-mode");
        editor.classList.remove("light-mode");
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove("light-mode");
        }
    } else {
        // Switch to light mode
        body.classList.add("light-mode");
        editor.classList.add("light-mode");
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].classList.add("light-mode");
        }
    }
}

// Function to show about the editor
function about() {
    alert("Zephyr version 3.6.24 (Nebula) running Electron powered by Microsoft Azure | developed by Tristan");
}

// Auto-save functionality
let AUTO_SAVE_INTERVAL = 100;
setInterval(function () {
    const textToSave = document.getElementById("editor").value;
    localStorage.setItem("zephyr_cloud_autosave", textToSave);
}, AUTO_SAVE_INTERVAL);

function changeBackgroundColor() {
    var bgColor = document.getElementById("bgColorPicker").value;
    document.body.style.backgroundColor = bgColor;
    document.getElementById("editor").style.backgroundColor = bgColor;

    // Automatically adjust text color based on background color
    var textColor = getTextColor(bgColor);
    document.getElementById("editor").style.color = textColor;
}

function getTextColor(bgColor) {
    // Convert hex color to RGB
    var hex = bgColor.replace("#", "");
    var r = parseInt(hex.substring(0, 2), 16);
    var g = parseInt(hex.substring(2, 4), 16);
    var b = parseInt(hex.substring(4, 6), 16);

    // Calculate luminance
    var luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

    // Choose text color based on luminance
    return luminance > 0.5 ? "#000000" : "#ffffff";
}

// Restore auto-saved content
window.onload = function () {
    var autosavedContent = localStorage.getItem("zephyr_cloud_autosave");
    if (autosavedContent) {
        document.getElementById("editor").value = autosavedContent;
    }

};
