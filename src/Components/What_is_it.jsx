import React from "react";
import {View, Text, StyleSheet} from "react-native"

const WhatIsIt = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Registro Nacional de Establecimientos (RNE)</Text>
            <Text  style={styles.text}>Previo al inicio de sus actividades, es necesario que los establecimientos productores, elaboradores y fracccionadores realicen los trámites de inscripción y autorización ante la autoridad sanitaria. Cuando la autoridad sanitaria autoriza el establecimiento, otorga un número de Registro Nacional que sirve para identificar QUÉ ESTABLECIMIENTO ELABORA DETERMINADO PRODUCTO.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    title: {
        fontFamily: 'Roboto-Medium.ttf',
    },
    text: {
        fontFamily: 'Roboto-Medium.ttf',
        fontSize: 18,
        fontWeight: 600,
        lineHeight: 24
    }
})

export default WhatIsIt