import {TicTacToeProvider} from '../providers'
import {useContext} from 'react'

export default function useTicTacToe() {
  const context = useContext(TicTacToeProvider.Context)

  if (!context) {
    throw new Error('This hook must be wrapped by TicTacToeProvider')
  }

  return context
}
