import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

export default function Tarefa({ tarefa, handleFinalizado }) {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>{tarefa.title}</Text>
      <TouchableOpacity
        style={styles.botao}
        onPress={() => { handleFinalizado(tarefa.id) }}
      >
        <Text>Finalizado</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 10,
    borderBottomColor: "#e6e6e6",
    borderBottomWidth: 1,
    alignItems: "center"
  },
  botao: {

    backgroundColor: "#e6e6e6",
    padding: 10,
    margin: 5
  },
  texto: {
    flex: 1,
    fontSize: 15
  }
})