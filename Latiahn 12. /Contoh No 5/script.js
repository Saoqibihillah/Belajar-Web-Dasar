function openModal(imageSrc) {
    var modal = document.getElementById("modal");
    var modalImage = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImage.src = imageSrc;
}

function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}
