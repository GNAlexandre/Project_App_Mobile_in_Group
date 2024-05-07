import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from "../config/colors";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const TopNavBar = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.navBar}>
            <TouchableOpacity style={styles.navItemLeft} onPress={() => navigation.navigate("ProfilePage")}>
                <View style={[styles.iconContainer, { backgroundColor: colors.white }]}>
                    <FontAwesome6 name="user-tie" size={24} color="black" />
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.navItemRight} onPress={() => navigation.navigate("Landing")}>
                <View style={[styles.iconContainer, { backgroundColor: colors.primary }]}>
                    <MaterialCommunityIcons name="logout" size={24} color="white" />
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    navBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 60,
        borderRadius: 30,
        opacity: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        paddingHorizontal: 20, // Ajout de marges horizontales pour un meilleur espacement
    },
    navItemLeft: {
        alignItems: 'flex-start', // Aligner le contenu à gauche
    },
    navItemRight: {
        alignItems: 'flex-end', // Aligner le contenu à droite
    },
    iconContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    navText: {
        color: colors.white,
        fontSize: 16,
    },
});

export {TopNavBar};
