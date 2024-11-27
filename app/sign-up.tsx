import { theme } from "@/contants/theme";
import { Link, useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";
import { Button, TextInput } from "react-native-paper";

export default function SignUp() {
    const router = useRouter();

    const handleLogin = () => {
        router.push("/add-edit-text");
    }

    return (
        <View
            style={styles.container}
        >
            <View style={styles.form}>
                <TextInput label="E-mail" />
                <TextInput label="Senha" secureTextEntry />
                <TextInput label="Confirmar senha" secureTextEntry />
                <Button mode="contained">Cadastrar</Button>                
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 32,
        backgroundColor: theme.colors?.background
    },
    title: {
        textAlign: "center",
        marginBottom: 16
    },
    form: {
        rowGap: 12
    }
});
