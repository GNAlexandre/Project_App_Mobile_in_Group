import React, { useState } from 'react';
import { View, Image, Button, StyleSheet, TouchableOpacity, Platform, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const AvatarComponent = () => {
    const [avatarUri, setAvatarUri] = useState(null);


    const selectImage = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
            alert("Permission d'accès à la galerie refusée");
            return;
        }

        let pickerResult = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });
        console.log(pickerResult);

        if (pickerResult.canceled) {
            alert("Sélection d'image annulée");
            return;
        }

        if (!pickerResult.uri) {
            alert("URI de l'image sélectionnée non valide");
            return;
        }

        setAvatarUri(pickerResult.uri);
    };

    return (
        <View style={styles.container}>
            {avatarUri ? (
                <Image source={{ uri: avatarUri }} style={styles.avatar} />
            ) : (
                <Image source={require("../assets/default-avatar-1000.jpg")} style={styles.avatar} />
            )}
            <TouchableOpacity style={styles.button} onPress={selectImage}>
                <Text style={styles.buttonText}>Choisir une image</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 20,
    },
    button: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default AvatarComponent;
