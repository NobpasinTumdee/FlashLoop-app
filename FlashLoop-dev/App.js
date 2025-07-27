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

// Component หลักของแอป To-Do List
export default function App() {
  // State สำหรับเก็บรายการ To-Do
  const [todos, setTodos] = useState([]);
  // State สำหรับเก็บข้อความที่กำลังพิมพ์ในช่อง input
  const [newTodo, setNewTodo] = useState('');

  // ฟังก์ชันสำหรับเพิ่ม To-Do ใหม่
  const addTodo = () => {
    if (newTodo.trim().length > 0) { // ตรวจสอบว่ามีข้อความหรือไม่
      setTodos(currentTodos => [
        ...currentTodos,
        { id: Math.random().toString(), text: newTodo.trim() }, // สร้าง ID แบบสุ่ม
      ]);
      setNewTodo(''); // ล้างช่อง input หลังจากเพิ่ม To-Do
      Keyboard.dismiss(); // ซ่อนคีย์บอร์ด
    }
  };

  // ฟังก์ชันสำหรับลบ To-Do
  const deleteTodo = (id) => {
    setTodos(currentTodos => currentTodos.filter(todo => todo.id !== id));
  };

  // Component สำหรับแต่ละรายการ To-Do ใน FlatList
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
      {/* ส่วนหัวของแอป */}
      <View style={mainstyles.header}>
        <Text style={mainstyles.title}>รายการสิ่งที่ต้องทำ</Text>
      </View>

      {/* ส่วนสำหรับเพิ่ม To-Do ใหม่ */}
      <View style={mainstyles.inputContainer}>
        <TextInput
          style={mainstyles.textInput}
          placeholder="เพิ่มรายการใหม่..."
          value={newTodo}
          onChangeText={text => setNewTodo(text)}
          onSubmitEditing={addTodo} // กด Enter เพื่อเพิ่ม To-Do
          returnKeyType="done"
        />
        <TouchableOpacity onPress={addTodo} style={mainstyles.addButton}>
          <Text style={mainstyles.addButtonText}>เพิ่ม</Text>
        </TouchableOpacity>
      </View>

      {/* ส่วนแสดงรายการ To-Do */}
      <FlatList
        data={todos}
        renderItem={({ item }) => <TodoItem item={item} />}
        keyExtractor={item => item.id}
        contentContainerStyle={mainstyles.listContainer}
        ListEmptyComponent={() => (
          <Text style={mainstyles.emptyListText}>ยังไม่มีรายการสิ่งที่ต้องทำ</Text>
        )}
      />
    </View>
  );
}

