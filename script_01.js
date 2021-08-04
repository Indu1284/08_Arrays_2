
/*** Mini-Challenge  */
// Satzbau + Punktuation

// Vereinbarung:
// "S" (sentence) --> "."  Ich bin Max.
// "Q" (question) --> "?"  Bist du Max?
// "E" (exclamation) --> "!"  Ich bin!

// Parameter --> funktion satzbau([ ...], "Q"){ ...}

ausgabe(satzbau(["Ich","bin","Max"],"S"));
ausgabe(satzbau(["Bist","du","Max"],"Q"));
ausgabe(satzbau(["Ich","bin"],"E"));
ausgabe(satzbau(["Ich"],"F"));
function satzbau(param1,param2) {
    const gap = " ";
    const punct = ".";
    const frage = "?";
    const exclamation = "!";
    const semicolon = ":";
    let str ="";
    for(let i=0 ; i <param1.length ; i++){
        
        if(i != param1.length - 1){
            str += param1[i] + gap;
        }else {
            switch (param2) {
                case "S" : str += param1[i] + punct;
                break;
                case "Q" : str += param1[i] + frage;
                break;
                case "E" : str += param1[i] + exclamation;
                break;
                default : str += param1[i] + semicolon;
            }
        }
}
    return str;
}

function ausgabe(outputstr) {
    console.log(outputstr);
}