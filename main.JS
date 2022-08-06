let userC = 'boom'

function getUserChoice (userInput){
    userInput = userInput.toLowerCase()
        if(userInput === 'rock' || userInput === 'scissors' || userInput === 'paper' || userInput === 'boom'){
           return userInput
        } else{ console.log('Bad Input.')
        
        }
}




function getComputerChoice(){
   let randomNumber = Math.floor(Math.random() * 3)
   puterC = ''
   switch(randomNumber){
    case 0: puterC = 'rock'
        break;
    case 1: puterC = 'scissors'
        break;
    case 2: puterC = 'paper'
        break;
    default: puterC = 'Redo!'
 }
 return puterC
}




function determineWinner(userChoice, computerChoice){
    if(userChoice === computerChoice){
        console.log(`Tie Game! You both had ${userChoice}.`)
    } else if(userChoice === 'rock' && computerChoice === 'paper'){
        console.log('Computer Wins, Paper beats Rock!')
    } else if(userChoice === 'rock' && computerChoice === 'scissors'){
        console.log('User Wins, Rock beats Scissors')
    } else if(userChoice === 'paper' && computerChoice === 'scissors'){
        console.log('Computer Wins, Scissors beats Paper!')
    } else if(userChoice === 'paper' && computerChoice === 'rock'){
        console.log('User Wins, Paper beats Rock!')
    } else if(userChoice === 'scissors' && computerChoice === 'rock'){
        console.log('Computer Wins, Rock beats Scissors!')
    } else if(userChoice === 'scissors' && computerChoice === 'paper'){
        console.log('User Wins, Scissors beat Paper!')
    } else if(userChoice === 'boom'){
        console.log('KAAAABOOOOOM! User Wins!')
    } else{console.log('Something Went Wrong Try Again.')}
}

function playGame(){
    userChoice = getUserChoice(userC)
    computerChoice = getComputerChoice()
        console.log(`User Chooses: ${userChoice} & Computer Chooses: ${computerChoice}`)
    return determineWinner(userChoice, computerChoice)
}

console.log(playGame());
