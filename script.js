const divs = document.getElementsByClassName("divs");
const buttonCLass = document.getElementsByClassName("buttonClass");
const albumtitle = document.getElementById("album");
const musicsname = document.getElementById("musics");
const button1VAR = document.getElementById("button1");
const button2VAR = document.getElementById("button2");
let i=1;

const container = document.getElementById("divMusics");

const albuns = new Array(10);

albuns[1] = "dont smile at me";
albuns[2] = "When We All Fall Asleep Where Do We Go?";
albuns[3] = "Happier than Ever";
albuns[4] = "Hit me Hard and Soft";


function musics(){
    if(i==1){
        clearContainer();
    
        albumtitle.textContent = albuns[i];
        span();
    }
    if(i==2){
        clearContainer();
        
        albumtitle.textContent = albuns[i];
        span();
    }
    if(i==3){
        clearContainer();
        
        albumtitle.textContent = albuns[i];
        span();
    }
    if(i==4){
        clearContainer();
       
        albumtitle.textContent = albuns[i];
        span();
    }
}

function span(){
    if(i==4){
    const newSpan = document.createElement("span");
    newSpan.textContent = "SKINNY";
    const newSpan1 = document.createElement("span");
    newSpan1.textContent = "LUNCH";
    const newSpan2 = document.createElement("span");
    newSpan2.textContent = "CHIHIRO";
    const newSpan3 = document.createElement("span");
    newSpan3.textContent = "BIRDS OF A FEATHER";
    const newSpan4 = document.createElement("span");
    newSpan4.textContent = "WILDFLOWER";
    const newSpan5 = document.createElement("span");
    newSpan5.textContent = "THE GREATEST";
    const newSpan6 = document.createElement("span");
    newSpan6.textContent = "L'AMOUR DE MA VIE";
    const newSpan7 = document.createElement("span");
    newSpan7.textContent = "THE DINER";
    const newSpan8 = document.createElement("span");
    newSpan8.textContent = "BITTERSUITE";
    const newSpan9 = document.createElement("span");
    newSpan8.textContent = "BLUE";

    container.appendChild(newSpan);
    container.appendChild(newSpan1);
    container.appendChild(newSpan2);
    container.appendChild(newSpan3);
    container.appendChild(newSpan4);
    container.appendChild(newSpan5);
    container.appendChild(newSpan6);
    container.appendChild(newSpan7);
    container.appendChild(newSpan8);
    container.appendChild(newSpan9);


    newSpan.className = "spanClass";
    newSpan1.className = "spanClass";
    newSpan2.className = "spanClass";
    newSpan3.className = "spanClass";
    newSpan4.className = "spanClass";
    newSpan5.className = "spanClass";
    newSpan6.className = "spanClass";
    newSpan7.className = "spanClass";
    newSpan8.className = "spanClass";
    newSpan9.className = "spanClass";
   }
   if(i==2){
    const newSpan = document.createElement("span");
    newSpan.textContent = "!!!!!!!!";
    const newSpan1 = document.createElement("span");
    newSpan1.textContent = "bad guy";
    const newSpan2 = document.createElement("span");
    newSpan2.textContent = "xanny";
    const newSpan3 = document.createElement("span");
    newSpan3.textContent = "you should see me in a crown";
    const newSpan4 = document.createElement("span");
    newSpan4.textContent = "all the good girls go to hell";
    const newSpan5 = document.createElement("span");
    newSpan5.textContent = "wish you were gay";
    const newSpan6 = document.createElement("span");
    newSpan6.textContent = "when the party's over";
    const newSpan7 = document.createElement("span");
    newSpan7.textContent = "8";
    const newSpan8 = document.createElement("span");
    newSpan8.textContent = "my strange addiction";
    const newSpan9 = document.createElement("span");
    newSpan9.textContent = "bury a friend";
    const newSpan10 = document.createElement("span");
    newSpan10.textContent = "ilomilo";
    const newSpan11 = document.createElement("span");
    newSpan11.textContent = "listen before i go";
    const newSpan12 = document.createElement("span");
    newSpan12.textContent = "i love you";
    const newSpan13 = document.createElement("span");
    newSpan13.textContent = "goodbye";

    container.appendChild(newSpan);
    container.appendChild(newSpan1);
    container.appendChild(newSpan2);
    container.appendChild(newSpan3);
    container.appendChild(newSpan4);
    container.appendChild(newSpan5);
    container.appendChild(newSpan6);
    container.appendChild(newSpan7);
    container.appendChild(newSpan8);
    container.appendChild(newSpan9);
    container.appendChild(newSpan10);
    container.appendChild(newSpan11);
    container.appendChild(newSpan12);
    container.appendChild(newSpan13);


    newSpan.className = "spanClass";
    newSpan1.className = "spanClass";
    newSpan2.className = "spanClass";
    newSpan3.className = "spanClass";
    newSpan4.className = "spanClass";
    newSpan5.className = "spanClass";
    newSpan6.className = "spanClass";
    newSpan7.className = "spanClass";
    newSpan8.className = "spanClass";
    newSpan9.className = "spanClass";
    newSpan10.className = "spanClass";
    newSpan11.className = "spanClass";
    newSpan12.className = "spanClass";
    newSpan13.className = "spanClass";
    }
    if(i==3){
        const newSpan = document.createElement("span");
    newSpan.textContent = "Getting Older";
    const newSpan1 = document.createElement("span");
    newSpan1.textContent = "I Didn't Change my number";
    const newSpan2 = document.createElement("span");
    newSpan2.textContent = "Billie Bossa nova";
    const newSpan3 = document.createElement("span");
    newSpan3.textContent = "my future";
    const newSpan4 = document.createElement("span");
    newSpan4.textContent = "Oxytocin";
    const newSpan5 = document.createElement("span");
    newSpan5.textContent = "GOLDWING";
    const newSpan6 = document.createElement("span");
    newSpan6.textContent = "Lost Cause";
    const newSpan7 = document.createElement("span");
    newSpan7.textContent = "Halley's Commet";
    const newSpan8 = document.createElement("span");
    newSpan8.textContent = "Not My Responsability";
    const newSpan9 = document.createElement("span");
    newSpan9.textContent = "OverHeated";
    const newSpan10 = document.createElement("span");
    newSpan10.textContent = "Everybody Dies";
    const newSpan11 = document.createElement("span");
    newSpan11.textContent = "Your Power";
    const newSpan12 = document.createElement("span");
    newSpan12.textContent = "NDA";
    const newSpan13 = document.createElement("span");
    newSpan13.textContent = "Therefore I Am";
    const newSpan14 = document.createElement("span");
    newSpan12.textContent = "Happier Than Ever";
    const newSpan15 = document.createElement("span");
    newSpan13.textContent = "Male Fantasy";

    container.appendChild(newSpan);
    container.appendChild(newSpan1);
    container.appendChild(newSpan2);
    container.appendChild(newSpan3);
    container.appendChild(newSpan4);
    container.appendChild(newSpan5);
    container.appendChild(newSpan6);
    container.appendChild(newSpan7);
    container.appendChild(newSpan8);
    container.appendChild(newSpan9);
    container.appendChild(newSpan10);
    container.appendChild(newSpan11);
    container.appendChild(newSpan12);
    container.appendChild(newSpan13);
    container.appendChild(newSpan14);
    container.appendChild(newSpan15);


    newSpan.className = "spanClass";
    newSpan1.className = "spanClass";
    newSpan2.className = "spanClass";
    newSpan3.className = "spanClass";
    newSpan4.className = "spanClass";
    newSpan5.className = "spanClass";
    newSpan6.className = "spanClass";
    newSpan7.className = "spanClass";
    newSpan8.className = "spanClass";
    newSpan9.className = "spanClass";
    newSpan10.className = "spanClass";
    newSpan11.className = "spanClass";
    newSpan12.className = "spanClass";
    newSpan13.className = "spanClass";
    newSpan14.className = "spanClass";
    newSpan15.className = "spanClass";
    }
   if(i==1){
    const newSpan = document.createElement("span");
    newSpan.textContent = "COPYCAT";
    const newSpan1 = document.createElement("span");
    newSpan1.textContent = "idontwannabeyouanymore";
    const newSpan2 = document.createElement("span");
    newSpan2.textContent = "my boy";
    const newSpan3 = document.createElement("span");
    newSpan3.textContent = "watch";
    const newSpan4 = document.createElement("span");
    newSpan4.textContent = "party favor";
    const newSpan5 = document.createElement("span");
    newSpan5.textContent = "bellyache";
    const newSpan6 = document.createElement("span");
    newSpan6.textContent = "ocean eyes";
    const newSpan7 = document.createElement("span");
    newSpan7.textContent = "hostage";
    const newSpan8 = document.createElement("span");
    newSpan8.textContent = "&burn";

    container.appendChild(newSpan);
    container.appendChild(newSpan1);
    container.appendChild(newSpan2);
    container.appendChild(newSpan3);
    container.appendChild(newSpan4);
    container.appendChild(newSpan5);
    container.appendChild(newSpan6);
    container.appendChild(newSpan7);
    container.appendChild(newSpan8);


    newSpan.className = "spanClass";
    newSpan1.className = "spanClass";
    newSpan2.className = "spanClass";
    newSpan3.className = "spanClass";
    newSpan4.className = "spanClass";
    newSpan5.className = "spanClass";
    newSpan6.className = "spanClass";
    newSpan7.className = "spanClass";
    newSpan8.className = "spanClass";
   }


}


function changeButton1(){
    i=i-1;
    if(i==0){
        i=4;
    }
    musics();
    
}

function clearContainer() {
    container.innerHTML = "";
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