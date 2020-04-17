document.getElementById("button").addEventListener("click", function() {
    html2canvas(container).then(function(canvas){
        saveAs(canvas.toDataURL(), 'blank.png')
    })
})

function saveAs(url, filename) {
    var link = document.createElement('a');

    if (typeof link.download === 'string') {

        link.href = url;
        link.download = filename;

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

    } else {
        window.open(url);
    }
}