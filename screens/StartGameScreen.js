import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Card from '../components/Card';
import Input from '../components/Input';
import Colors from '../constants/colors';

const StartGameScreen = () => {

  const [enteredValue, setEnteredValue] = useState('')
  const numberInputHandler = input => {
    setEnteredValue(input.replace(/[^0-9]/g, ''))
  }

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Select a Numer</Text>
      <Card>
        <Input
        style={styles.input}
          blurOnSubmit // Android
          autoCapitalize='none'
          autoCorrect={false}
          keyboardType="number-pad"
          maxLength={2}
          onChangeText={numberInputHandler}
          value={enteredValue}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Reset"
              color={Colors.secondary}
              onPress={() => { }}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Confirm"
              color={Colors.primary}
              onPress={() => { }}
            />
          </View>
        </View>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  button: {
  },
  input: {
    width: 50,
    textAlign: 'center',
  }
});

export default StartGameScreen