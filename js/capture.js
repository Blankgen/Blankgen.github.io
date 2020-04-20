let containerWidth = container.offsetWidth

window.addEventListener("resize", () => {
    containerWidth = container.offsetWidth
})

document.getElementById("button").addEventListener("click", function() {
    html2canvas(container, {scale:1000/containerWidth}).then(function(canvas){
        var a = document.createElement('a');
        a.href = canvas.toDataURL("blank.png");
        a.download = 'myfile.png';
        a.click();
    })
})
