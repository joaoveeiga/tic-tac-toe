import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import Slot  from './Slot'

const { height, width } = Dimensions.get('window')
export type Player = 'X' | 'O'

type TicTacToeProps = {
	player: Player
	setPlayer: React.Dispatch<React.SetStateAction<Player>>
}
const TicTacToeComponent = ({player, setPlayer}: TicTacToeProps) => {
	return (
		<View style={styles.container}>
			<Text>
				Player X:
			</Text>
			<Text>
				Player O:
			</Text>
			<View style={styles.ticTacToe}>
				<View style={styles.columnContainer}>
					<Slot player={player} setPlayer={setPlayer} />
					<Slot player={player} setPlayer={setPlayer} />
					<Slot player={player} setPlayer={setPlayer} />
				</View>
				<View style={styles.columnContainer}>
					<Slot player={player} setPlayer={setPlayer} />
					<Slot player={player} setPlayer={setPlayer} />
					<Slot player={player} setPlayer={setPlayer} />
				</View>
				<View style={styles.columnContainer}>
					<Slot player={player} setPlayer={setPlayer} />
					<Slot player={player} setPlayer={setPlayer} />
					<Slot player={player} setPlayer={setPlayer} />
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	columnContainer: {
		flex: 1,
	},
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	ticTacToe: {
		// borderWidth: 1,
		// borderColor: 'white',
		height: 0.9 * width,
		width: 0.9 * width,
		flexDirection: 'row',
	}
})

export default TicTacToeComponent