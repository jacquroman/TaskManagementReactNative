import React from 'react';
import { View, Text, Button } from 'react-native';
import { Task } from '@/types/Task';

interface TaskProps {
    task: Task;
    onComplete: (id: number) => void;
}

const TaskItem: React.FC<TaskProps> = ({ task, onComplete }) => {
    return (
        <View className="flex-row">
            <Text>{task.text}</Text>
            <Button title="Remove" onPress={() => onComplete(task.id)} />
        </View>
    );
};

export default TaskItem;