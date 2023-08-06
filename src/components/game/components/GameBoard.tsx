import styles from './GameBoard.module.scss'
type Props = {
  pickedNumbers: number[]
}
function GameBoard({ pickedNumbers }: Props) {
  const numRows = 4
  const numCols = 10
  const emptyDivs = []

  for (let col = 0; col < numCols; col++) {
    const colDivs = []

    for (let row = 0; row < numRows; row++) {
      colDivs.push(
        <div className={styles['number-field']} key={`${row}-${col}`}>
          {pickedNumbers[col * 4 + row]}
        </div>
      )
    }

    emptyDivs.push(
      <div className={styles.column} key={col}>
        {colDivs}
      </div>
    )
  }

  return (
    <>
      <div className={styles.container}>{emptyDivs}</div>
    </>
  )
}
export default GameBoard
