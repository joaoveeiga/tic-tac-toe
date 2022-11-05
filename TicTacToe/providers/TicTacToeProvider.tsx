import React, { useState, ReactNode, createContext, Dispatch, SetStateAction } from 'react'

type TicTacToeProviderProps = {
	children: ReactNode
}
export type Player = 'X' | 'O'
type Move = {
	x: number,
	y: number
}

type TicTacToeState = {
	turn: Player
	isGameOver: boolean
	player: Player
}

type TicTacToeAction = {
	setPlayersTurn: (player: Player) => void
	setIsGameOver: Dispatch<SetStateAction<boolean>>
	setPlayer: Dispatch<SetStateAction<Player>>
}

type TicTacToeProviderData = [state: TicTacToeState, action: TicTacToeAction]

const TicTacToeContext = createContext<TicTacToeProviderData>(null)

const TicTacToeProvider = ({ children }: TicTacToeProviderProps) => {
	const [turn, setTurn] = useState<Player>('X')
	const [isGameOver, setIsGameOver] = useState(false)
	const [player, setPlayer] = useState<Player>('X')

	const setPlayersTurn = (turn: Player) => {
		if (turn === 'O')
			return setTurn('X')
		return setTurn('O')
	}

	return (
		<TicTacToeContext.Provider
			children={children}
			value={[
				{
					turn,
					isGameOver,
					player
				},
				{
					setPlayersTurn,
					setIsGameOver,
					setPlayer,
				}
			]}
		/>
	)
}

TicTacToeProvider.Context = TicTacToeContext

export default TicTacToeProvider