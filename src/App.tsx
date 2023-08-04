import { Link, Outlet } from 'react-router-dom'
import styles from './App.module.scss'
function App() {
  return (
    <>
      <nav className={styles['nav-bar']}>
        <ul className={styles['unordered-list']}>
          <li>
            <Link
              to={`home`}
              
              className={styles.link}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to={`game`}
              
              className={styles.link}
            >
              Play
            </Link>
          </li>
          <li className={styles.score}>
            <Link
              to={`game/score`}
              
              className={styles.link}
            >
              Game Score
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
}

export default App
