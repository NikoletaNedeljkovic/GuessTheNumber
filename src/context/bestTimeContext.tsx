import { ReactNode, createContext, useContext, useState } from 'react'
type BestTimeType = {
  bestTime: number
  checkTime: (time: number) => void
}

const BestTimeContext = createContext<BestTimeType | null>(null)
type Props = {
  children: ReactNode
}
export function BestTimeProvider({ children }: Props) {
  const [bestTime, setBestTime] = useState(0)
  const checkTime = (time: number) => {
    setBestTime(time)
    if (time < bestTime) setBestTime(time)
  }
  return (
    <BestTimeContext.Provider value={{ bestTime, checkTime }}>
      {children}
    </BestTimeContext.Provider>
  )
}
export function useBestTime() {
  const context = useContext(BestTimeContext)

  if (!context) throw new Error('BestTimeContext not provided')

  return context
}
