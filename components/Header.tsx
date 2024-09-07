import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "react-native/Libraries/NewAppScreen";

type Props = {};

const Header = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        <Image
          source={{
            uri: "https://static.vecteezy.com/system/resources/previews/000/546/121/original/businessman-in-suit-head-vector-icon.jpg",
          }}
          style={styles.userImg}
        />
        <View style={{gap: 3}}>
          <Text style={styles.welcomeTxt}>Bienvenue!</Text>
          <Text style={styles.userName}>Christ Kouassi!</Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => {}}></TouchableOpacity>
      <Ionicons name="notifications-outline" size={24} color={Colors.black} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  userImg: {
    width: 50,
    height: 50,
    borderRadius: 30,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center', 
    gap: 10,
  },
  welcomeTxt: {
    fontSize: 12,
    color: Colors.darkGrey
  },
  userName: {
    fontSize: 14, 
    fontWeight: '700',
    color: Colors.black
  }
});
