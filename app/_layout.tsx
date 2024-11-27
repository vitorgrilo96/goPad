import { theme } from "@/contants/theme";
import { Stack } from "expo-router";
import { PaperProvider } from "react-native-paper";

export default function RootLayout() {
  return (
  <PaperProvider theme={theme}>
    <Stack screenOptions={{headerTitleAlign: "center"}}>
      <Stack.Screen 
        name="index"
        options={{
          headerShown: false,
          title: "página de Login",
          headerStyle: {
            backgroundColor: "#000"
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen name="home" />
      <Stack.Screen name="add-edit-text" />
      <Stack.Screen name="sign-up" />
    </Stack>;
  </PaperProvider>
  );
}
