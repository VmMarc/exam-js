const guess = (userGuess) => {
  let secret = 10
  if (userGuess === secret){
    return 'You win!'
  }else{
    return (userGuess < secret ? 'Too small!' : 'Too big!')
  }
 }

console.log(guess(11))