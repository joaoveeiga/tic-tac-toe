import React, { useState, ReactNode, createContext, Dispatch, SetStateAction } from 'react'

type TicTacToeProviderProps = {
	children: ReactNode
}
export type Turn = 'X' | 'O'

export type Move = {
	i: number
	j: number
}

export type Player = {
	type: Turn
	moves: Move[]
}

type TicTacToeState = {
	turn: Turn
	isGameOver: boolean
	playerX: Player
	playerO: Player
}

type TicTacToeAction = {
	setPlayersTurn: (player: Turn) => void
	setIsGameOver: Dispatch<SetStateAction<boolean>>
	setPlayerX: Dispatch<SetStateAction<Player>>
	setPlayerO: Dispatch<SetStateAction<Player>>
}

type TicTacToeProviderData = [state: TicTacToeState, action: TicTacToeAction]

const INITIAL_STATE_PLAYERX: Player = {
	type: 'X',
	moves: [],
}

const INITIAL_STATE_PLAYERO: Player = {
	type: 'O',
	moves: [],
}

const TicTacToeContext = createContext<TicTacToeProviderData>(null)

const TicTacToeProvider = ({ children }: TicTacToeProviderProps) => {
	const [turn, setTurn] = useState<Turn>('X')
	const [isGameOver, setIsGameOver] = useState(false)
	const [playerX, setPlayerX] = useState<Player>(INITIAL_STATE_PLAYERX)
	const [playerO, setPlayerO] = useState<Player>(INITIAL_STATE_PLAYERO)

	const setPlayersTurn = (turn: Turn) => {
		verifyIfSomePlayerWins(turn === 'X'? playerX : playerO)
		if (turn === 'O')
			return setTurn('X')
		return setTurn('O')
	}

	const verifyIfSomePlayerWins = (player: Player) => {
		const playerWinWithMainDiagonal = player.moves.indexOf(({ i: 1, j: 1 })) > 0 &&
			player.moves.indexOf({ i: 2, j: 2 }) > 0 &&
			player.moves.indexOf({ i: 3, j: 3 }) > 0

		if (playerWinWithMainDiagonal)
			return setIsGameOver(true)

		const playerWithSecondaryDiagonal = player.moves.indexOf({ i: 3, j: 1 }) > 0 &&
			player.moves.indexOf({ i: 2, j: 2 }) > 0 &&
			player.moves.indexOf({ i: 1, j: 3 }) > 0

		if (playerWithSecondaryDiagonal)
			return setIsGameOver(true)

		const lines = {
			1: 0,
			2: 0,
			3: 0,
		}

		const columns = {
			1: 0,
			2: 0,
			3: 0,
		}

		player.moves.forEach(({ i, j }) => {
			lines[i]++
			columns[j]++
		})

		if (
			lines[1] > 2 ||
			lines[2] > 2 ||
			lines[3] > 2 ||
			columns[1] > 2 ||
			columns[2] > 2 ||
			columns[3] > 2
		)
			setIsGameOver(true)
			 
	}

	return (
		<TicTacToeContext.Provider
			children={children}
			value={[
				{
					turn,
					isGameOver,
					playerX,
					playerO,
				},
				{
					setPlayersTurn,
					setIsGameOver,
					setPlayerX,
					setPlayerO
				}
			]}
		/>
	)
}

TicTacToeProvider.Context = TicTacToeContext

export default TicTacToeProvider