// Array.prototype.shuffle = function shuffle() {
//   const shuffled = [...this]

//   let temp
//   let j
//   let i = shuffled.length

//   while (--i) {
//     j = ~~(Math.random() * (i + 1))
//     temp = shuffled[i]
//     shuffled[i] = shuffled[j]
//     shuffled[j] = temp
//   }

//   return shuffled
// }

module.exports = function shuffle(array) {
  if (!Array.isArray(array)) {
    throw new Error('Not an array')
  }

  const shuffled = [...array]

  let tmp
  let j
  let i = shuffled.length

  while (--i) {
    j = ~~(Math.random() * (i + 1))
    tmp = shuffled[i]
    shuffled[i] = shuffled[j]
    shuffled[j] = tmp
  }

  return shuffled
}
