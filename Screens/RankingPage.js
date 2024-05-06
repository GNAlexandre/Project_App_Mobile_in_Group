import React from "react";
import {FlatList, Text, View, StyleSheet, StatusBar} from "react-native";
import {ListItem} from "../components/Ranklists";
import AppButton from "../components/Button";



function RankingPage({ navigation }) {
    return (
        <View style={styles.container}>
            <StatusBar translucent={true} backgroundColor="transparent" barStyle="light-content" />

            <Text style={styles.title}>Ranking Page</Text>
            <FlatList
                data={[
                    { id: 1, title: 'Jean', subTitle: '1',score: 100, image: require('../assets/Tic_tac_toe.svg.png') },
                    { id: 2, title: 'Alex', subTitle: '2',score :30,  image: require('../assets/1200px-Puissance4_01.svg.png') },
                    { id: 3, title: 'Le Prof', subTitle: '3',score: 20, image: require('../assets/jeu-dechecs-en-marqueterie-reine_5000x.jpg') },
                ]}
                renderItem={({ item }) => <ListItem title={item.title} rank={item.subTitle} score={item.score} image={item.image} onPress={item.onPress} />}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor:'white',

    },
    title: {
        fontSize: 24,
        marginBottom: 20,
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