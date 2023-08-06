import styles from './NumberButtons.module.scss'
type Props = {
  clickedNumber: (num: number) => void
  style: string
}
function NumberButtons({ clickedNumber, style }: Props) {
  const numberButtons = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  return (
    <>
      {numberButtons.map((val, i) => (
        <button
          style={{ display: style }}
          className={styles['number-buttons']}
          key={i}
          onClick={() => {
            clickedNumber(val)
          }}
        >
          {val}
        </button>
      ))}
    </>
  )
}
export default NumberButtons
