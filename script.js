const verb = ['drink', 'walk', 'fart', 'lie', 'cough', 'yank'];
const adj = ['big', 'blue', 'farty', 'ridiculous', 'goofy'];
const noun = ['dog', 'log', 'bog', 'frog', 'hog', 'pteradactyl', 'grog', 'dinosaur', 'rocket'];

function get(arr){
    let i = (Math.floor(Math.random() * arr.length));
    return arr[i];
}


function message(name) {
    console.log(`did ${name} really ${get(verb)} on the ${get(adj)} ${get(noun)}?!`)
}
message('Zoel');
