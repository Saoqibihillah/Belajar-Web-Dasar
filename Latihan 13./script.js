function calculateVolume() {
    var shape = document.getElementById("shape").value;
    var input1 = parseFloat(document.getElementById("input1").value);
    var input2 = parseFloat(document.getElementById("input2").value);
    var input3 = parseFloat(document.getElementById("input3").value);

    var volume;

    if (shape === "balok") {
        volume = input1 * input2 * input3;
    } else if (shape === "tabung") {
        volume = 3.14 * input1 * input1 * input2;
    } else if (shape === "bola") {
        volume = (4 / 3) * 3.14 * input1 * input1 * input1;
    } else if (shape === "prisma") {
        volume = 0.5 * input1 * input2 * input3;
    } else if (shape === "kerucut") {
        volume = (1 / 3) * 3.14 * input1 * input1 * input2;
    }

    if (!isNaN(volume)) {
        alert("Volume " + shape.charAt(0).toUpperCase() + shape.slice(1) + " adalah: " + volume.toFixed(2));
    } else {
        alert("Masukkan nilai yang valid untuk menghitung volume.");
    }
}
