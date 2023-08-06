import styles from './Game.module.scss'

import { useEffect, useReducer } from 'react'

import { useGameScore } from '../../context/gameScoreContext'
import { useBestTime } from '../../context/bestTimeContext'
import {
  CheckAndDeleteButtons,
  CorrectNumberPosition,
  GameBoard,
  NumberButtons,
  Result,
} from './components'
import { gameReducer, getDefaultGameState } from './gameReducer'
import compareCombinations from '../../util/compareCombinations'
import PreviewTime from '../PreviewTime'
function Game() {
  const [state, dispatch] = useReducer(gameReducer, getDefaultGameState())
  useEffect(() => {
    let timer: number | NodeJS.Timer
    if (state.isRunning) {
      timer = setInterval(() => {
        dispatch({ type: 'increment_time' })
      }, 1000)
    }
    return () => {
      clearInterval(timer)
    }
  }, [state.isRunning])
  const { checkTime } = useBestTime()
  const { increaseScore } = useGameScore()

  const formatTime = (totalSeconds: number) => {
    const minutes = Math.floor(totalSeconds / 60)
    const seconds = totalSeconds % 60
    return `${minutes < 10 ? '0' : ''}${minutes}:${
      seconds < 10 ? '0' : ''
    }${seconds}`
  }
  const numberClickHandler = (num: number) => {
    dispatch({ type: 'number_clicked', payload: num })
  }

  const deleteNumberHandler = () => {
    dispatch({ type: 'delete_number' })
  }

  const checkGuessHandler = () => {
    const comparison = compareCombinations(
      Array.from(state.currMove),
      state.result
    )
    dispatch({
      type: 'check_guess',
      payload: comparison,
    })
    if (comparison.correctPosition === 4) {
      increaseScore('win')
      checkTime(state.time)
    } else if (state.pickedNumbers.length === 40) {
      increaseScore('lose')
    }
  }

  const resetButtonHandler = () => {
    if (!state.hasWon) increaseScore('lose')
    dispatch({ type: 'reset' })
  }
  const giveUpHandler = () => {
    dispatch({ type: 'give_up' })
  }
  return (
    <>
      <div className={styles.wrapper}>
        <PreviewTime time={formatTime(state.time)} />
        <div className={styles['game-wrapper']}>
          <div className={styles['titles']}>
            <h4 className={styles['game-board-h4']}>GUESS THE NUMBER</h4>
            <div className={styles['correct-title']}>
              <p title="Correct Number">
                correct <br /> numbers
              </p>
              <p>
                correct <br /> positions
              </p>
            </div>
          </div>
          <div className={styles['game-board-wrapper']}>
            <div>
              <GameBoard pickedNumbers={state.pickedNumbers} />
            </div>
            <div>
              <CorrectNumberPosition correct={state.correctMoves} />
            </div>
          </div>
        </div>
        <div className={styles['buttons-wrapper']}>
          <div className={styles['num-check-del-btns']}>
            <div className={styles['number-buttons']}>
              <NumberButtons
                clickedNumber={numberClickHandler}
                style={state.showStyle}
              />
            </div>
            <div className={styles['check-delete-btns']}>
              <CheckAndDeleteButtons
                deleteNum={deleteNumberHandler}
                checkGuess={checkGuessHandler}
                style={state.showStyle}
              />
            </div>
          </div>
          {state.showResult && <Result result={state.result} />}
        </div>
        <div className={styles['res-give-buttons-wrap']}>
          <button
            className={styles['res-give-buttons']}
            onClick={giveUpHandler}
          >
            GIVE UP
          </button>
          <button
            className={styles['res-give-buttons']}
            onClick={resetButtonHandler}
          >
            RESET
          </button>
        </div>
      </div>
    </>
  )
}
export default Game
