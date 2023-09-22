import {
    StyleSheet,
    Text,
    View, Linking,
    Image,
    TouchableOpacity,
} from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink){
        Linking.openURL(websiteLink)
    }
    return (
        <View>
            <Text style={styles.headingText}>Blog Card</Text>
            <View style={[styles.card, styles.cardElevated]}>
                <View style={styles.headingContainer}>
                    <Text style={styles.headerText}>
                        What's new in JavaScript 21 - ES12
                    </Text>
                </View>
                <Image
                    source={{
                        uri: 'https://www.geekboots.com/_next/image?url=https%3A%2F%2Fcdn.geekboots.com%2Fgeek%2Fjavascript-hero-1652702096795.webp&w=1080&q=75',
                    }}
                    style={styles.cardImage}
                />
                <View style={styles.bodyContainer}>
                    <Text numberOfLines={3} style={styles.cardDes}>
                        Just like every year, Javascript brings in new features. This year
                        javascript is bringing 4 new features, which are almost in
                        production rollout. I won't be wasting much more time and directly
                        jump to code with easy to understand examples.
                    </Text>
                </View>
                <View style={styles.footerContainer}>
                        <TouchableOpacity
                        onPress={()=>openWebsite('https://blog.learncodeonline.in/whats-new-in-javascript-21-es12')}
                        >
                            <Text style={styles.socialLinks}>
                                Read more
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                        onPress={()=>openWebsite('https://www.instagram.com/hiteshchoudharyofficial/')}
                        >
                            <Text style={styles.socialLinks}>
                                Follow me
                            </Text>
                        </TouchableOpacity>

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
    card: {
        width: 'auto',
        height: 'auto',
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16
    },
    cardElevated: {
        backgroundColor: '#6AC47E',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor: '#333',
        shadowOpacity: 0.4,
    },
    headingContainer: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        color: '#242B2E',
        fontSize: 16,
        fontWeight: '600',
    },
    cardImage: {
        height: 190
    },
    bodyContainer: {
        padding:10
    },
    cardDes: {
        color: '#242B2E',
        fontSize: 12,
        marginTop: 6,
        marginBottom: 4,
        flexShrink: 1
    },
    footerContainer:{
        padding:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly',
    },
    socialLinks:{
        fontSize:16,
        color:'#000000',
        backgroundColor:'#FFF',
        paddingHorizontal:20,
        paddingVertical:6,
        borderRadius:6,
    },


})