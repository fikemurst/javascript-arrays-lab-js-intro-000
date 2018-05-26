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

function appendKitten(){
  return kittens = [...kittens, "Broom"]

}
