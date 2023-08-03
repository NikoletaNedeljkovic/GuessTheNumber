import { Link } from 'react-router-dom'
import styles from './FirstPage.module.scss'
function FirstPage() {
  return (
    <>
      <header>
        <h1 className={styles.heading}>Guess my Number</h1>
      </header>
      <main>
        <div className={styles.wrapper}>
          <p className={styles['instructions']}>
            rule to my game are simple. work hard. show up on time. try not to
            fall asleep, everybody <br />
            any question before we start? <br />
            <span className={styles['quote-author']}>-Tommy Wiseau</span>
          </p>

          <Link to={'/game'}>
            <button className={styles['start-button']}> start </button>
          </Link>
        </div>
      </main>
    </>
  )
}
export default FirstPage
