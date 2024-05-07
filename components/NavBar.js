import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from "../config/colors";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const NavBar = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.navBar}>
            <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate("ProfilePage")}>
                <Text style={styles.navText} numberOfLines={1}>
                    Profil
                </Text>
                <Text style={styles.navText} numberOfLines={2}>
                    <Text style={styles.navText}>
                        <FontAwesome6 name="user-tie" size={24} color="white" />
                    </Text>
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate("GameSelection")}>
                <Text style={styles.navText} numberOfLines={1}>
                    Accueil
                </Text>
                <Text style={styles.navText} numberOfLines={2}>
                    <Text style={styles.navText}>
                        <Entypo name="home" size={24} color="white" />
                    </Text>
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate("RankingPage")}>
                <Text style={styles.navText} numberOfLines={1}>
                    Classement
                </Text>
                <Text style={styles.navText} numberOfLines={2}>
                    <Text style={styles.navText}><FontAwesome6 name="ranking-star" size={24} color="white" />

                    </Text>
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    navBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: colors.primary,
        height: 60,
        borderRadius: 30,
        opacity: 0.98,
        position: 'absolute',
        bottom: 30,
        left: 0,
        right: 0,
    },
    navItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    navText: {
        color: colors.white,
        fontSize: 16,
    },
});

export {NavBar};
