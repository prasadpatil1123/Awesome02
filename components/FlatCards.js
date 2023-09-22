import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
// import Icon from 'react-native-vector-icons'

export default function FlatCards() {
    return (
        <View >
            <Text style={styles.headingText}>Flat Cards</Text>

            <View style={styles.container}>

                <View style={[styles.card, styles.cardOne]}>
                    <Image
                        source={require('../assets/grenade.png')}
                        style={{ width: 80, height: 100 }}
                    />
                </View>

                <View style={[styles.card, styles.cardTwo]}>
                    <Image
                        source={require('../assets/Straw.png')}
                        style={{ width: 95, height: 95 }}
                    />
                </View>

                <View style={[styles.card, styles.cardThree]}>
                    <Image
                        source={require('../assets/brook.png')}
                        style={{ width: 95, height: 95 }}
                    />
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 10
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 8,
    },
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        height: 200,
        borderRadius: 4,
        margin: 8
    },
    cardOne: {
        backgroundColor: '#EF5354'
    },
    cardTwo: {
        backgroundColor: '#5DA3FA'
    },
    cardThree: {
        backgroundColor: '#50DBB4'
    }

})