import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import useTicTacToe from '../hooks/useTicTacToe'


const Slot = () => {
	const [{player},{setPlayer}] = useTicTacToe()
	const [wasPress, setWasPress] = useState('')
	const onPress = () => {
		setWasPress(player)
		if (player === 'X')
			return setPlayer('O')
		return setPlayer('X')
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