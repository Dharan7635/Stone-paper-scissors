let choice = confirm("Shall we play a game?");
if(choice)
{
    //GETTING INPUT FROM USER
    let userchoice = prompt("Enter your choice STONE/PAPER/SCISSORS");
    console.log(userchoice);
if(userchoice === "STONE" || 
   userchoice === "PAPER" || 
   userchoice === "SCISSORS"){
    console.log("userChoice=",userchoice);
    let computer =["STONE","PAPER","SCISSORS"];
    //GENERATING INDEX NUMBER TO PICK ARRAY FOR COMPUTER CHOICE
    let indexno = Math.floor((Math.random())*3);
    console.log(indexno);
    let computerChoice = (computer[indexno]);
console.log("computerChoice=",computer[indexno]);
//PLAY
    let winner = userchoice === computerChoice ?  `Your Choice:${userchoice}\nComputer choice:${computerChoice} \nGAME TIE`
    : userchoice === "PAPER" && computerChoice === "STONE" ? 
    `Your Choice:${userchoice}\nComputer choice:${computerChoice} \nYOU WIN`
    : userchoice === "STONE" && computerChoice === "SCISSORS" ?  `Your Choice:${userchoice}\nComputer choice:${computerChoice} \nYOU WIN`
    : userchoice === "SCISSORS" && computerChoice === "PAPER" ?  `Your Choice:${userchoice}\nComputer choice:${computerChoice} \nYOU WIN` :  `Your Choice:${userchoice}\nComputer choice:${computerChoice} \nCOMPUTER WIN --BETTER LUCK NEXT TIME :)`;
    // alert("YourChoice IS "+userchoice+" & THE Computerchoice IS "+computerChoice);
    alert(winner);
    let playagain = confirm("PLAY AGAIN");
    if(playagain){
        location.reload()
    }
}
else if (userchoice === null)
{
      alert("May be you Changed your mind (:")
}
else
{
    alert("Please enter correct choice/use uppercase only");
    location.reload();
}
}
else{
    alert("OK!.May be next time");
}
