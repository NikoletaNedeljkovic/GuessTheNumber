function compareCombinations(guess: number[], result: number[]) {
  let correctPosition = 0
  let correctNumbers = 0

  for (let i = 0; i < result.length; i++) {
    if (guess[i] === result[i]) correctPosition++
    if (guess.includes(result[i])) correctNumbers++
  }

  return { correctNumbers, correctPosition }
}
export default compareCombinations
