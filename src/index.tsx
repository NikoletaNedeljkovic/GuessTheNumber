import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Game from './components/game/Game'
import FirstPage from './components/mainPage/FirstPage'
import App from './App'
import { GameScoreProvider } from './context/gameScoreContext'
import { GameScore } from './components/game/components'
import './styles/global.scss'
import { BestTimeProvider } from './context/bestTimeContext'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <FirstPage /> },
      { path: '/home', element: <FirstPage /> },
      {
        path: '/game',
        element: <Game />,
      },
      {
        path: '/game/score',
        element: <GameScore />,
      },
    ],
  },
])
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <BestTimeProvider>
      <GameScoreProvider>
        <RouterProvider router={router} />
      </GameScoreProvider>
    </BestTimeProvider>
  </React.StrictMode>
)
