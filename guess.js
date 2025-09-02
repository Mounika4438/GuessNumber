// my code

// let random=Math.ceil(Math.random()*10)
// let input=document.getElementById("input")
// let result=document.getElementById("result")
// let score=document.getElementById("score")
// let attempts=document.getElementById("attempts")
// let count=0
// let no_of_attempts=5
// function guessBtn(){
//     count++
//     if(no_of_attempts>0 & no_of_attempts<=5)
//         {
//         if(input.value==random)
//             {
//             result.textContent="Congrats! Your guess is correct"
//             result.style.color="green"
//             score.textContent="No.of Chances you take to guess: "+count;
//             score.style.color="blue";
            
//             }
//         else if (input.value>random)
//             {
//             result.textContent="OOps! Your guess is TOO HIGH"
//             result.style.color="red"
//             no_of_attempts--;
//             attempts.textContent="You left with "+no_of_attempts+" attempts"

//             }
//         else if (input.value<random)
//             {
//             result.textContent="Oops! your guess is TOO LOW"
//             result.style.color="red"
//             no_of_attempts--;
//             attempts.textContent="You left with "+no_of_attempts+" attempts"

//             }
//         }
        
// }



let random = Math.ceil(Math.random() * 10);
let input = document.getElementById("input");
let result = document.getElementById("result");
let score = document.getElementById("score");
let attempts = document.getElementById("attempts");
let count = 0;
let no_of_attempts = 5;

function guessBtn() {
    if (no_of_attempts > 0) {
        count++;
        let guess = Number(input.value); // convert to number

        if (guess === random) {
            result.textContent = "🎉 Congrats! Your guess is correct!";
            result.style.color = "green";
            score.textContent = "You took " + count + " chances to guess it!";
            score.style.color = "blue";
            no_of_attempts = 0; // stop the game
        } 
        else if (guess > random) {
            result.textContent = "📈 Oops! Your guess is TOO HIGH";
            result.style.color = "red";
            no_of_attempts--;
            attempts.textContent = "You have " + no_of_attempts + " attempts left";
        } 
        else if (guess < random) {
            result.textContent = "📉 Oops! Your guess is TOO LOW";
            result.style.color = "red";
            no_of_attempts--;
            attempts.textContent = "You have " + no_of_attempts + " attempts left";
        }
    }

    if (no_of_attempts === 0 && Number(input.value) !== random) {
        result.textContent = "💀 Game Over! The number was " + random;
        result.style.color = "orange";
    }
}
