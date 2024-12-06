// 隨機生成 1~100 的數字
const targetNumber = Math.floor(Math.random() * 100) + 1;
let attemptsLeft = 7;
let minRange = 1;
let maxRange = 100;

while (attemptsLeft > 0) {
    let guess = window.prompt(`猜一個數字 (${minRange} ~ ${maxRange})，你有 ${attemptsLeft} 次機會：`);

    // 檢查輸入是否有效
    if (guess === null || guess.trim() === "") {
        alert("請輸入有效的數字！");
        continue;
    }

    guess = Number(guess);

    if (isNaN(guess) || guess < minRange || guess > maxRange) {
        alert(`請輸入一個範圍內的數字 (${minRange} ~ ${maxRange})！`);
        continue;
    }

    attemptsLeft--;

    if (guess === targetNumber) {
        alert("答對了啦！");
        document.getElementById("result").innerHTML = `<img src="/Users/karenhuang/Desktop/images.jpeg" alt="Correct">`;
        break;
    } else if (guess > targetNumber) {
        alert("太大了啦！");
        maxRange = guess - 1;
    } else {
        alert("太小了啦！");
        minRange = guess + 1;
    }

    if (attemptsLeft === 0) {
        alert(`呵呵你已經用完所有機會了!80123`);
        document.getElementById("result").innerHTML = `<img src="/Users/karenhuang/Desktop/123.jpg" alt="Wrong">`;
    }
}
