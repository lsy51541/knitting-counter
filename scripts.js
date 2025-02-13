let countNum = 0;
let count;
count = document.getElementById("count-num");

console.log(count);

function increment() {
    countNum ++;
    count.textContent = countNum;
}

