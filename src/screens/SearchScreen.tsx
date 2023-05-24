import { StyleSheet, Text, View } from "react-native";
import SearchBar from "../components/SearchBar";
import { useState } from "react";

const SearchScreen = () => {
    const [term, setTerm] = useState('');

    return (
        <View>
            <SearchBar 
            term={term} 
            onTermChange={(newTerm: string) => setTerm(newTerm)} 
            onTermSubmit={() => console.log('term submitted')}
            />
            <Text>{term}</Text>
        </View>
    )
}

const styles = StyleSheet.create({});

export default SearchScreen;