import { useGameScore } from '../../context/gameScoreContext'
import { useBestTime } from '../../context/bestTimeContext'
import styles from './GameScore.module.scss'
function GameScore() {
  const { lose, win } = useGameScore()
  const { bestTime } = useBestTime()
  return (
    <>
      <div className={styles.wrapper}>
        <h2 className={styles.heading}>GAME SCORE</h2>
        <h3 className={styles.winner}>YOU WON : {win} TIMES</h3>
        <h3 className={styles.loser}>YOU LOST : {lose} TIMES</h3>
        <h3 className={styles['best-time']}>BEST TIME : {bestTime} secs </h3>
      </div>
    </>
  )
}
export default GameScore
