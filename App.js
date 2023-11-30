import React, { useEffect, useState, useReducer } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableWithoutFeedback, Keyboard, Button, FlatList } from 'react-native';
import firebase from './src/firebaseConnection.js';
import List from './src/components/List.js';

console.disableYellowBox = true;

export default function App() {
  const [name, setName] = useState('Carregando...');
  const [idade, setIdade] = useState('');
  const [result, setResult] = useState('');
  const [users, setUsers] = useState([]);

  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  async function Cadastrar() {
    if (idade !== '' || idade !== '') {
      const user = await firebase.database().ref('usuarios');
      const chave = user.push().key;

      user.child(chave).set({
        nome: name,
        idade: idade,
      });
      // Força a atualização da FlatList após o cadastro
      forceUpdate();
    } else {
      setResult('Informe o nome e a idade');
    }
  }

  useEffect(() => {
    async function Listar() {
      await firebase
        .database()
        .ref('usuarios')
        .on('value', (snapshot) => {
          setUsers([]);

          snapshot.forEach((childItem) => {
            let data = {
              key: childItem.key,
              nome: childItem.val().nome,
              idade: childItem.val().idade,
            };

            setUsers((oldArray) => [...oldArray, data].reverse());
          });
        });
    }

    Listar();
  }, []);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={{ paddingTop: 50, alignItems: 'center', flex: 1 }}>
        <Text>Nome:</Text>
        <TextInput onChangeText={(texto) => setName(texto)} style={styles.input} />
        <Text>Idade:</Text>
        <TextInput onChangeText={(texto) => setIdade(texto)} style={styles.input} />
        <Button onPress={Cadastrar} title="Cadastrar" />
        <Text>{result}</Text>
        <FlatList
          keyExtractor={(item) => item.key}
          data={users}
          scrollEnabled={true}
          style={{ flex: 1, minHeight: 200 }}
          renderItem={({ item }) => <List data={item} />}
          // Força a atualização da FlatList
          extraData={users}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 150,
    backgroundColor: '#d9d9d9',
    borderRadius: 10,
  },
});
