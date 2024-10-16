// import {Text, ImageSourcePropType, Image, View, StyleSheet} from "react-native";

import { Text } from "react-native";
import { ImageSourcePropType} from "react-native";
import { Image } from "react-native";
import { View } from "react-native";
import { StyleSheet } from "react-native";

const Header = ({image} : {image: ImageSourcePropType | undefined}) =>
    {
    return(
        <>
            <View style = {styles.bg}>

                <Text style = {styles.txt} >Header exemplo</Text>
                <Image source={image}/>

            </View>
        </>
    )
}

const styles = StyleSheet.create({
    bg : {
        backgroundColor: "#252525",
        justifyContent: "center",
        alignItems : "center",
        display: "flex",
        // paddingHorizontable: 10,
        paddingVertical: 10,
    },
    txt: {
        color: "#E77E7EFF",
        fontWeight: "900",
        fontSize: 20
    }
})

export default Header;