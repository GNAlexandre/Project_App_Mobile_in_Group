import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Game from '../components/GameScreen/Game';
import Result from '../components/GameScreen/Result';
import AppButton from "../components/Button";

class GamePage extends Component {
    constructor(props) {
        super(props);


        this.state = {
            result: null,
        };
    }

    handleGameFinish = result => {
        this.setState({ result });
    };

    handleGameRestart = () => {
        //this.setState({ result: null });
        console.log(this.state.result);

        const { navigation } = this.props;
        navigation.navigate({ routeName: 'Game' });
    };




    render() {
        return (
            <View style={styles.container}>
                <View pointerEvents={this.state.result ? 'none' : 'auto'}>
                    <Game onFinish={this.handleGameFinish} />
                </View>
                {this.state.result && (
                    <Result>
                        result={this.state.result}
                        <AppButton title="Restart Game" onPress={this.handleGameRestart}/>
                        onRestartGameBtnClick={this.handleGameRestart}
                    </Result>



                )}
            </View>
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

export default GamePage;