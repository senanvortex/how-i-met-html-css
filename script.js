// Event listener untuk klik pada htmlDiv
document.getElementById('htmlDiv').addEventListener('click', function() {
    var cssDiv = document.getElementById('cssDiv');
    var htmlDiv = document.getElementById('htmlDiv');
    var containerHeight = document.getElementById('leftDiv').clientHeight;

    if (cssDiv.style.transform === 'translateY(-375px)') {
        // Kembali ke posisi semula
        cssDiv.style.transform = 'translateY(0)';
        htmlDiv.style.transform = 'translateY(0)';
    } else {
        // Pindah ke posisi baru
        cssDiv.style.transform = 'translateY(-375px)';
        htmlDiv.style.transform = `translateY(${containerHeight - htmlDiv.offsetHeight}px)`;
    }
});

// Event listener untuk klik pada cssDiv
document.getElementById('cssDiv').addEventListener('click', function() {
    var cssDiv = document.getElementById('cssDiv');
    var htmlDiv = document.getElementById('htmlDiv');
    var containerHeight = document.getElementById('leftDiv').clientHeight;

    if (cssDiv.style.transform === 'translateY(-375px)') {
        // Kembali ke posisi semula
        cssDiv.style.transform = 'translateY(0)';
        htmlDiv.style.transform = 'translateY(0)';
    } else {
        // Pindah ke posisi baru
        cssDiv.style.transform = 'translateY(-375px)';
        htmlDiv.style.transform = `translateY(${containerHeight - htmlDiv.offsetHeight}px)`;
    }
});
