function hitungDeterminan() {
    var inputA = document.getElementById('inputA').value;
    var inputB = document.getElementById('inputB').value;
    var inputC = document.getElementById('inputC').value;

    // Validate inputs
    if (inputA === '' || inputB === '' || inputC === '') {
        alert('Silakan isi semua nilai A, B, dan C.');
        return;
    }

    var A = parseFloat(inputA);
    var B = parseFloat(inputB);
    var C = parseFloat(inputC);

    // Check if inputs are valid numbers
    if (isNaN(A) || isNaN(B) || isNaN(C)) {
        alert('Harap masukkan nilai numerik yang valid.');
        return;
    }

    var determinan = B * B - 4 * A * C;

    var keterangan = '';
    if (determinan > 0) {
        keterangan = 'Nilai determinan lebih dari nol, berada di atas garis kurva.';
    } else if (determinan === 0) {
        keterangan = 'Nilai determinan sama dengan nol, berada di garis kurva.';
    } else {
        keterangan = 'Nilai determinan kurang dari nol, berada di bawah garis kurva.';
    }

    document.getElementById('outputDeterminan').innerHTML = 'Determinan: ' + determinan;
    document.getElementById('outputKeterangan').innerHTML = 'Keterangan: ' + keterangan;
}

function resetInput() {
    document.getElementById('inputA').value = '';
    document.getElementById('inputB').value = '';
    document.getElementById('inputC').value = '';
    document.getElementById('outputDeterminan').innerHTML = '';
    document.getElementById('outputKeterangan').innerHTML = '';
}
