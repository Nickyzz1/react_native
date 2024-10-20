// import { Link } from "expo-router";
// import { View, Text} from "react-native";

// export function register() {
//     return(
//         <>
//         <Link href="/">voltar ao login</Link>

//         <View>
//             <Text>Cadastro de user</Text>
//         </View>
//         </>
//     )
// }


import React, { useRef, useEffect } from 'react';
import { View, Animated, StyleSheet, Text } from 'react-native';
import Svg, { Path } from 'react-native-svg'; // Importa elementos SVG

export default function Login() {
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

    <View style={styles.container}>
      <Svg
      height="100%"
      width="100%"
      viewBox="0 0 500 200"
      style={{ transform: [{ rotate: '180deg' }]}}
        >
      <Path
        d="M0 100 Q 150 50, 300 100 T 800 100 V 300 H 0 Z"
        fill="#905fd8"
        stroke="none"
      />
        </Svg>
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#daa3d1',
    top: 0,
    position: "absolute",
    width:"100%",
  },
  boxContainer: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
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
});

  