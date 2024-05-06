import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler';

import Text from "../Text";
import colors from "../../config/colors";
import AppButton from "../Button";

function ListItem({
  title,
  rank,
  image,
  score,
  IconComponent,
  onPress,
}) {
  return (
    <View style={styles.container}>

      {IconComponent}
      {image && <Image style={styles.image} source={image} />}
      <View style={styles.detailsContainer}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        {rank && (
          <Text style={styles.subTitle} numberOfLines={2}>
            {rank}
          </Text>
        )}

      </View>
      <View>
        <Text style={styles.title}> {score} points</Text>
      </View>

    </View>
  );
}


  const styles = StyleSheet.create({
    container: {
      alignItems: "center",
      flexDirection: "row",
      padding: 15,
      marginVertical: 5,
      margin: 5,
      width: "95%",
      backgroundColor: colors.light,
      borderRadius: 25,
    },
    detailsContainer: {
      flex: 1,
      marginLeft: 10,
      justifyContent: "center",
    },
    image: {
      width: 40,
      height: 40,
      borderRadius: 35,
    },
    subTitle: {
      color: colors.medium,
    },
    title: {
      fontWeight: "500",
    },
  });

export default ListItem;
