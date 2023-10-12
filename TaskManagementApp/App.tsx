import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from './Components/SearchBar';

export default function App() {
  const handleSearch = (searchQuery: string) => {
    // Perform a search with the searchQuery
    console.log('Searching for:', searchQuery);
  };

  return (
    <View style={styles.container}>
      <SearchBar onSearch={handleSearch} />
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
