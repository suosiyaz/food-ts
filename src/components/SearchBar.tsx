import { StyleSheet, TextInput, View } from "react-native";
import { Feather } from '@expo/vector-icons';

interface Props {
    term: string;
    onTermChange: (newTerm: string) => void;
    onTermSubmit: () => void;
}

export default function SearchBar({ term, onTermChange, onTermSubmit }: Props) {

    const styles = StyleSheet.create({
        viewStyle: {
            backgroundColor: '#e3e0e0',
            height: 50,
            borderRadius: 5,
            marginHorizontal: 15,
            flexDirection: 'row',
            marginTop: 10
        },
        inputStyle: {
            flex: 1,
            fontSize: 18
        },
        iconStyle: {
            fontSize: 35,
            alignSelf: 'center',
            marginHorizontal: 15
        }
    });
    
    return (
        <View style={styles.viewStyle}>
            <Feather name="search" style={styles.iconStyle} />
            <TextInput
                style={styles.inputStyle}
                placeholder="Search"
                value={term}
                onChangeText={onTermChange}
                autoCorrect={false}
                autoCapitalize="none"
                onEndEditing={onTermSubmit}
            />
        </View>
    )
}

