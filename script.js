const divs = document.getElementsByClassName("divs");
const buttonCLass = document.getElementsByClassName("buttonClass");
const albumtitle = document.getElementById("album");
const musicsname = document.getElementById("musics");
const button1VAR = document.getElementById("button1");
const button2VAR = document.getElementById("button2");
let i=1;

const albuns = [
    "dont smile at me",
    "When we all Fall asleep Where do we go?",
    "Happier than Ever",
    "HIT ME HARD AND SOFT"
];

const album1 = [
    "COPYCAT", "idontwannabeyouanymore", "my boy", "watch", "party favor",
    "bellyache", "ocean eyes", "hostage", "&burn"
]

const album2 = [
    "!!!!!!!!", "bad guy", "xanny", "you should see me in a crown", "all the good girls go to hell", 
     "8", "wish you were gay", "when the party's over", "my strange addiction", "bury a friend", "ilomilo",
    "listen before i go", "i love you", "goodbye"
]

const album3 = [
    "Getting Older", "I Didn't Change My Number",
    "Billie Bossa Nova", "my future", "Oxytocin", "Halley's Comet", "Not My Responsibility", "OverHeated", "Everybody Dies",
    "Your Power", "NDA", "Therefore I Am", "Happier Than Ever", "Male Fantasy"
]
const album4 = [
    "SNINNY", "LUNCH", "CHIHIRO", "BIRDS OF A FEATHER", "WILDFLOWER",
    "THE GREATEST", "L'AMOUR DE MA VIE", "THE DINER", "BITTERSUITE", "BLUE"
]

albuns[1] = "dont smile at me";
albuns[2] = "When we all Fall asleep Where do we go?";
albuns[3] = "Happier than Ever";
albuns[4] = "Hit me Hard and Soft";



function musics(){
    if(i==1){
        musicsname.textContent = album1;
        albumtitle.textContent = albuns[i];
    }
    if(i==2){
        musicsname.textContent = album2;
        albumtitle.textContent = albuns[i];
    }
    if(i==3){
        musicsname.textContent = album3;
        albumtitle.textContent = albuns[i];
    }
    if(i==4){
        musicsname.textContent = album4;
        albumtitle.textContent = albuns[i];
    }
}




function changeButton1(){
    i=i-1;
    if(i==0){
        i=4;
    }
    musics();
    
}






function changeButton2(){
    i=i+1;
    if(i==5){
        i=1;
    }
    musics();
}

document.addEventListener("DOMContentLoaded", function(){
    musics();
})

button2VAR.addEventListener("click", changeButton2);
button1VAR.addEventListener("click", changeButton1);