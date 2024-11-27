import { theme } from "@/contants/theme";
import { Link, useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";
import { Button, TextInput, Text } from "react-native-paper";

export default function Index() {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/add-edit-text");
  }

  return (
    <View
      style={styles.container}
    >
      <View style={styles.form}>
        <Text variant={"titleLarge"}>goPad</Text>
        <TextInput label="E-mail" />
        <TextInput label="Senha" secureTextEntry />
        <Button mode="contained">Fazer Login</Button>
        <Link href="/sign-up" asChild>
          <Button>Registrar-se</Button>
        </Link>
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
