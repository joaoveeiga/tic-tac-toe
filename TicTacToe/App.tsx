import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { TicTacToe } from './components'
import { TicTacToeProvider } from './providers';


const App = () => {
  return (
    <TicTacToeProvider>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Tic Tac Toe</Text>
        </View>
        <TicTacToe />
      </View>
    </TicTacToeProvider>
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