import React from 'react';
import { StyleSheet, Text, TextInput, View, Label } from 'react-native';


const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  return (
    <View
      style={styles.container}>
      <Text
        style={styles.label}
        >{label}</Text>
      <TextInput
        autoCorrect={false}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        value={value}
        style={styles.input}
        />
    </View>
  )
}

export default Input;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    width: '100%',
    borderColor: '#eee',
    borderBottomWidth: 2,
  },
  label: {
    padding: 5,
    paddingBottom: 0,
    color: '#333',
    fontSize: 17,
    fontWeight: '700',
    width: '100%',
  },
  input: {
    paddingRight: 5,
    paddingLeft: 5,
    paddingBottom: 2,
    color: '#333',
    fontSize: 18,
    width: '100%',
  }
});
