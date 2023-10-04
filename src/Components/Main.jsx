import React from "react"
import { View, Text } from "react-native"
import Constants from "expo-constants" //expo trae constantes ya declaradas que tienen default values para ciertas cosas
import Searchbar from "./Searchbar"

const Main = () => {
    return(
    <View style={{ marginTop: Constants.statusBarHeight, flexGrow: 1}}>
        <Text>QLH?</Text>
        <Text>Quién lo hace?</Text>
        <Searchbar />
    </View>
    )
}

export default Main