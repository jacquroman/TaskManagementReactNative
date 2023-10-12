import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

interface AddTaskProps {
    addPressed: (text: string) => void;
};

const AddTask: React.FC<AddTaskProps> = ({ addPressed }) => {
    const [newTask, setNewTask] = useState<string>('');

    return (
        <View className='flex-row'>
            <TextInput
                placeholder="Add a new task"
                value={newTask}
                onChangeText={(text) => setNewTask(text)}
            />
            <Button title="Add a Task" onPress={() => { addPressed(newTask) }} />
        </View>
    );
};

export default AddTask;