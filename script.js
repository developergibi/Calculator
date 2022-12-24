let button = document.getElementsByName("fig");
let screen = document.getElementById("screen");

for(var i =0; i <15; i++){
    button[i].addEventListener("click", enteryscreen); 
}

function enteryscreen() {
    screen.value = screen.value + this.value;
}

function equals(){
    var calculate  = eval(screen.value);
    screen.value   = calculate;
}

function ac(){
    screen.value = null;
}