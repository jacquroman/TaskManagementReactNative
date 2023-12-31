import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

interface SearchBarProps {
    onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState<string>('');

    const handleSearch = () => {
        if (searchQuery.trim() !== '') {
            onSearch(searchQuery);
        }
    };

    return (
        <View className="flex-row p-8 bg-gray-200">
            <TextInput
                className="flex-1 bg-gray-300"
                placeholder="Search..."
                value={searchQuery}
                onChangeText={(text) => setSearchQuery(text)}
            />
            <Button title="Search" onPress={handleSearch} />
        </View>
    );
};

export default SearchBar;
