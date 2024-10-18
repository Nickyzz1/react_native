import {
    View,
    Text,
    SafeAreaView,
    TextInput,
    StyleSheet,
    TouchableOpacity,
  } from "react-native";
  import { useState } from "react";
  import { Link, router } from "expo-router";
  
  export default function Login() {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
  
    const onPress = () => {
      router.push("../(tabs)");
    };
  
    console.log(email, pass);
    console.log(typeof email, typeof pass);
  
    return (
      <View style={styles.container}>

        <View style={styles.content}>

        <TextInput
            style={styles.input}
            onChangeText={setEmail}
            value={email}
            placeholder="Digite seu email"
            keyboardType="email-address"
        />

         <TextInput
            onChangeText={setPass}
            value={pass}
            placeholder="Digite sua senha"
            keyboardType="numeric"
            secureTextEntry
            style={styles.input}
        />

     

        </View>
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
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: "center",
        alignItems: "center",
      },
    content: {
        margin: 20,
        padding: 20,
        backgroundColor: "#252525",
        borderRadius: 10,
        minWidth: "auto",
        width: 350
      },
    input: {
      borderRadius: 7,
      padding: 10,
      margin: 5,
      backgroundColor: "#ffffff",
    },
    label: {
      color: "#ffffff",
    },
    button: {
      alignItems: "center",
      backgroundColor: "#DDDDDD",
      padding: 10,
    },
  });
  