import { Link } from "expo-router";
import { View, Text} from "react-native";

export function register() {
    return(
        <>
        <Link href="/">voltar ao login</Link>

        <View>
            <Text>Cadastro de user</Text>
        </View>
        </>
    )
}