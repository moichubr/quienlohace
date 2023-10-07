import React from "react"
import { View, Image, StyleSheet } from "react-native"
import rne from "../../assets/RNE.jpg"
import Logo from "./Logo"
import Constants from "expo-constants" 


const Rnepicture = () => {

    return(
        <View style={styles.container}>
            <Logo />
            <Image style={styles.img} source={rne}/>
        </View>
    )
}

//si no se estila la imagen, no aparece. Native necesita saber que espacio ocupará
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
    img : {
        width: '80%',
        height: '55%',
        margin: 'auto',   
        borderRadius: 10,
    }
})
export default Rnepicture