function addToDisplay(value) {
    document.getElementById("display").value += value;

}
function clearDisplay() {
    document.getElementById("display").value = " ";

}
function leftDelete() {
    let str = document.getElementById("display").value;
    let result = str.substring(0, str.length - 1);

    document.getElementById("display").value = result;
}
function calculate() {
    let str = document.getElementById("display").value
    console.log(str)
    let result = 0;
    document.getElementById("displayResult").value = result
}