//your JS code here. If required.
const counter = document.getElementById("counter");

function handleCounter(){
    const num = parseInt(counter.textContent);
    alert(num);
    counter.textContent = num + 1;
}
