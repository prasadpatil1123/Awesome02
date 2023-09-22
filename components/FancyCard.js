import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
    return (
        <View>
            <Text style={styles.headingText}>Trending Place</Text>

            <View style={[styles.card, styles.cardElevated]}>
                {/* <Image 
        source={{
            uri:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQQZA8s3i80S9sJnQwPMBucnYOuPjOsPWuuWKP272agfS60vRU_0o1Vzv_6W03OySwua1OyWOjO2wlK9hVL2lzOgQ'
            // uri: 'https://www.imdb.com/title/tt0388629/mediaviewer/rm1704089857/'
        }}
        style={styles.cardImage}
        /> */}
                <Image
                    source={require('../assets/asce.jpg')}
                    style={styles.cardImage}
                />
                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>Fire Fist Ace</Text>
                    <Text style={styles.cardLabel}> Pirate Revolutionary</Text>
                    <Text style={styles.cardDes}>
                        Portgas D. Ace, known as "Fire Fist Ace," was the adopted older brother of Monkey D. Luffy in the One Piece world. He possessed the power of the Mera Mera no Mi, a Logia-type Devil Fruit, allowing him to control and become fire. Ace was a fiercely loyal and powerful pirate who sought to make his mark on the world.
                    </Text>
                    <Text style={styles.cardFooter}>"Fire Fist" Ace left an indelible legacy in the world of One Piece.</Text>

                </View>

            </View>

            <View style={[styles.card, styles.cardElevated]}>
                <Image
                    source={require('../assets/ZoroOne.jpg')}
                    style={styles.cardImage}
                />
                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>Roronoa Zoro - Pirate Swordsman</Text>
                    <Text style={styles.cardLabel}> Straw Hat Pirates' Swordsman</Text>
                    <Text style={styles.cardDes}>
                        Roronoa Zoro, also known as "Pirate Hunter Zoro," is the formidable swordsman of the Straw Hat Pirates in the One Piece anime. With his unique three-sword style, he aspires to become the world's greatest swordsman, carrying the dreams of his fallen childhood friend.
                    </Text>
                    <Text style={styles.cardFooter}>a beloved and iconic character in the world of One Piece.</Text>

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
        backgroundColor: '#FFFFFF',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1
        }
    },
    cardImage: {
        height: 200,
        width: 380,
        marginBottom: 8,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6
    },
    cardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12
    },
    cardTitle: {
        color: '#000000',
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    cardLabel: {
        color: '#000000',
        fontSize: 14,
        marginBottom: 4,
    },
    cardDes: {
        color: '#242B2E',
        fontSize: 12,
        marginTop: 6,
        marginBottom: 4,
        flexShrink: 1
    },
    cardFooter: {
        color: '#000000',
    },
})