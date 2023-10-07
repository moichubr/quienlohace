import React from "react";
import {View, Text, TextInput, Pressable, StyleSheet} from "react-native"
// import Rnepicture from "./RNEpicture";

import { useNavigate } from "react-router-native";

const Searchbar = () => {
  const navigate = useNavigate();

  const handleNavigateToWhere = () => {
    navigate("/where");
  };

  const handleNavigateToWhat = () => {
    navigate("/what");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ingresa el R.N.E</Text>
      <TextInput style={styles.input} placeholder="02000167"></TextInput>

      <Pressable style={styles.button}>
        <Text style={styles.text}>BUSCAR</Text>
      </Pressable>

      <Pressable onPress={handleNavigateToWhere}>
        <Text style={styles.firstanchor}>Dónde está el R.N.E en el producto?</Text>
      </Pressable>

      <Pressable onPress={handleNavigateToWhat}>
        <Text style={styles.secondanchor}>Qué es el R.N.E?</Text>
      </Pressable>
    </View>
  );
};

// const Searchbar = () => {

//     return(
//         <View style={styles.container}>
//             <Text style={styles.title}>Ingresa el R.N.E</Text>
//             <TextInput style={styles.input} placeholder="02000167"></TextInput>

//             <Pressable style={styles.button}>
//                 <Text style={styles.text}>BUSCAR</Text>
//             </Pressable>


//                 <Link to="/rnepic" component={RNEpicture}>
//                     <Text style={styles.firstanchor}>Dónde está el R.N.E en el producto?</Text> 
//                 </Link>

//                 <Link to="/whatIsIt" component={WhatIsIt}>
//                 <Text style={styles.secondanchor}>Qué es el R.N.E?</Text>
//                 </Link>

            
            
//         </View>
//     )
// }

//---- ESTILOS

const styles = StyleSheet.create({
    container: {
        marginTop: '30%',
        alignItems: 'center',
        justifyContent: 'center',
},
title:{
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Roboto-Medium.ttf',

},
input: {
    backgroundColor:'#FFFFFF',
    width: 286,
    height: 42,
    margin: 8,
    textAlign: 'center',
    fontSize: 16,
    paddingBottom: 2,
    borderColor: 'gray',
    fontFamily: 'Roboto-Medium.ttf',
},
button: {
    backgroundColor: '#20C11D',
    height: 33,
    width: 130,
    borderRadius: 6,
    marginTop: 12,
    
},
text: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 'auto',
    paddingBottom: 2,
    fontFamily: 'Roboto-Medium.ttf',
 
},
firstanchor: {
    color: '#7289FE',
    fontSize: 14,
    marginTop: 24,
    fontFamily: 'Roboto-Medium.ttf',
    
},
secondanchor: {
        color: '#7289FE',
        fontSize: 14,
        marginTop: 10,
        fontFamily: 'Roboto-Medium.ttf',
}
})
export default Searchbar