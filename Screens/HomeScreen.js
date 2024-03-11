import React from 'react';
import {Image,StyleSheet, ImageBackground, Text, View} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import 'react-native-gesture-handler';

const Header: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Todos</Text>
      <Text style={styles.subTitle}>Welcome to my todo app</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  }
});

export default Header;


