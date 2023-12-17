const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

function randomChoice() {
  const choices = ['gunting', 'batu', 'kertas'];
  const randomNumber = Math.floor(Math.random() * choices.length);
  return choices[randomNumber];
}

console.clear();

readline.question('Pilihan Pemain: ', (result) => {
  const playerChoice = result; // Fix: assign result, not "result"
  const computerChoice = randomChoice();

  console.log('Pilihan Pemain: ' + playerChoice);
  console.log('Pilihan Computer: ' + computerChoice);

  if ((playerChoice === 'gunting' && computerChoice === 'kertas') || (playerChoice === 'batu' && computerChoice === 'gunting') || (playerChoice === 'kertas' && computerChoice === 'batu')) {
    console.log('Pemain menang');
  } else if (playerChoice === computerChoice) {
    console.log('Pemain seimbang');
  } else {
    console.log('Computer menang');
  }

  readline.close();
});
