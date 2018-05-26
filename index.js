const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield'];
function destructivelyAppendKitten(){
  return kittens.push('Ralph')
}
function destructivelyPrependKitten(){
  return kittens.unshift('Bob')
}

function destructivelyRemoveFirstKitten(){
  return kittens.shift()
}

function destructivelyRemoveLastKitten(){
  return kittens.pop()
}

function appendKitten(name){
  return [...kittens, name]

}

function prependKitten(name){
  return [name, ...kittens]
}

function removeLastKitten(){
  return kittens.slice(0, kittens.length-1)
}
