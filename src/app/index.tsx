import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Index() {
  return (
    <ImageBackground
      source={require("../../assets/images/page1.png")}
      style={styles.container}
      resizeMode="cover"
    >
      {/* Conteneur principal */}
      <View style={styles.content}>
        
        {/* En-tête centré (en haut) */}
        <View style={styles.header}>
          
          {/* Espace réservé (vide) à la place du logo */}
          <View style={styles.logoSpace} />

          {/* Nom : Sucrélia */}
          <Text style={styles.title}>Sucrélia</Text>

          {/* Slogan : DREAM IT, BAKE IT */}
          <Text style={styles.slogan}>DREAM IT, BAKE IT</Text>
          
        </View>

        {/* Bouton Découvrir (en bas) */}
        <TouchableOpacity style={styles.button} activeOpacity={0.8}>
          <Text style={styles.buttonText}>Découvrir</Text>
        </TouchableOpacity>

      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    flex: 1,
    // Pousse l'en-tête en haut et le bouton en bas
    justifyContent: "space-between", 
    alignItems: "center",
    paddingTop: 90,
    paddingBottom: 60, // Espace en bas pour ne pas coller le bouton au bord
    paddingHorizontal: 20,
  },

  header: {
    alignItems: "center",
  },

  // Espace vide à la place du logo
  logoSpace: {
    width: 60,
    height: 60,
    marginBottom: 20,
  },

  title: {
    fontSize: 42,
    color: "#FFFFFF",
    fontFamily: "serif",
    fontStyle: "italic",
    marginBottom: 15,
    textShadowColor: "rgba(0, 0, 0, 0.35)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },

  slogan: {
    fontSize: 12,
    color: "#FFFFFF",
    letterSpacing: 4,
    fontWeight: "600",
    textShadowColor: "rgba(0, 0, 0, 0.35)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },

  // Style du bouton
  button: {
    backgroundColor: "#A65C68", // Couleur bordeaux/rose de votre image
    paddingVertical: 15,
    paddingHorizontal: 60, // Largeur du bouton
    borderRadius: 30, // Coins très arrondis
    shadowColor: "#000", // Petite ombre pour le bouton
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 1,
  },
});