function togglePassword() {
    const x = document.getElementById("password");
    const checkbox = document.getElementById("show-password");
    if (checkbox.checked) {
        x.type = "text";
    } else {
        x.type = "password";
    }
}