





const userInput = document.querySelector("#userInput").value;
let Label = document.querySelector("#randomLabel")
let result = document.querySelector("#result")
let highScore = 20


function getUserValue(){
    let randNum = Math.round(Math.random() * 20 )
    const userInput = document.querySelector("#userInput").value;


Label.textContent = randNum;

if(userInput == randNum ){

    result.textContent = "Yur Anser is Correct"
    document.querySelector("div").style.backgroundColor="green"
    alert("you are won")
  
}
else if (userInput < randNum){
    result.textContent = "Your Value is Low"
        
}
else if (userInput > randNum){
    result.textContent = "Your Value is High"
       
}

else{
    // highScore = highScore-1
    alert("try Againm")
    location.reload();
    result.textContent = " "
    randNum.textContent = " "
}



}





