import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Animated, { FadeInDown, FadeInRight, FadeInUp } from "react-native-reanimated";
import { StatusBar } from "expo-status-bar";

const Page = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <StatusBar style="light"/>
      <ImageBackground
        source={require("@/assets/images/bk.jpg")}
        style={{ flex: 1 }}
        resizeMode="cover"
      >
        <View style={styles.logoContainer}>
          <Animated.Text style={styles.logo} entering={FadeInUp.delay(1000).duration(500)}>INFO PULSE</Animated.Text>
        </View>
        <View style={styles.wrapper}>
          <Animated.Text style={styles.title} entering={FadeInRight.delay(300).duration(500)}>Restez informé !</Animated.Text>

          <Animated.Text style={styles.description} entering={FadeInRight.delay(700).duration(500)}>Recevez les dernières nouvelles et des mises à jour personnalisées directement dans votre fil d'actualités.</Animated.Text>

          <Animated.View entering={FadeInDown.delay(1200).duration(500)}>
          <TouchableOpacity style={styles.btn} onPress={() => router.replace("/(tabs)")}>
            <Text style={styles.btnText}>Démarrer</Text>
          </TouchableOpacity>
          </Animated.View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoContainer: {
    position: 'absolute',
    top: 30, 
    width: '100%',
    alignItems: 'center',
    marginTop: 50
  },
  logo: {
    color: Colors.white,
    fontSize: 30,
    fontWeight: 'bold',
    letterSpacing: 2,
    textAlign: 'center',
  },
  wrapper: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 50,
    paddingHorizontal: 30,
    gap: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  title: {
    color: Colors.white,
    fontSize: 24,
    fontWeight: '600',
    letterSpacing: 1.5,
    lineHeight: 36,
    textAlign: 'center'
  },
  description: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '500',
    letterSpacing: 1.2,
    lineHeight: 22,
    textAlign: 'center'
  },
  btn: {
    backgroundColor: Colors.white,
    paddingVertical: 15,
    marginVertical: 20,
    alignItems: 'center',
    borderRadius: 10
  },
  btnText: {
    color: Colors.black,
    fontSize: 16,
    fontWeight: '700'
  }
});
