window.onload = function(){
    let formbtn = <HTMLElement>document.querySelector("form > button");
    formbtn.onclick = main;
}

function main():void{
    alert("Reg button was clicked");
}