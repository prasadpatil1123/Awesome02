import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View >
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal={true} style={styles.container}>

        <View style={[styles.card,styles.cardElevated]}>
            <Text style={styles.text}>
                I'M
            </Text>
        </View>

        <View style={[styles.card,styles.cardElevated]}>
        <Text style={styles.text}>
                Gonna 
            </Text>
        </View>

        <View style={[styles.card,styles.cardElevated]}>
        <Text style={styles.text}>
                Be
            </Text>
        </View>

        <View style={[styles.card,styles.cardElevated]}>
        <Text style={styles.text}>
                King
            </Text>
        </View>

        <View style={[styles.card,styles.cardElevated]}>
        <Text style={styles.text}>
                of
            </Text>
        </View>

        <View style={[styles.card,styles.cardElevated]}>
        <Text style={styles.text}>
                The
            </Text>
        </View>

        <View style={[styles.card,styles.cardElevated]}>
        <Text style={styles.text}>
                Pirates
            </Text>
        </View>

      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 10
    },
    container:{
        padding:10
    },
    text:{
        color:'black',
        fontWeight:'bold',
    },
    card:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        width:100,
        height:100,
        borderRadius:4,
        margin:8,
        color:'#FFFFFF'
    },
    cardElevated:{
        backgroundColor:'#CAD5E2',
        elevation:4,
        shadowOffset:{
            width:1,
            height:1
        },
        shadowColor:'#333',
        shadowOpacity:0.4,
        shadowRadius:2
    }
})