import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from "react-native";
import React, { useRef } from 'react';
import Svg, { Path, Text as SvgText } from 'react-native-svg';
import { useState } from "react";
import { Link, router } from "expo-router";
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen'
import {signInWithEmailAndPassword} from '@firebase/auth'
import { useEffect } from 'react';
import { FIREBASE_AUTH } from "@/firebaseConfig";


export default function Login() {
  
  const [loaded, error] = useFonts({
    'inter': require('../assets/fonts/Inter_18pt-Bold.ttf'),
    'interBold': require('../assets/fonts/Inter_18pt-ExtraBold.ttf'),
  });
  
  const auth = FIREBASE_AUTH;

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) { //createUserWIthPassWord
    return null;
  }

  const signIn = () =>
  {
    signInWithEmailAndPassword(auth, email, pass).then((dadosUsuario) => {
      console.log(dadosUsuario);
      router.push('/(tabs)')
    }).catch((err) => {
      alert(err.message)
    })

  }

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");


  console.log(email, pass);
  console.log(typeof email, typeof pass);


  const onPress = () => {
    router.push("../(tabs)");
  };

  const animatedValue = useRef(new Animated.Value(0)).current;

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

    // <LinearGradient
    //     // Button Linear Gradient
    //     colors={['#daa3d1', '#905fd8']}
    //     style={styles.bg}>
    <>


    <View>
      <View style={styles.content}>
      <Svg height="100%" width="100%" viewBox="800 90 950 50" style={{ aspectRatio: 1.10 }}>
      <Path
              d="M0 400 Q -0 110, 950 200 T 3500 750 V 0 H 0 Z"
              fill="#905fd8"
              stroke="none"
            />

            </Svg>
      </View>

      <View></View>
    </View>
    

      {/* <View style={styles.mainContainer}>

        <View style={styles.container}>

          <View>
  
            <Svg height="100%" width="100%" viewBox="40 40 620 650" style={{ aspectRatio: 1.10 }}>
              <Path
                d="M0 10 Q -60 90, 770 80 T 9800 950 V 0 H 0 Z"
                fill="#905fd8"
                stroke="none"
              />
  
              <SvgText
                x="55%"
                y="90%"
                fontSize="24"
                fontWeight="bold"
                fontFamily="interBold"
                textAnchor="middle" // Centraliza o texto horizontalmente
                >
                HELLO
  
              </SvgText>
  
              <SvgText
                x="55%"
                y="95%"
                fontSize="18"
                textAnchor="middle"
                fontFamily="inter">
  
                Sign into your Account
  
            </SvgText>
            </Svg>
      </View>

          {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,192L60,202.7C120,213,240,235,360,234.7C480,235,600,213,720,186.7C840,160,960,128,1080,122.7C1200,117,1320,139,1380,149.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg> */}


          {/* <View style={styles.box}>

            <View style={styles.content}>
              
              <Text style={styles.txt}>Email</Text>
              <TextInput
                style={styles.input}
                onChangeText={setEmail}
                value={email}
                placeholder="Digite seu email"
                keyboardType="email-address"
              />
              <Text style={styles.txt}>Senha</Text>
              <TextInput
                onChangeText={setPass}
                value={pass}
                placeholder="Digite sua senha"
                keyboardType="numeric"
                secureTextEntry
                style={styles.input}/>

              <TouchableOpacity style={styles.btn} onPress={signIn}>
                <Text style={styles.txt}>Entrar</Text>
              </TouchableOpacity>

              <View style={styles.createAccount}>
                <Link href={"/register"}>Cadastrar-ser</Link>
              </View>

            </View>

          </View>
          
        </View>

        <View style={styles.container2}>
        <Svg
          height={undefined}
          width="100%"
          viewBox="0 0 800 150"
            >
          <Path
            d="M0 100 Q 150 50, 300 100 T 800 100 V 300 H 0 Z"
            fill="#905fd8"
            stroke="none"
          />
            </Svg>
      </View>
      </View> */} */
    </>
    // </LinearGradient>
  );
}

const styles = StyleSheet.create({

  mainContainer:
  {
    display: "flex",
    top: 0,
    margin: 0,
    padding: 0,
    height: "100%",
    backgroundColor: '#FFFFFFFF',
  },

  container: {

    margin: 0,
    padding: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFFFF',
    flexDirection: "column",
    marginBottom: 10

  },
  container2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    bottom: 0,
    position: "absolute",
    width:"100%",
  },
  content: {
   top:0,
    maxHeight: 100
  },
  input: {
    borderBottomWidth: 1, // Adiciona uma linha na parte inferior
    borderBottomColor: "#AB88DEFF", // Cor da linha
    backgroundColor: "transparent", // Fundo transparente
    height: 40, // Altura do input
    marginVertical: 10, // Margem vertical para espaçamento
    padding: 5, // Padding interno
  },
  local: {
    top: 0
  },

  boasVindas:
  {
    textAlign: "center",
    fontFamily: "inter"
    //color: "#ffffff
  },

  txt:
  {
    color: "#ffff",
    textAlign: "center"
  },
  bg:
  {
    flex: 1
  },
  box: {
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: 'center',
  },
  btn: {
    backgroundColor: "#5B29A7FF",
    padding: 10,
    borderRadius: 30,
    marginTop: 50,
    minWidth: "auto",
    width: 250,
    alignSelf: "center"
  },
  createAccount:
  {
    margin: 15,
    alignSelf: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#AB88DEFF"
  },
  bold:
  {
    textAlign: "center",
    fontFamily: "interBold",
  },
  waveContainer: {

    top: -50, // Ajusta a posição da onda
    left: 0,
    width: 600,
    height: 100,
  },
  // label: {
  //   color: "#ffffff",
  // },
  // button: {
  //   alignItems: "center",
  //   backgroundColor: "#DDDDDD",
  //   padding: 10,
  // },
});


{/* <SafeAreaView style={styles.content}>
            <Text style={styles.label}>Email</Text>
            <TextInput
                style={styles.input}
                onChangeText={setEmail}
                value={email}
                placeholder="Digite seu email"
                keyboardType="email-address"
            />
            <Text style={styles.label}>Senha</Text>
            <TextInput
                onChangeText={setPass}
                value={pass}
                placeholder="Digite sua senha"
                keyboardType="numeric"
                secureTextEntry
                style={styles.input}
            />
            </SafeAreaView>
    
            <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text>Entrar</Text>
            </TouchableOpacity>
    
            <View>
            <Link href={"/register"}>cadastrar novo user</Link>
            </View> */}

// .irregular-shape {
//     width: 200px;
//     height: 200px;
//     background-color: #905fd8;
//     border-radius: 50% 50% 20% 40%; /* Ajuste os valores para criar formas diferentes */
//     position: relative;
//   }

// .irregular-shape {
//     width: 200px;
//     height: 200px;
//     background-color: #905fd8;
//     clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%); /* Formato irregular */
//   }

// .irregular-shape {
//     width: 200px;
//     height: 200px;
//     background: linear-gradient(135deg, #905fd8, #daa3d1);
//     clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
//     box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
//   }

//             import React from 'react';
// import { View } from 'react-native';
// import Svg, { Path } from 'react-native-svg';

// export default function IrregularShape() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Svg height="200" width="200">
//         <Path
//           d="M50,0 C100,20 100,80 50,100 C0,80 0,20 50,0"
//           fill="#ffffff"
//         />
//       </Svg>
//     </View>
//   );
// }

