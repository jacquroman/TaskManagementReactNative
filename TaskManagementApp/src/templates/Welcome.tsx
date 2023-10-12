import SearchBar from '@/components/SearchBar';
import TaskList from '@/components/TaskList';
import { View } from 'react-native';

const handleSearch = (searchQuery: string) => {
  // Perform a search with the searchQuery
  console.log('Searching for:', searchQuery);
};

const Welcome = () => (
  <View className="flex-1 items-center justify-center">
    <SearchBar onSearch={handleSearch} />
    <TaskList />
  </View>
);

export { Welcome };
