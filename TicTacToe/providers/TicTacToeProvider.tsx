import React, { useState, ReactNode, createContext } from 'react'

type TicTacToeProviderProps = {
	children: ReactNode
}

type Player = 'X' | 'O'
type Move = {
	x: number, 
	y: number
}

type TicTacToeState = {
	turn: Player
	isGameOver: boolean
	playerXWins: number
	playerOWins: number
	playerXMoves: Move[]
	playerYMoves: Move[]
}

type TicTacToeActions = {
	setPlayersTurn: (player: Player) => void
	setIsGameOver: () => void
	setPlayerXWins: (wins: number) => void
	setPlayerOWins: (wins: number) => void
}

type TicTacToeProviderData = [
	state: TicTacToeState,
	actions: TicTacToeActions
]

const TicTacToeContext = createContext<TicTacToeProviderData>(null)

const TicTacToeProvider = ({children}: TicTacToeProviderProps) => {
	const [turn, setTurn] = useState<Player>('X')
	const [isGameOver, setIsGameOver] = useState(false)
	const [playerXMoves, setPlayerXMoves] = useState<Move[]>([])
	const [counter, setCounter] = useState()
	const checkMoves = (move: Move) => {
		 	
	}
	
	React.useEffect(()=>{
		
	},[])

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
					isGameOver
				},
				{
					setPlayersTurn,
					setIsGameOver
				}
			]}
			/>
	)
}

export default TicTacToeProvider