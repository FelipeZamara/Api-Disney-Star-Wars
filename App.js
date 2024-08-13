import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
//exportamentos das coisas usadas

const request = async(callback) => {
  const response = await fetch('https://swapi.dev/api/starships/');//pega as informações do endereço mostrado, no caso das naves de star wars na api
  const parsed = await response.json();//transforma a resposta em json e coloca isso na variavel parsed
  callback(parsed.results);//chama o results da variavel parsed
};


export default function App() {
  const [registros, setRegistros] = useState([]);

useEffect(()=>{//vai na request e ve se tem informação ou nao la, se tiver coloca as informações em setRegistros
  request(setRegistros);
},[]);


  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Naves da API de Star Wars</Text>
      <FlatList
      data={registros}
      keyExtractor={(item)=>item.name.toString()}
      renderItem={({item})=>
      <Text style={styles.item}>
      <Text>Nave: {item.name}{'\n'} </Text>
      <Text>Modelo: {item.model}{'\n'}</Text>
      <Text>Usando: {item.manufacturer}{'\n'}</Text>
      </Text>
      }
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item:{
fontSize: 18,
backgroundColor: '#D58CFC',
padding: 10,
margin: 8,
borderRadius:15,
  },
  titulo:{
    fontSize: 30,
    marginVertical: 50,
    marginBottom: 10,
  },
});
