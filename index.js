//declaring variable
const computerEl = document.getElementById('ai-oponent');
const userEl = document.getElementById('player');
const resultEl = document.getElementById('result');
const allButtons = document.querySelectorAll('.btns');
const computerChoices = ['Rock', 'Paper', 'Scissors'];
const results = ""
//declaring the  funtionallity 

allButtons.forEach(allButton => 
    allButton.addEventListener('click', function(e) {
     let choicesEl = e.target.textContent;

    userEl.innerHTML = choicesEl;
    
    //for computer
   let random = Math.floor(Math.random() * computerChoices.length)
    let computerChoice = computerChoices[random]
   computerEl.innerHTML = computerChoice

   // for result
   let results = ""

   if(choicesEl === computerChoice){
        results = "Its Draw!"
   }

    if(choicesEl === "Paper" && computerChoice === "Rock"){
        results = "You Win!"
   }

   if(choicesEl === "Rock" && computerChoice === "Paper"){
        results = "You Lost!"
   }

   if(choicesEl === "Scissors" && computerChoice === "Paper" ){
        results = "You Win!"
   }

   if(choicesEl === "Paper" && computerChoice === "Scissors" ){
        results = "You Lost!"
    }

   if(choicesEl === "Rock" && computerChoice === "Scissors" ){
        results = "You Win!"
    }

    if(choicesEl === "Scissors" && computerChoice === "Rock" ){
        results = "You Lost!"
    }

    resultEl.innerHTML = results

}));

