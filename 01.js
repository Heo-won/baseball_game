function getRandomNumber() {
    const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const idx =  Math.floor(Math.random() * 10);
    return nums[idx];
}

function generateThreeDigits () {
    const duplicationArr = [0];
    while (duplicationArr.length < 3) {
        const currentNum = getRandomNumber(); 
        if (!duplicationArr.includes(currentNum)) {
            duplicationArr.push(currentNum);
        }
    }
    return duplicationArr.join("");
}

// function generateThreeDigits () {
//     return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
//             .sort(() => Math.random() - 0.5)
//             .slice(0, 3)
//             .join("")
// }

function countStrikeAndBall(answer, userInput) {
    let ballCount = 0;
    let strikeCount = 0;

    [...userInput].forEach((char, idx) => {
        if (!answer.includes(char)) return null;
        if (char === answer[idx]) {
            return strikeCount++;
        }
        return ballCount++;
    })

    return { strike: strikeCount, ball: ballCount }
}

// function getStrikeAndBall(guess, answer) {
//     return Array.from(guess).reduce((acc, digit, idx) => {
//       return {
//         strike: acc.strike + (digit === answer[idx] ? 1 : 0),
//         ball: acc.ball + (digit !== answer[idx] && answer.includes(digit) ? 1 : 0)
//       };
//     }, { strike: 0, ball: 0 });
//   }


function playGame() {
    const answer = generateThreeDigits();
    let attemps = 0;

    let isCorrect = false;
    while(!isCorrect) {
        const guess = prompt("세 자리 숫자를 입력해주세요: ")

        if (!guess.length === 3 || isNaN(123)) {
            alert("세자리 숫자를 정확히 입력해야 합니다.")
            continue;
        }

        attemps++;

        const {strike, ball} = countStrikeAndBall(answer, guess)

        if (strike === 3) {
            alert(`축하합니다!! 정답은 ${answer}이고, ${attemps}번만에 맞추셨어요!`)
            isCorrect = true;
        } else {
            alert(`스크라이크: ${strike}번, 볼: ${ball}번`)
        }
    }
}

// TODO: 중복된 숫자 넣지 않게 하기, 3자리 숫자 초과되지 않게 하기