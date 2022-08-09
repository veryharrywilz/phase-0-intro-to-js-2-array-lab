// Write your solution here!
const cats = ['Milo', 'Otis', 'Garfield'];

console.log(cats);

function destructivelyAppendCat(name) {
    console.log(cats.push(name));
}
console.log(destructivelyAppendCat);

function destructivelyPrependCat(name) {
    console.log(cats.unshift(name));
}
function destructivelyRemoveLastCat() {
    console.log(cats.pop());
}
function destructivelyRemoveFirstCat() {
    console.log(cats.shift());
}

function appendCat(name) {
    const copyOfCats = cats.slice()
    copyOfCats.push(name);
    return copyOfCats;
}

function prependCat(name) {
    const copyOfCats = cats.slice()
    copyOfCats.unshift(name);
    return copyOfCats;
}

function removeLastCat() {
    const copyOfCats = cats.slice()
    copyOfCats.splice(-1);
    return copyOfCats;
}
function removeFirstCat() {
    const copyOfCats = cats.slice()
    copyOfCats.splice(0, 1);
    return copyOfCats;
}