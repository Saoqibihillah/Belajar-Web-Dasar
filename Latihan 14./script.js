function hitungHasil() {
    var nilai = parseInt(document.getElementById('nilai').value);
    var hasilDiv = document.getElementById('hasil');
    var hasil = '';

    // Menampilkan hasil sesuai aturan
    if (nilai === 3) {
        hasil = 'TI';
    } else if (nilai === 5) {
        hasil = 'Unindra';
    } else if (nilai === 15) {
        hasil = 'WEB';
    }

    // Menampilkan hasil pengulangan
    hasilDiv.innerHTML = '<p style="color: #333;">Hasil Pengulangan:</p>' + hasil.trim();
}

function resetHasil() {
    document.getElementById('nilai').value = '';
    document.getElementById('hasil').innerHTML = '';
}
