import React from "react";
import {View, Text, TextInput, TouchableHighlight, TouchableWithoutFeedback} from "react-native"
// import Rnepicture from "./RNEpicture";

const Searchbar = () => {

    return(
        <View>
            <Text>Ingresa el R.N.E</Text>
            <TextInput></TextInput>
            <TouchableHighlight>
                <Text>BUSCAR</Text>
            </TouchableHighlight>

            <TouchableWithoutFeedback>
                <Text>Dónde está el R.N.E en el producto?</Text>
            </TouchableWithoutFeedback>

            
            <TouchableWithoutFeedback>
                <Text>Qué es el R.N.E?</Text>
            </TouchableWithoutFeedback>
        </View>
    )
}
export default Searchbar