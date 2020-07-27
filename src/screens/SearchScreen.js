import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet,ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';
import ResultList from '../components/ResultList';


const SearchScreen = () => {

    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: term,
                    location: 'san jose'
                }
            })
            setResults(response.data.businesses)
        } catch (err) {
            setErrorMessage('Something went Wrong')
        }
    }

    useEffect(() => {
        searchApi('pasta    ')
    }, [])


    const filterResultsByprice = (price) => {
        return results.filter(result => {
            return result.price === price;
        })
    }

    return (
        <View style={{  }}>
            <SearchBar term={term} onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)} />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
            <ResultList results={filterResultsByprice('$')} title="Cost Effective"  />
            <ResultList results={filterResultsByprice('$$')} title="Bit Pricer!"  />
            <ResultList results={filterResultsByprice('$$$')} title="Big Spender!"  />
            </ScrollView>
        </View>
    )
}


export default SearchScreen;