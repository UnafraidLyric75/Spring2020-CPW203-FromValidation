window.onload = function(){
    let formbtn = <HTMLElement>document.querySelector("form > button");
    formbtn.onclick = main;
}

function main():void{
    resetErrorMessages();
    isTextPresent("first-name", "First name is required");
    isTextPresent("last-name", "Last name is required");
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