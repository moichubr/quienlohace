import React from "react";
import {View, Text, StyleSheet} from "react-native"
import Logo from "../Components/Logo"
import Constants from "expo-constants" 

const WhatIsIt = () => {
    return(
        <View style={styles.container}>
            <Logo />
            <View style={styles.viewcontainer}>
            <Text style={styles.title}>Registro Nacional de Establecimientos (RNE)</Text>
            <Text  style={styles.text}>Previo al inicio de sus actividades, es necesario que los establecimientos productores, elaboradores y fraccionadores de alimentos realicen los trámites de inscripción y autorización ante la autoridad sanitaria. Cuando la autoridad sanitaria autoriza el establecimiento, otorga un número de Registro Nacional que sirve para identificar <b>QUÉ ESTABLECIMIENTO ELABORA DETERMINADO PRODUCTO.</b></Text>
            </View>
                    </View>
    )
}


//---- ESTILOS

const styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flex: 1, //equivale al 100% del contenedor padre. necesario para que los hijos puedan expandirse
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 2,
    backgroundImage: 'linear-gradient(0deg, rgb(255, 107, 0), rgb(55, 11, 82))',

    },
    viewcontainer:{
        width: 319,
        height: 465,
        backgroundColor: 'rgba(217, 217, 217, 0.5)',
        borderColor: '#FFFFFF',
        borderRadius: 27,
        padding: 20,
        marginVertical: 'auto'
    },
    title: {
        fontFamily: 'Roboto-Medium.ttf',
        fontSize: 22,
        fontWeight: 600,
        color: '#FFFFFF'

    },
    text: {
        fontFamily: 'Roboto-Medium.ttf',
        fontSize: 18,
        fontWeight: 400,
        lineHeight: 24,
        color: '#FFFFFF',
        paddingTop: 25,

    }
})

export default WhatIsIt