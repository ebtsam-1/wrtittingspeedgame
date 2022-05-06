// words array

let wordsArray = [
    "Town",
    "Country",
    "Github",
    "Twitter",
    "Python",
    "Scale",
    "Internet",
    "Destructuring",
    "Dependencies",
    "Superheros",
    "Serfactants",
    "Congratulations",
    "Happy",
    "Youtube",
    "Leetcode",
    "Cascade",
    "Working",
    "JavaScript",
    "fullstack",
    "Roses",
];

// setting levels

const lvls ={
    "Easy": 7,
    "Normal":5,
    "Hard":3
};



// setting variables

let lvlSpan =document.querySelector(".message .lvl");
let lvlSec =document.querySelector(".message .seconds");

Object.keys(lvls).forEach((ele) =>{
    let option = document.createElement("option");
    let optionTxt = document.createTextNode(ele);
    option.appendChild(optionTxt)
    document.getElementById("selectLvl").appendChild(option)
});


let defaultLvl = document.getElementById("selectLvl").value;
let defaultLvlSec = lvls[defaultLvl];
console.log(defaultLvl)


lvlSpan.style.fontSize = "1.4rem";
lvlSec.style.fontSize = "1.4rem";
lvlSec.innerHTML = defaultLvlSec;


let startBtn =document.querySelector(".start");
let word =document.querySelector(".the-word");
let input =document.querySelector("#input");
let upcomingWords =document.querySelector(".upcoming-words");
let timeLeft =document.querySelector(".control .time span");
let scoreGot =document.querySelector(".control .score .got");
let scoreTotal =document.querySelector(".control .score .total");
let finishBox =document.querySelector(".finish");

timeLeft.innerHTML = defaultLvlSec;
scoreTotal.innerHTML = wordsArray.length;

function setSecondValue(){
    defaultLvl = document.getElementById("selectLvl").value
    defaultLvlSec = lvls[defaultLvl];
    console.log(defaultLvl)
    lvlSec.innerHTML = defaultLvlSec;
    timeLeft.innerHTML = defaultLvlSec;
}
startBtn.onclick = function(){
    startBtn.remove();
    input.focus()
    
    wordGeneration();
}

function wordGeneration(){
    let theWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];
    word.innerHTML = theWord;

    let theWordIndex = wordsArray.indexOf(theWord);

    wordsArray.splice(theWordIndex,1);
    
    upcomingWords.innerHTML = '';
    wordsArray.forEach((ele) =>{
        let upcomingWordsSpan = document.createElement("span");
        let upcomingWordsSpanText = document.createTextNode(ele);
        upcomingWordsSpan.appendChild(upcomingWordsSpanText);
        upcomingWords.appendChild(upcomingWordsSpan);
    })
    timeLeft.innerHTML = defaultLvlSec;
    play()

}

function play(){
       
       let gameTime = setInterval(() =>{
          timeLeft.innerHTML--;    

          if(timeLeft.innerHTML == 0){
              clearInterval(gameTime);
              if(input.value.toLowerCase() == word.innerHTML.toLowerCase()){
                  scoreGot.innerHTML++
                  input.value = "";
                  if(wordsArray.length > 0){
                    wordGeneration()
                  }else
                  {
                      finishBox.innerHTML = "Congratulations"
                  }
                  
              }
              else{
                  finishBox.innerHTML = "Game Over"
              }
          }
       },1000);
}

