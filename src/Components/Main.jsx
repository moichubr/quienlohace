import React from "react"
import { View, StyleSheet } from "react-native"
import Constants from "expo-constants" //expo trae constantes ya declaradas que tienen default values para ciertas cosas
import Searchbar from "./Searchbar"
import Logo from "./Logo"


const Main = () => {
    return(
    <View style={styles.container}>
       <Logo />
        <Searchbar/>
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
})

export default Main