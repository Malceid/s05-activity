
const ans = Math.floor(Math.random() *101)
let guess;
userinput()


for (let i = 1;i <= 10;i++) {
	if (guess == ans) {
		console.log(`Congratulations, you guessed the number in ${i} attempts`)
		break;
	} else if (i == 10){
		console.log(`You have failed after ${i} attempts. Try again next time!`)
	} else if(guess < ans) {
		console.log("Too low! Guess again")
		userinput()
	} else if(guess > ans) {
		console.log("Too high! Guess again")
		userinput()
	}
}

function userinput(){
	guess = prompt("Guess a number between 1 and 100: ") 
}