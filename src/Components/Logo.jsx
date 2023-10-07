import React from "react"
import {View, Text, StyleSheet} from "react-native"


const Logo = () => {

    return(
        <View>
            <Text style={styles.title}>QLH?</Text>
        <Text style={styles.subtitle}>Quién lo hace?</Text>
        </View>
    )
}

const styles = StyleSheet.create({
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
    }
})
export default Logo