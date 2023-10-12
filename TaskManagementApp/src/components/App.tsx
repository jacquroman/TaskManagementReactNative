import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

//define task interface
interface Task {
    id: number;
    text: string;
}

const App = () => {
    // State to manage tasks
    const [tasks, setTasks] = useState<Task[]>([]);
    const [taskText, setTaskText] = useState('');

    //function to add a task
    const addTask = () => {
        if(taskText){
          //if there is taskText then
          //create a new task object
          const newTask: Task = {
            id: tasks.length + 1,
            text: taskText,
          };

          //then add the task object to a tasks list
          //spread the current array of tasks then add the newTask
          setTasks([...tasks, newTask]);
          //reset the taskText
          setTaskText('');
        };
    }

    return (
        <View>
            <Text>Task Management App</Text>
            <TextInput value={taskText} onChangeText={(text) => setTaskText(text)}/>
            <Button title="Add Task" onPress={addTask}/>
            <ScrollView>
                {tasks.map((task) => (
                    <Text key={task.id}>{task.text}</Text>
                ))}
            </ScrollView>
        </View>
    );
};

export default App;