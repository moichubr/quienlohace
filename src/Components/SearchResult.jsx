import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SearchResult = (props) => {
    const {info} = props
    console.log('la data en searchresults', info)

    return (
        <View style={styles.container}>
            { typeof info === 'array' ? 
            <Text style={styles.notfound}>{info[0]}</Text> 
            : (
                <View>
                <Text style={styles.firstText}>A este producto lo hace</Text>
                <Text style={styles.enterprise}>{info.enterprise}</Text>
                <Text style={styles.secondText}>Ubicado en</Text>
                <Text style={styles.location}>{info.location}</Text>
                </View>

            ) }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 283,
        height: 227,
        margin: 'auto',
        backgroundColor: 'rgba(227, 227, 227, 0.5)',
        padding: 20,
        marginTop: 40,
        borderRadius: 27,
        borderColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center'
    },
    firstText: {
        color: '#FFFFFF',
        fontFamily: 'Roboto-Medium.ttf',
        fontSize: 18,
        letterSpacing: 2,
        fontWeight: '200'
    },
    enterprise: {
        color: '#FD2626',
        fontFamily: 'Roboto-Medium.ttf',
        letterSpacing: 2,
        fontWeight: 'bold',
        fontSize: 24,
    },
    secondText: {
        color: '#FFFFFF',
        fontFamily: 'Roboto-Medium.ttf',
        fontSize: 18,
        letterSpacing: 2,
        fontWeight: '200',
        marginTop: 20
    },
    location: {
        color: '#605E5E',
        fontFamily: 'Roboto-Medium.ttf',
        fontSize: 18,
        fontWeight: '500',
        letterSpacing: 2
    },
    notfound: {
        color: '#FD2626',
        fontFamily: 'Roboto-Medium.ttf',
        fontSize: 22,
        fontWeight: '600'
    }
})

export default SearchResult