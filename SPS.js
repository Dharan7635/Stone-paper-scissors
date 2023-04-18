let choice = confirm("Shall we play a game?");
if(choice)
{
    //GETTING INPUT FROM USER
    let userchoice = prompt("Enter your choice STONE/PAPER/SISSOR");
if(userchoice === "STONE" || 
   userchoice === "PAPER" || 
   userchoice === "SISSOR"){
    console.log("userChoice=",userchoice);
    let computer =["STONE","PAPER","SISSOR"];
    //GENERATING INDEX NUMBER TO PICK ARRAY FOR COMPUTER CHOICE
    let indexno = Math.floor((Math.random())*3);
    console.log(indexno);
    let computerChoice = (computer[indexno]);
console.log("computerChoice=",computer[indexno]);
//PLAY
    let winner = userchoice === computerChoice ? "GAME TIE" 
    : userchoice === "PAPER" && computerChoice === "STONE" ? "YOU WIN"
    : userchoice === "STONE" && computerChoice === "SISSOR" ? "YOU WIN"
    : userchoice === "SISSOR" && computerChoice === "PAPER" ? "YOU WIN" : "COMPUTER WIN --BETTER LUCK NEXT TIME :)";
    alert("YourChoice IS "+userchoice+" & THE Computerchoice IS "+computerChoice);
    alert(winner);
} 
else
{
    alert("Please enter correct choice/use uppercase only");
}
}
else{
    alert("Thank you");
}
