import React, { useEffect } from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { useTicTacToe } from '../hooks'
import Slot from './Slot'

const { width } = Dimensions.get('window')

const TicTacToeComponent = () => {
	const [{ isGameOver }] = useTicTacToe()
	return (
		<View style={styles.container}>
			<Text>
				Player X:
			</Text>
			<Text>
				Player O:
			</Text>
			<Text>
				Draw:
			</Text>
			<View style={styles.ticTacToe}>
				<View style={styles.columnContainer}>
					<Slot i={1} j={1} />
					<Slot i={2} j={1} />
					<Slot i={3} j={1} />
				</View>
				<View style={styles.columnContainer}>
					<Slot i={1} j={2} />
					<Slot i={2} j={2} />
					<Slot i={3} j={2} />
				</View>
				<View style={styles.columnContainer}>
					<Slot i={1} j={3} />
					<Slot i={2} j={3} />
					<Slot i={3} j={3} />
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
		borderWidth: 0.5,
		borderColor: 'white',
		height: 0.9 * width,
		width: 0.9 * width,
		flexDirection: 'row',
	}
})

export default TicTacToeComponent