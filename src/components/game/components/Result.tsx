import styles from './Result.module.scss'
type Props = {
  result: number[]
}
function Result({ result }: Props) {
  const numRows = 4
  const emptyDivs = []
  for (let div = 0; div < numRows; div++) {
    emptyDivs.push(
      <div className={styles['result-divs']} key={div}>
        {result[div]}
      </div>
    )
  }
  return (
    <>
      <div>{emptyDivs}</div>
    </>
  )
}
export default Result
