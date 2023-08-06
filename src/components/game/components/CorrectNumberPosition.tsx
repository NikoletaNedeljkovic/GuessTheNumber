import styles from './CorrectNumberPosition.module.scss'
type Props = {
  correct: number[]
}
function CorrectNumberPosition({ correct }: Props) {
  const numRows = 2 // Number of rows
  const numCols = 10 // Number of columns

  const emptyDivs = []

  for (let col = 0; col < numCols; col++) {
    const colDivs = []

    for (let row = 0; row < numRows; row++) {
      colDivs.push(
        <div className={styles['number-field']} key={`${row}-${col}`}>
          {correct[col * 2 + row]}
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
export default CorrectNumberPosition
