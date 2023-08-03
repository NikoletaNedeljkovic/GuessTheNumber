function generateResultCombo() {
  const numbers = new Set<number>()

  while (numbers.size < 4) {
    const randomNumber = Math.floor(Math.random() * 9) + 1
    numbers.add(randomNumber)
  }

  return Array.from(numbers)
}
export default generateResultCombo
