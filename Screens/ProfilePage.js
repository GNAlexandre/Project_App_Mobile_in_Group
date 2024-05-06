import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { NavBar } from "../components/NavBar";
import AppTextInput from "../components/TextInput";
import AppButton from "../components/Button";
import { getLoggedUser, UpdateUserDataToFirebase } from "../components/Auth/AuthentificationTools";
import AvatarComponent from "../components/AvatarComponent";
import Background from "../components/Background";

const ProfilePage = () => {
    const [name, setName] = useState("");
    const [telephone, setTelephone] = useState("");
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        // Charger les données utilisateur au chargement de la page
        async function loadUserData() {
            const userData = await getLoggedUser();
            if (userData) {
                setUserData(userData);
                setName(userData.username);
                setTelephone(userData.telephone);
            }
        }

        loadUserData();
    }, []); // Le tableau vide en tant que second argument assure que ce code ne s'exécute qu'une seule fois après le montage initial

    const handleSave = async () => {
        console.log("Saving user data...");
        console.log("Name:", name);
        console.log("Telephone:", telephone);
        console.log("userData:", userData);
        await UpdateUserDataToFirebase(userData.id, name, telephone);
    };

    return (
        <>
            <NavBar />
            <Background>
                <AvatarComponent />
                <View style={styles.container}>
                    <ScrollView>
                        <AppTextInput
                            placeholder="Change Name"
                            icon="account"
                            onChangeText={(text) => setName(text)}
                            value={name}
                        />
                        <AppTextInput
                            placeholder="Change Number"
                            icon="phone"
                            onChangeText={(text) => setTelephone(text)}
                            value={telephone}
                        />
                    </ScrollView>
                    <AppButton title="Save" onPress={handleSave} />
                </View>
            </Background>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 20,
    },
});

export default ProfilePage;
