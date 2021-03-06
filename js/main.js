window.onload = function () {
    let formbtn = document.querySelector("form > button");
    formbtn.onclick = main;
};
function changeHeading() {
    let heading = this;
}
function main() {
    let msgHeading = document.createElement("h2");
    msgHeading.innerText = "Processing form.";
    msgHeading.setAttribute("class", "message");
    let h1 = document.querySelector("h1");
    h1.insertAdjacentElement("afterend", msgHeading);
    setTimeout(function () {
        msgHeading.remove();
    }, 500);
    resetErrorMessages();
    isTextPresent("first-name", "First name is required");
    isTextPresent("last-name", "Last name is required");
    validdateDate();
}
function validdateDate() {
    let dobBox = document.getElementById("dob");
    let dob = dobBox.value;
    if (!isValidDate(dob)) {
        dobBox.nextElementSibling.innerHTML = "Invalid date foramt mm/dd/yyyy or m/d/yyyy";
    }
}
function isValidDate(input) {
    let pattern = /\d{1,2}\/\d{1,2}\/\d{4}/g;
    return pattern.test(input);
}
function resetErrorMessages() {
    let allSpans = document.querySelectorAll("form span");
    for (let i = 0; i < allSpans.length; i++) {
        let currSpan = allSpans[i];
        if (currSpan.hasAttribute("data-required")) {
            currSpan.innerText = "*";
        }
        else {
            currSpan.innerText = "";
        }
    }
}
function isTextPresent(id, errMsg) {
    let txtBox = document.getElementById(id);
    let txtBoxValue = txtBox.value;
    if (txtBoxValue == "") {
        let errSpan = txtBox.nextElementSibling;
        errSpan.innerText = errMsg;
        return false;
    }
    return true;
}
