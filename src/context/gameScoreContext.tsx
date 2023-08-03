import { ReactNode, createContext, useContext, useState } from 'react'
type GameScoreType = {
  lose: number
  win: number
  increaseScore: (game: 'lose' | 'win') => void
}

const GameScoreContext = createContext<GameScoreType | null>(null)
type Props = {
  children: ReactNode
}

export function GameScoreProvider({ children }: Props) {
  const [lose, setLose] = useState(0)
  const [win, setWin] = useState(0)
  const increaseScore = (game: 'lose' | 'win') => {
    if (game === 'win') setWin(prevScore => prevScore + 1)
    else setLose(prevScore => prevScore + 1)
  }
  return (
    <GameScoreContext.Provider value={{ lose, win, increaseScore }}>
      {children}
    </GameScoreContext.Provider>
  )
}

export function useGameScore() {
  const context = useContext(GameScoreContext)

  if (!context) throw new Error('GameContext not provided')

  return context
}
