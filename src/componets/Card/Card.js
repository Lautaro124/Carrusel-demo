import React from 'react'
import { View, Text, Image} from 'react-native';
import styles from '../../style/Styles'


export default function Home (props){
    return(
        <View style= {styles.contenCard}>
            <Text style={styles.title} >{props.data.book}</Text>
            <Image resizeMode="cover" style={styles.img} source={{uri: props.data.images}}/>
        </View>
    )
}