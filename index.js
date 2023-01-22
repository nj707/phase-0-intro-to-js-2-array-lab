const cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat() {
    return cats.push("Ralph")
}
function destructivelyPrependCat(){
    return cats.unshift("Bob")
}
function destructivelyRemoveLastCat() {
    return cats.pop("Ralph")
}
function destructivelyRemoveFirstCat(){
    return cats.shift ("Bob")
}
const copyOfCats = [...cats, "Broom"]
function appendCat(){
    return copyOfCats
}
const copyCat = ["Arnold", ...cats]
function prependCat() {
    return copyCat
}
const byeKitty = cats.slice(0, 2)
function removeLastCat() {
    return byeKitty
}
const lastKitty = cats.slice(1)
function removeFirstCat() {
    return lastKitty
}