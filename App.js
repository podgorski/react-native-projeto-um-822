//Explicar Estrutura de um arquivo react (Componente) - ok
//Criar uma Tarefa - ok
//Explicar state - ok
//Componentizar a Tarefa - ok
//Explicar props  - ok
//Explicar o useEffect (Alimentar Dinamicamente as tarefas) - ok
//https://jsonplaceholder.typicode.com/todos' (Tarefas Fakes) - ok 

import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Tarefa from './Tarefa';

export default function App() {

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => {
        const limit_tarefas = json.splice(0, 6)
        setTarefas(limit_tarefas)
      })
  }, [])

  const [tarefas, setTarefas] = useState([])

  function handleFinalizado(tarefaId) {

    const tarefas_pendentes = tarefas.filter((tarefa) => {
      return tarefa.id !== tarefaId
    })

    setTarefas(tarefas_pendentes)

  }

  return (
    <View style={styles.container}>
      <ScrollView>
        {tarefas.map((tarefa) =>
          <Tarefa
            key={tarefa.id}
            tarefa={tarefa}
            handleFinalizado={handleFinalizado} />
        )}
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
});
