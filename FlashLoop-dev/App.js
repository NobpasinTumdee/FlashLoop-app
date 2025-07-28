import React, { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Keyboard, // สำหรับซ่อนคีย์บอร์ด
} from 'react-native';

import mainstyles from './styles/main';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim().length > 0) {
      setTodos(currentTodos => [
        ...currentTodos,
        { id: Math.random().toString(), text: newTodo.trim() },
      ]);
      setNewTodo('');
      Keyboard.dismiss();
    }
  };

  const deleteTodo = (id) => {
    setTodos(currentTodos => currentTodos.filter(todo => todo.id !== id));
  };

  const TodoItem = ({ item }) => (
    <View style={mainstyles.todoItem}>
      <Text style={mainstyles.todoText}>{item.text}</Text>
      <TouchableOpacity onPress={() => deleteTodo(item.id)} style={mainstyles.deleteButton}>
        <Text style={mainstyles.deleteButtonText}>X</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={mainstyles.container}>
      <View style={mainstyles.header}>
        <Text style={mainstyles.title}>TO DO LIST</Text>
      </View>


      <View style={mainstyles.inputContainer}>
        <TextInput
          style={mainstyles.textInput}
          placeholder="Add new list..."
          value={newTodo}
          onChangeText={text => setNewTodo(text)}
          onSubmitEditing={addTodo} // กด Enter เพื่อเพิ่ม To-Do
          returnKeyType="done"
        />
      </View>
      <TouchableOpacity onPress={addTodo} style={mainstyles.addButton}>
        <Text style={mainstyles.addButtonText}>ADD</Text>
      </TouchableOpacity>

      {/* ส่วนแสดงรายการ To-Do */}
      <FlatList
        data={todos}
        renderItem={({ item }) => <TodoItem item={item} />}
        keyExtractor={item => item.id}
        contentContainerStyle={mainstyles.listContainer}
        ListEmptyComponent={() => (
          <Text style={mainstyles.emptyListText}>There is no To-Do list</Text>
        )}
      />
    </View>
  );
}

