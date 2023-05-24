import { FlatList, StyleSheet, Text, View } from "react-native";
import { Restaurant } from "../models/restaurant";

interface Props {
    title: string;
    results: Restaurant[];
}

export default function ResultsList({ title, results }: Props) {

    const styles = StyleSheet.create({
        titleStyle: {
            fontSize: 18,
            fontWeight: 'bold'
        }
    });

    return (
        <View>
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList
                horizontal
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({ item }) => {
                    return <Text>{item.name}</Text>
                }}
            />
        </View>
    )
}