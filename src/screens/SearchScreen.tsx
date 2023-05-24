import { StyleSheet, Text, View } from "react-native";
import SearchBar from "../components/SearchBar";
import { useState } from "react";

export default function SearchScreen () {
    const [term, setTerm] = useState('');
    const styles = StyleSheet.create({});

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