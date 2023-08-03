import styles from './game/Game.module.scss'
type Props = {
  time: string
}
function PreviewTime({ time }: Props) {
  return (
    <>
      <p className={styles.timer}>{time}</p>
    </>
  )
}
export default PreviewTime
