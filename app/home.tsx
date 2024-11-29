import { Loader } from "@/components/Loader";
import { MemoryCard } from "@/components/MemoryCard";
import { useUser } from "@/hooks/useUser";
import { useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";
import { FAB } from "react-native-paper";

export default function Home() {
  const router = useRouter();
  const user = useUser();

  if (!user) {
    return <Loader />
  }

  return (
    <View
      style={styles.container}
    >
      <MemoryCard
        memory={{
          id: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
          title: "Testa",
          image: "https://cataas.com/cat",
          content: "Conteúdo",
          userId:"asdasdasd-asdas"
        }}
      />
      <FAB
        icon="plus"
        style={styles.fab}
        onPress={() => router.push("/add-edit-text")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
  },
  fab: {
    position: "absolute",
    right: 0,
    bottom: 0,
    margin: 16,
    zIndex: 1,
  },
});

