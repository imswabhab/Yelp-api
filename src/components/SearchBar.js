import React from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { Octicons } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.searchbarBackground}>
            <Octicons name="search" style={styles.iconStyle} color="black" />
            <TextInput value={term} onChangeText={newTerm => onTermChange(newTerm)} style={styles.inputStyle} placeholder="Search" autoCapitalize="none" autoCorrect={false} onEndEditing={() => onTermSubmit()} />
        </View>
    )
}

const styles = StyleSheet.create({
    searchbarBackground: {
        backgroundColor: '#D3D3D3',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: "row",
        marginTop: 10,
        marginBottom:10

    },
    inputStyle: {
        fontSize: 18,
        flex: 1
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: "center",
        marginHorizontal: 10
    }
})

export default SearchBar;