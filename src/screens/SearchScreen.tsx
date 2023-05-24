import { StyleSheet, Text, View } from "react-native";
import SearchBar from "../components/SearchBar";
import { useState } from "react";
import { Restaurant } from "../models/restaurant";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

export default function SearchScreen() {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price: string) => {
        if (Array.isArray(results)) {
            return results.filter((result: Restaurant) => {
                return result.price === price;
            });
        } else {
            return [];
        }
    }

    return (
        <View>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => {
                    if (typeof (searchApi) === 'function')
                        searchApi(term)
                }}
            />
            {errorMessage && typeof (errorMessage) === 'string' ? <Text>{errorMessage}</Text> : null}
            <Text>We have found {results.length} results</Text>
            <ResultsList title="Cost Effective" results={filterResultsByPrice('$')} />
            <ResultsList title="Bit Pricier" results={filterResultsByPrice('$$')} />
            <ResultsList title="Big Spender" results={filterResultsByPrice('$$$')} />
        </View>
    )
}