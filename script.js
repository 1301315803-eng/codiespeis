console.log("script started");

function changeStyle() {

    //get the p element and store it in a variable 
    let p = document.getElementById("text");
    p.innerText = "the text has been chaged";

    //set some styles 
    p.style.color = "red";
    p.style.fontSize = "50px";
    p.style.textAlign = "center";
    p.style.backgroundColor = "conflowerblue";
}


function resetStyle() {
    console.log ("click");
    let p = document.getElementById("text");

    //reset st
}