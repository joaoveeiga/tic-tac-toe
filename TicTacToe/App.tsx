import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { Player, TicTacToe } from './components'


const App = () => {
  const [player, setPlayer] = useState<Player>('X')

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Tic Tac Toe</Text>
      </View>
      <TicTacToe player={player} setPlayer={setPlayer} />
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    backgroundColor: 'gray',
    flex: 1,
  },
  title: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  }
});

export default App;
