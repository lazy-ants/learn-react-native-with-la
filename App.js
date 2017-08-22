import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.content}>Hello, Lazy Ants!</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        color: '#3BB75E',
        fontSize: 30
    }
});
