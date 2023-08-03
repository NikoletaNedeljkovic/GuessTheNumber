import { Link, Outlet } from 'react-router-dom'
import styles from './App.module.scss'
function App() {
  return (
    <>
      <nav className={styles['nav-bar']}>
        <ul>
          <li>
            <Link to={`home`} style={{ textDecoration: 'none' }}>
              Home
            </Link>
          </li>
          <li>
            <Link to={`game`} style={{ textDecoration: 'none' }}>
              Play
            </Link>
          </li>
          <li className={styles.score}>
            <Link to={`game/score`} style={{ textDecoration: 'none' }}>
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
