import React from "react"
import { View, Text, StyleSheet } from "react-native"
import Constants from "expo-constants" //expo trae constantes ya declaradas que tienen default values para ciertas cosas
import Searchbar from "./Searchbar"

const Main = () => {
    return(
    <View style={styles.container}>
        <Text style={styles.title}>QLH?</Text>
        <Text style={styles.subtitle}>Quién lo hace?</Text>
        <Searchbar />
        
    </View>
    )
}

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
    title: {
        color: '#FF9110',
        fontSize: 80,
        fontWeight: 'light',
        textShadowColor: '#000000',  // Color del sombreado
        textShadowOffset: {       // Desplazamiento del sombreado
            width: 1,
            height: 1,
    },
    textShadowRadius: 2,
    height: 102,
    width: 227,
    marginTop: 40,           // Margen superior de 40
    marginHorizontal: 'auto', // Centra horizontalmente
    marginBottom: 0,         // Margen inferior de 0   
    textAlign: 'center', // Centra horizontalmente el texto
    letterSpacing: 2.4,
    fontFamily: 'Prompt-Light.ttf',
    wordWrap: 'break-word'
        
    },
    subtitle: {
        color: '#FFFFFF',
        fontSize: 16,
        fontFamily: 'Prompt-Light.ttf',
        fontWeight: 400
    },
})

export default Main