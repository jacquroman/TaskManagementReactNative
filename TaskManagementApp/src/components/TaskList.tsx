import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { Task } from '@/types/Task';
import TaskItem from './TaskItem';
import AddTask from './AddTask';

const TaskList: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [taskIdCounter, setTaskIdCounter] = useState<number>(1);

    const addTask = (newTask: string) => {
        if (newTask.trim() !== '') {
            const task: Task = { id: taskIdCounter, text: newTask };
            setTasks([...tasks, task]);
            setTaskIdCounter(taskIdCounter + 1);
        }
    };

    const removeTask = (taskId: number) => {
        const newTasks = tasks.filter((task) => task.id !== taskId);
        setTasks(newTasks);
    };

    return (
        <View className="flex-1">
            <AddTask addPressed={addTask} />
            <View className="flex-1 bg-gray-300">
                <FlatList
                    data={tasks}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <TaskItem task={item} onComplete={removeTask} />
                    )}
                />
            </View>
        </View>
    );
};

export default TaskList;
