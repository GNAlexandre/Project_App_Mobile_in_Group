import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Game from '../components/GameScreen/Game';
import Result from '../components/GameScreen/Result';
import AppButton from "../components/Button";
import {NavBar} from "../components/NavBar";
import Background from "../components/Background";

class TicTacToeGamePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            result: null,
            gameKey: 1,
        };
    }

    handleGameFinish = result => {
        this.setState({ result });
    };

    handleGameRestart = () => {
        console.log("you did it")
        this.setState({ result: null,
            gameKey: this.state.gameKey + 1,
        });
        console.log(this.state.result);
        this// Incrémentation de la clé

        const { navigation } = this.props;
        navigation.navigate('Game');
    };

    render() {
        return (
            <>
                <NavBar/>
                <Background>
                    <View style={styles.container}>
                        <View pointerEvents={this.state.result ? 'none' : 'auto'}>
                            <Game key={this.state.gameKey} onFinish={this.handleGameFinish} />
                        </View>
                        {this.state.result && (
                            <Result
                                result={this.state.result}
                                onRestartGameBtnClick={this.handleGameRestart}
                            />
                        )}
                    </View>
                </Background>
            </>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default TicTacToeGamePage;
