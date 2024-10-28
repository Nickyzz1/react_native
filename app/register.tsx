import { Link } from "expo-router";

import { FIREBASE_APP, FIREBASE_AUTH } from '@/firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useRef, useEffect, useState } from 'react';
import { View, Animated, StyleSheet, Text, Alert, TextInput, TouchableOpacity } from 'react-native';
import Svg, { Path } from 'react-native-svg'; // Importa elementos SVG

export default function RegisterUser() {

  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const [confirmPass, setConfirmPass] = useState("")
  const animatedValue = useRef(new Animated.Value(0)).current;

  const auth = FIREBASE_AUTH;
  
  useEffect(()=> 
  {
    console.log(auth.currentUser)
  }, [auth.currentUser]);

  useEffect(()=> {
    console.log(email, pass, confirmPass)
  }, [email, pass, confirmPass]);

  const register = () => {
    if(pass === confirmPass) {
      createUserWithEmailAndPassword(auth, email, pass)
      .then((dadosUsuario) => {
        console.log(dadosUsuario);
        Alert.alert("cadastrado com sucesso");
      }).catch((err => {
        alert(err.message)
      }))
    } else {
       Alert.alert("erro")
    }
  }


  // Animação para mover a onda
  useEffect(() => {
    Animated.loop(
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 4000,
        useNativeDriver: true,
      })
    ).start();
  }, []);

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-200, 0], // Movimenta a onda horizontalmente
  });

  return (

    <View style={styles.container}>

      <TextInput  placeholder='email'
       style={styles.input}
       onChangeText={setEmail}
       value={email}
       keyboardType="email-address"/>

  
      <TextInput
        onChangeText={setPass}
        value={pass}
        placeholder="Digite sua senha"
        keyboardType="numeric"
        secureTextEntry
        style={styles.input}/>
      <TextInput
        onChangeText={setConfirmPass}
        value={confirmPass}
        placeholder="Confirme sua senha"
        keyboardType="numeric"
        secureTextEntry
        style={styles.input}/>


      <TouchableOpacity style={styles.btn} onPress={register}>
          <Text style={styles.txt}>Entrar</Text>
      </TouchableOpacity>
      

      
{/* <Svg
  height="auto"
  width="100%"
  viewBox="0 0 500 200"
  style={{ position: 'absolute', bottom: 0, maxHeight: 200 }} // maxHeight no estilo
>
  <Path
    d="M0 100 Q 150 50, 300 100 T 800 100 V 300 H 0 Z"
    fill="#905fd8"
    stroke="none"
  />
</Svg> */}

    </View>

    // <View style={styles.container}>
    //   <View style={styles.boxContainer}>
    //     {/* Onda animada */}
    //     <Animated.View style={[styles.waveContainer, { transform: [{ translateX }] }]}>
    //       <Svg height="300" width="600" viewBox="0 0 600 300">
    //         <Path
    //           d="M0 100 Q 150 50, 300 100 T 600 100 V 300 H 0 Z"
    //           fill="#905fd8" // Cor da onda
    //           stroke="none"
    //         />
    //       </Svg>
    //     </Animated.View>

    //     {/* Conteúdo dentro da box */}
    //     <View style={styles.box}>
    //       <Text style={styles.boxText}>HELLO</Text>
    //     </View>
    //   </View>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display:"flex",
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:"center",
 
  },
  btn: {
    backgroundColor: "#5B29A7FF",
    padding: 10,
    borderRadius: 30,
    marginTop: 50,
    minWidth: "auto",
    width: 250,
    alignSelf: "center",
    color:"#FFFFFFFF",
    textAlign: "center"
  },
  boxContainer: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container2: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: "100%",
    height: 200, // Defina uma altura específica para o contêiner
    position: "absolute",
    bottom: 0,
  },
  
  waveContainer: {
    position: 'absolute',
    top: -50, // Ajusta a posição da onda
    left: 0,
    width: 600,
    height: 100,
  },
  box: {
    width: 200,
    height: 200,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20, // Arredonda a borda da box
    zIndex: 1,
  },
  boxText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    borderBottomWidth: 1, // Adiciona uma linha na parte inferior
    borderBottomColor: "#AB88DEFF", // Cor da linha
    backgroundColor: "transparent", // Fundo transparente
    height: 40, // Altura do input
    marginVertical: 10, // Margem vertical para espaçamento
    padding: 5, // Padding interno
  },

  txt:
  {
    textAlign: "center"
  },
});

  