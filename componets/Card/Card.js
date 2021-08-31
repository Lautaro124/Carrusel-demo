import React from 'react'
import { View, Text, Image } from 'react-native';
import styles from '../Styles'

export default function Home (props){
    return(
        <View style= {styles.contenCard}>
            <Text style={styles.title} >{props.book}</Text>
            <Image resizeMode='cover' style={styles.img} source={{uri: props.images}}/>
        </View>
    )
}