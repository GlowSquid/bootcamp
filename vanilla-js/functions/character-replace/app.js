
const kebab = "ho-ho-ho! Merry-Xmas-Everyone"

function kebabToSnake(str){
  const toSnake = str.split("-").join("_")
  // const toSnake = str.replace(/-/g, "_")
  return toSnake
}

console.log(kebabToSnake(kebab))


const snake = "I've_got_a_big_box_yes_I_do, I've_got_a_big_box, how_'bout_you!"

function snakeToKebab(str){
  const toKebab = str.split("_").join("-")
  // const toKebab = str.replace(/_/g, "-")
  return toKebab
}

console.log(snakeToKebab(snake))
