const verb = ['drink', 'walk', 'fart', 'lie', 'cough', 'yank'];
const adj = ['big', 'blue', 'farty', 'ridiculous', 'goofy'];
const noun = ['dog', 'log', 'bog', 'frog', 'hog', 'pteradactyl', 'grog', 'dinosaur', 'rocket'];
let phrases = [];



function get(arr){
    let i = (Math.floor(Math.random() * arr.length));
    return arr[i];
}


function message(name) {
    let phrase = `did ${name} really ${get(verb)} on the ${get(adj)} ${get(noun)}?!`;
    if (phrases.includes(phrase)){
        console.log('phrase already spoken');
    } else {
        phrases.push(phrase);
    }
}


function run(j, name){
    for(i = 0; i <= j; i++){
        message(name);
    }
}



run(100, 'Zoel');
console.log(phrases);