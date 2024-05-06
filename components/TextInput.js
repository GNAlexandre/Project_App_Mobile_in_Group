import React, { useRef } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/styles";

function AppTextInput({ icon, width = "100%", ...otherProps }) {
  const textInputRef = useRef(null);

  const handlePress = () => {
    textInputRef.current.focus();
  };

  return (
      <View style={[styles.container, { width }]} onPress={handlePress}>
        {icon && (
            <MaterialCommunityIcons
                name={icon}
                size={20}
                color={defaultStyles.colors.medium}
                style={styles.icon}
            />
        )}
        <TextInput
            ref={textInputRef}
            placeholderTextColor={defaultStyles.colors.medium}
            style={[defaultStyles.text, styles.textInput]}
            {...otherProps}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  textInput: {
    flex: 1,
  },
});

export default AppTextInput;
