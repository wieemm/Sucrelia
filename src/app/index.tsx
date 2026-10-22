
import { Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../assets/images/logo.1.png")}
          style={styles.logo}
          resizeMode="contain"
        />

        <View style={styles.texts}>
          <Text style={styles.title}>Sucrélia</Text>
          <Text style={styles.slogan}>DREAM IT, BAKE IT</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF8F0",
    paddingTop: 55,
    paddingHorizontal: 20,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
  },

  logo: {
    width: 100,
    height: 100,
  },

  texts: {
    marginLeft: 12,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#C78391",
  },

  slogan: {
    fontSize: 10,
    color: "#9B7777",
    letterSpacing: 1.5,
    marginTop: 5,
  },
});
