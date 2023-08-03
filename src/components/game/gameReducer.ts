import generateResultCombo from '../../util/generateResultCombination'

export function gameReducer(prevState: GameState, action: GameAction) {
  const state: GameState = JSON.parse(JSON.stringify(prevState))
  state.currMove = new Set(Array.from(prevState.currMove))

  switch (action.type) {
    case 'increment_time':
      state.time = prevState.time + 1
      break
    case 'number_clicked':
      if (state.currMove.has(action.payload) || state.currMove.size === 4) break
      state.pickedNumbers.push(action.payload)
      state.currMove.add(action.payload)
      state.isRunning = true
      break
    case 'delete_number':
      const lastEl = Array.from(state.currMove).pop()
      if (lastEl === undefined) break
      state.currMove.delete(lastEl)
      state.pickedNumbers.pop()
      // setPickedNumbers(arr => arr.slice(0, -1))
      break
    case 'check_guess':
      if (state.currMove.size < 4) break
      if (
        state.pickedNumbers.length === 40 ||
        (action.payload.correctNumbers === 4 &&
          action.payload.correctPosition === 4)
      ) {
        state.showResult = true
        state.showStyle = 'none'
        state.isRunning = false
      }
      state.correctMoves.push(action.payload.correctNumbers)
      state.correctMoves.push(action.payload.correctPosition)
      state.hasWon = action.payload.correctPosition === 4
      state.currMove.clear()
      break
    case 'reset':
      state.result = generateResultCombo()
      state.pickedNumbers = []
      state.correctMoves = []
      state.currMove.clear()
      state.showResult = false
      state.showStyle = ''
      state.hasWon = false
      state.time = 0
      state.isRunning = false
      break
    case 'give_up':
      state.showResult = true
      state.showStyle = 'none'
      state.isRunning = false
      break
  }
  return state
}

type GameState = {
  pickedNumbers: number[]
  currMove: Set<number>
  showResult: boolean
  result: number[]
  showStyle: string
  correctMoves: number[]
  hasWon: boolean
  time: number
  isRunning: boolean
}

type GameAction =
  | {
      type: 'increment_time'
    }
  | {
      type: 'number_clicked'
      payload: number
    }
  | {
      type: 'delete_number'
    }
  | {
      type: 'check_guess'
      payload: { correctNumbers: number; correctPosition: number }
    }
  | { type: 'reset' }
  | { type: 'give_up' }

export const getDefaultGameState = () => {
  const defState: GameState = {
    pickedNumbers: [],
    currMove: new Set<number>(),
    showResult: false,
    result: generateResultCombo(),
    showStyle: '',
    correctMoves: [],
    hasWon: false,
    time: 0,
    isRunning: false,
  }

  return defState
}
