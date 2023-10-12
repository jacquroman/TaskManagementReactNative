import SearchBar from '@/components/SearchBar';
import { Text, View } from 'react-native';

const handleSearch = (searchQuery: string) => {
  // Perform a search with the searchQuery
  console.log('Searching for:', searchQuery);
};

const Welcome = () => (
  <View className="flex-1 items-center justify-center">
    <SearchBar onSearch={handleSearch} />
    <Text className="text-blue-500">Open up App/ to start working on your app!</Text>
  </View>
);

export { Welcome };
