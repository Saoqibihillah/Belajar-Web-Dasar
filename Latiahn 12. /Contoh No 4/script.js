function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "" || password === "") {
        alert("Username and password must be filled out");
        return false;
    }

    // Additional validation logic can be added here

    return true;
}
