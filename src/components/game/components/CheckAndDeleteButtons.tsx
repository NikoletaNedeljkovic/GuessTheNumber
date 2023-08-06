import styles from './CheckAndDeleteButtons.module.scss'
type Props = {
  deleteNum: () => void
  checkGuess: () => void
  style: string
}
function CheckAndDeleteButtons({ deleteNum, checkGuess, style }: Props) {
  return (
    <>
      <button
        style={{ display: style }}
        className={styles['check-delete-btns']}
        onClick={() => {
          deleteNum()
        }}
      >
        DEL
      </button>
      <button
        style={{ display: style }}
        className={styles['check-delete-btns']}
        onClick={() => {
          checkGuess()
        }}
      >
        ?
      </button>
    </>
  )
}

export default CheckAndDeleteButtons
