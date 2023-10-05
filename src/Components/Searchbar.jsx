import React from "react";
import {View, Text, TextInput, TouchableHighlight, TouchableWithoutFeedback, StyleSheet} from "react-native"
// import Rnepicture from "./RNEpicture";

const Searchbar = () => {

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Ingresa el R.N.E</Text>
            <TextInput style={styles.input} placeholder="02000167"></TextInput>
            <TouchableHighlight style={styles.button}>
                <Text style={styles.text}>BUSCAR</Text>
            </TouchableHighlight>

            <TouchableWithoutFeedback>
                <Text style={styles.firstanchor}>Dónde está el R.N.E en el producto?</Text>
            </TouchableWithoutFeedback>

            
            <TouchableWithoutFeedback>
                <Text style={styles.secondanchor}>Qué es el R.N.E?</Text>
            </TouchableWithoutFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: '30%',
        alignItems: 'center',
        justifyContent: 'center',
},
title:{
    color: '#FFFFFF',
    fontSize: 16,

},
input: {
    backgroundColor:'#FFFFFF',
    width: 286,
    height: 42,
    margin: 8,
    color: 'gray',
    textAlign: 'center',
    fontSize: 16,
    paddingBottom: 2
},
button: {
    backgroundColor: '#20C11D',
    height: 33,
    width: 130,
    borderRadius: 6,
    marginTop: 12
},
text: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 'auto',
    paddingBottom: 2
 
},
firstanchor: {
    color: '#7289FE',
    fontSize: 14,
    marginTop: 24,
    
},
secondanchor: {
        color: '#7289FE',
        fontSize: 14,
        marginTop: 10,
}
})
export default Searchbar