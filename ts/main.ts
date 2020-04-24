window.onload = function(){
    let formbtn = <HTMLElement>document.querySelector("form > button");
    formbtn.onclick = main;
}

function changeHeading(){
    let heading = <HTMLElement>this;
}

function main():void{
    let msgHeading = document.createElement("h2");
    msgHeading.innerText = "Processing form.";
    msgHeading.setAttribute("class", "message");
    let h1 = document.querySelector("h1");
    h1.insertAdjacentElement("afterend", msgHeading);

    setTimeout(function(){
        msgHeading.remove();
    }, 500)

    resetErrorMessages();
    isTextPresent("first-name", "First name is required");
    isTextPresent("last-name", "Last name is required");
    validdateDate();
}

function validdateDate() {
    let dobBox = <HTMLInputElement>document.getElementById("dob");
    let dob = dobBox.value;
    if (!isValidDate(dob)) {
        dobBox.nextElementSibling.innerHTML = "Invalid date foramt mm/dd/yyyy or m/d/yyyy";
    }
}

function isValidDate(input:string):boolean{
    // Validating mm/dd/yyyy and m/d/yyyy
    let pattern = /\d{1,2}\/\d{1,2}\/\d{4}/g;
    return pattern.test(input);
}

/**
 * Resets all the spans back to the default text
 */
function resetErrorMessages():void{
    let allSpans= document.querySelectorAll("form span");
    for(let i = 0; i < allSpans.length; i++){
        let currSpan = <HTMLElement>allSpans[i];
        if (currSpan.hasAttribute("data-required")){
            currSpan.innerText = "*";
        } else{
            currSpan.innerText = "";
        }
    }
}

/**
 * Returns true if the textbox with the given id
 * has some text inside it
 * @param id id The id of the <input type="text"> to validate
 * @param errMsg errMsg The message to display in the sibling span of the textbox
 */
function isTextPresent(id:string, errMsg:string):boolean {
    let txtBox = <HTMLInputElement>document.getElementById(id);
    let txtBoxValue = txtBox.value;
    if (txtBoxValue == "") {
        let errSpan = <HTMLSpanElement>txtBox.nextElementSibling;
        errSpan.innerText = errMsg;
        return false;
    }
    return true;
}