let textArea = document.getElementById("text-area");

let upperButton = document.getElementById("upper-case");
let lowerButton = document.getElementById("lower-case");
let properButton = document.getElementById("proper-case");
let sentenceButton = document.getElementById("sentence-case");
let downloadButton = document.getElementById("save-text-file");

upperButton.addEventListener("click", function() {
    textArea.value = textArea.value.toUpperCase();
});
lowerButton.addEventListener("click", function() {
    textArea.value = textArea.value.toLowerCase();
});
properButton.addEventListener("click", function() {
    let textValue = textArea.value;
    textValue = textValue.toLowerCase().split(" ");

    for (let i = 0; i < textValue.length; i++) {
        textValue[i] = textValue[i][0].toUpperCase() + textValue[i].slice(1);
    }

    textValue = textValue.join(" ");
    textArea.value = textValue;
    // console.log(titleCase(textValue));
    // console.log(newText);

});
sentenceButton.addEventListener("click", function() {
    let textValue = textArea.value;
    textValue = textValue.toLowerCase().split(" ");

    for (let i = 0; i < textValue.length; i++) {
        // First word
        if (i === 0) {
            textValue[i] = textValue[i][0].toUpperCase() + textValue[i].slice(1);
        }
        // After a period
        if (i !== 0) {
            if(textValue[i-1].endsWith(".")) {
                textValue[i] = textValue[i][0].toUpperCase() + textValue[i].slice(1);
            }
        }
    }
    textValue = textValue.join(" ");
    textArea.value = textValue;
});
downloadButton.addEventListener("click", function() {
    // console.log("DOWNLOAD");
    function download(filename, text) {
        let element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
    }

// Start file download.
    console.log(textArea);
    download("text.txt", textArea.value);
});


