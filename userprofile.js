var changename;
var changephone;
var changedob;
var changecity;
var nameInput = document.getElementById("nameinput");
var phoneInput = document.getElementById("phoneinput");
var dobInput = document.getElementById("DOBinput");
var addressInput = document.getElementById("Addressinput");
function dateformating(dob) {
    var parts = dob.split("-");
    return "".concat(parts[2], "-").concat(parts[1], "-").concat(parts[0]);
}
window.onload = function () {
    changename = localStorage.getItem("username") || "";
    changephone = localStorage.getItem("userphone") || "";
    changedob = localStorage.getItem("userdob") || "";
    changecity = localStorage.getItem("city") || "";
    nameInput.value = changename;
    phoneInput.value = changephone;
    dobInput.value = changedob ? dateformating(changedob) : "";
    addressInput.value = changecity;
};
function saveChanges() {
    localStorage.setItem("username", nameInput.value);
    localStorage.setItem("userphone", phoneInput.value);
    localStorage.setItem("userdob", dobInput.value);
    localStorage.setItem("city", addressInput.value);
    window.location.href = "index.html";
}
function Cancel() {
    localStorage.removeItem("username");
    localStorage.removeItem("userphone");
    localStorage.removeItem("userdob");
    localStorage.removeItem("city");
    localStorage.removeItem("elementid");
    window.location.href = "index.html";
}
