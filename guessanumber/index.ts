addEventListener("load",function(){
    const startDiv= <HTMLDivElement>document.getElementById("start-game");
    const gameDiv= <HTMLDivElement>document.getElementById("game");
    const resultDiv= <HTMLSpanElement>document.getElementById("result");
    const startbtn= document.getElementById("start")!as HTMLButtonElement
    const checkbtn= document.getElementById("check")! as HTMLButtonElement
    const guesstext= document.getElementById("guess")! as HTMLInputElement
    let randNum :number; 
    
    gameDiv.style.display = "none";
    startbtn.addEventListener("click", function()
    {
        randNum = getRandomNumber(1,100); 
        gameDiv.style.display ="block";
       startDiv.style.display="none";
        resultDiv.innerHTML="";
        guesstext.disabled= false;
    });
checkbtn.onclick= function()
{
    //const guess :number= parseInt(guesstext.value);
    const guess :number = +guesstext.value; 
    if(guess>randNum){
        resultDiv.innerHTML += "Guess is higher<br/>";

    }else if(guess<randNum){
        resultDiv.innerHTML +="Guess is less<br/>";
    }else
    {
        resultDiv.innerHTML += "Guess is Correct</br>";
        guesstext.disabled = true;
       // checkbtn.disabled= true;
        startDiv.style.display="block"
    }
   guesstext.value='';

}
function getRandomNumber(min: number,max: number): number
{
    return Math.floor(Math.random()*(max-min)+ min);

}

})
