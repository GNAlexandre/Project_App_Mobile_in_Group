import React from "react";
import {FlatList, Text, View, StyleSheet} from "react-native";
import {ListItem} from "../components/lists";


const GameSelectionPage = (navigation) => {
  return (
    <View style={ styles.container }>
      <Text>Game Selection Page</Text>
        <FlatList
            data={[
                {id: 1, title: 'Tic Tac Toe',subTitle: '1 Joueur', image: require('../assets/Tic_tac_toe.svg.png')},
                {id: 2, title: 'Puissance 4',subTitle: '1 Joueur', image: require('../assets/1200px-Puissance4_01.svg.png')},
                {id: 3, title: 'Les Echecs',subTitle: '2 Joueur', image: require('../assets/jeu-dechecs-en-marqueterie-reine_5000x.jpg')},

            ]}
            renderItem={({item}) => <ListItem title={item.title} subTitle={item.subTitle} image={item.image} />}

        />


    </View>
  );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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




export default GameSelectionPage;