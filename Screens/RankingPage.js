import React from "react";
import {FlatList, Text, View, StyleSheet, StatusBar} from "react-native";
import {ListItem} from "../components/Ranklists";
import AppButton from "../components/Button";
import {NavBar} from "../components/NavBar";

import Background from "../components/Background";
import {TopNavBar} from "../components/TopNavBar";
import colors from "../config/colors";

function RankingPage({ navigation }) {
    return (
        <>
            <Background>
                <TopNavBar/>
                <Text style={styles.title}>Classement</Text>

                <View style={styles.container}>

                    <FlatList
                        data={[
                            { id: 1, title: 'Jean', subTitle: '1',score: 100, image: require('../assets/Tic_tac_toe.svg.png') },
                            { id: 2, title: 'Alex', subTitle: '2',score :30,  image: require('../assets/1200px-Puissance4_01.svg.png') },
                            { id: 3, title: 'Le Prof', subTitle: '3',score: 20, image: require('../assets/jeu-dechecs-en-marqueterie-reine_5000x.jpg') },
                        ]}
                        renderItem={({ item }) => <ListItem title={item.title} rank={item.subTitle} score={item.score} image={item.image} onPress={item.onPress} />}
                    />

                </View>

                <NavBar/>

            </Background>
        </>
    );
}


const styles = StyleSheet.create({
    container: {
        opacity:0.8,
    },

    title: {
        fontSize: 32,
        marginBottom: 20,
        color: colors.white,
        textAlign: "center",

    },
    input: {
        width: '80%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
});




export default RankingPage;