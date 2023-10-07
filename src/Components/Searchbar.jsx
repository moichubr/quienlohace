import React, { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { useNavigate } from "react-router-native";
import enterprises from "../../data";
import SearchResult from "./SearchResult";

const Searchbar = () => {
  const navigate = useNavigate();
  const [startSearch, setStartSearch] = useState(false)
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  
  console.log('start', startSearch)
// console.log('enterprises', enterprises)
  const handleNavigateToWhere = () => {
    navigate("/where");
  };

  const handleNavigateToWhat = () => {
    navigate("/what");
  };

  function handleInput(e) {
    setInput(e.target.value);
  }

  const handleSearch = () => {
    if(input.length === 0){
        alert('Ingresa el RNE')
    } 
    if(input.length < 8 || input.length > 8){
        alert('El RNE es un número de 8 dígitos')
        setInput("")
    } else {
        const enterprise = enterprises.find((el) => el.rne === input)
        enterprise
        ? setData(enterprise)
        : setData(['El establecimiento no está registrado']);
        setStartSearch(true)
        setInput("")
    }
    
    // fetch('http://jskdjskjdks')
    // .then(response => response.json())
    // .then(data => setData(data))
  };
//   console.log('el input', input)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ingresa el R.N.E</Text>
      <TextInput
        style={styles.input}
        placeholder="02000167"
        name="input"
        value={input}
        onChange={handleInput}
      ></TextInput>
      <Pressable style={styles.button} onPress={handleSearch}>
        <Text style={styles.text}>BUSCAR</Text>
      </Pressable>

      <Pressable onPress={handleNavigateToWhere}>
        <Text style={styles.firstanchor}>
          Dónde está el R.N.E en el producto?
        </Text>
      </Pressable>

      <Pressable onPress={handleNavigateToWhat}>
        <Text style={styles.secondanchor}>Qué es el R.N.E?</Text>
      </Pressable>

      <View>
        {startSearch ? 
        <SearchResult info={data}/> : null    
    }
      </View>
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
    marginTop: "30%",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "Roboto-Medium.ttf",
  },
  input: {
    backgroundColor: "#FFFFFF",
    width: 286,
    height: 42,
    margin: 8,
    textAlign: "center",
    fontSize: 16,
    paddingBottom: 2,
    borderColor: "gray",
    fontFamily: "Roboto-Medium.ttf",
  },
  button: {
    backgroundColor: "#20C11D",
    height: 33,
    width: 130,
    borderRadius: 6,
    marginTop: 12,
  },
  text: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    marginVertical: "auto",
    paddingBottom: 2,
    fontFamily: "Roboto-Medium.ttf",
  },
  firstanchor: {
    color: "#7289FE",
    fontSize: 14,
    marginTop: 24,
    fontFamily: "Roboto-Medium.ttf",
  },
  secondanchor: {
    color: "#7289FE",
    fontSize: 14,
    marginTop: 10,
    fontFamily: "Roboto-Medium.ttf",
  },
});
export default Searchbar;
