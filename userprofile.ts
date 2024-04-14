type uname = string;
type uphone = string;
type dob = string;
type address = string;

let changename: uname;
let changephone: uphone;
let changedob: dob;
let changecity: address;

const nameInput = document.getElementById("nameinput") as HTMLInputElement;
const phoneInput = document.getElementById("phoneinput") as HTMLInputElement;
const dobInput = document.getElementById("DOBinput") as HTMLInputElement;
const addressInput = document.getElementById("Addressinput") as HTMLInputElement;


function dateformating(dob: string): string {
    const parts = dob.split("-");
    return `${parts[2]}-${parts[1]}-${parts[0]}`;
}


window.onload = () => {
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

function Cancel()
{
    localStorage.removeItem("username");
    localStorage.removeItem("userphone");
    localStorage.removeItem("userdob");
    localStorage.removeItem("city")
    localStorage.removeItem("elementid")
    window.location.href="index.html"
}