
function download() {
    const content = document.getElementById("note").value;

    const file = new Blob([content], { type: "text/plain;charset=utf-8" });
    const downloadLink = document.createElement("a");
    downloadLink.download = 'Note--' + Date.now();
    downloadLink.innerHtml = "Download file";

    if (window.webkitURL != null) {
        // Chrome allows the link to be clicked
        // without actually adding it to the DOM.
        downloadLink.href = window.webkitURL.createObjectURL(file);
    } else {
        // Firefox requires the link to be added to the DOM
        // before it can be clicked.
        downloadLink.href = window.URL.createObjectURL(file);
        downloadLink.onclick = destroyClickedElement;
        downloadLink.style.display = "none";
        document.body.appendChild(downloadLink);
    }

downloadLink.click();
}

