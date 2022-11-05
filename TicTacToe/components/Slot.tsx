import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useTicTacToe } from '../hooks'
import { Move } from '../providers'

type SlotProps = Move

const Slot = (props: SlotProps) => {
	const [{ turn }, { setPlayerX, setPlayerO, setPlayersTurn }] = useTicTacToe()
	const [wasPress, setWasPress] = useState('')
	const onPress = () => {
		if (turn === 'X')
			setPlayerX((prevState) => {
				return { ...prevState, moves: [...prevState.moves, props] }
			})
		if (turn === 'O')
			setPlayerO((prevState) => {
				return { ...prevState, moves: [...prevState.moves, props] }
			})
		setWasPress(turn)
		setPlayersTurn(turn)
	}

	return (
		<>
			{wasPress ?
				<View style={styles.pressedContainer}>
					<Text style={styles.icon}>{wasPress}</Text>
				</View>
				:
				<TouchableOpacity style={styles.container} onPress={onPress} />}
		</>
	)
}

const styles = StyleSheet.create({
	icon: {
		fontSize: 50,
		fontWeight: 'bold',
		color: 'white'
	},
	pressedContainer: {
		flex: 1,
		borderColor: 'white',
		borderWidth: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	container: {
		flex: 1,
		borderColor: 'white',
		borderWidth: 1,
	}
})

export default Slot