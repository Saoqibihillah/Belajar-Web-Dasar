function hitungBiaya() {
    // Mengambil nilai merk, harga per sak, dan jumlah pembelian dari inputan user
    var merkSemen = document.getElementById('inputMerk').value;
    var hargaPerSak = parseFloat(document.getElementById('inputHargaPerSak').value);
    var jumlahPembelian = parseInt(document.getElementById('inputJumlahPembelian').value);

    // Menghitung total biaya
    var totalBiaya = hargaPerSak * jumlahPembelian;

    // Menentukan biaya pengiriman
    var biayaPengiriman = 0;
    if (jumlahPembelian < 10) {
        biayaPengiriman = 5000;
    }

    // Menghitung diskon
    var diskon = 0;
    if (jumlahPembelian > 10) {
        diskon = 0.05 * totalBiaya; // 5% diskon
    }

    // Menghitung total biaya yang harus dibayar setelah diskon
    var totalBiayaDibayar = totalBiaya + biayaPengiriman - diskon;

    // Menampilkan hasil perhitungan
    document.getElementById('outputMerk').innerHTML = 'Merk Semen: ' + merkSemen;
    document.getElementById('outputJumlahPembelian').innerHTML = 'Jumlah Pembelian: ' + jumlahPembelian;
    document.getElementById('outputDiskon').innerHTML = 'Diskon: Rp. ' + diskon.toLocaleString(); // Displaying discount
    document.getElementById('outputTotalBiaya').innerHTML = 'Total Biaya yang Harus Dibayar: Rp. ' + totalBiayaDibayar.toLocaleString(); // Menambahkan formatting untuk angka
}

// Fungsi resetInput untuk membersihkan input dan output
function resetInput() {
    document.getElementById('inputMerk').value = '';
    document.getElementById('inputHargaPerSak').value = '';
    document.getElementById('inputJumlahPembelian').value = '';
    document.getElementById('outputMerk').innerHTML = '';
    document.getElementById('outputJumlahPembelian').innerHTML = '';
    document.getElementById('outputDiskon').innerHTML = '';
    document.getElementById('outputTotalBiaya').innerHTML = '';
}
