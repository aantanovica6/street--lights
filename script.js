function changeColor(){
    let redCircle = document.getElementById("red");
    if(redCircle.style.backgroundColor == "red"){
        redCircle.style.backgroundColor = "black";
    }else{
        redCircle.style.backgroundColor = "black";
    }    
}
function clearLights() {
  document.getElementById('stopLight').style.backgroundColor = "black";
  document.getElementById('switchLight').style.backgroundColor = "black";
  document.getElementById('goLight').style.backgroundColor   = "black";
}

