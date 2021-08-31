import React from 'react'
import {useState, useRef, useCallback, useEffect } from 'react';
import { FlatList, TouchableOpacity, View, Text, Dimensions} from 'react-native';
import data from '../../data/data'
import Card from '../Card/Card'
import styles from '../../style/Styles'

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

export default function Home (){
    const [index, setIndex] = useState(0)
    const indexRef = useRef(index)

    indexRef.current = index

    const onCalculateCurrenPage = (event) => {
        const { contentOffset } = event.nativeEvent;
        const viewSize = event.nativeEvent.layoutMeasurement;
        const pageNum = Math.floor(contentOffset.x / viewSize.width);

        setIndex(pageNum);
      };
      useEffect(() => {
        console.warn(index)
    }, [index])

    return(
        <View style={styles.home }>
           <FlatList
                data={data}
                style={styles.flat}
                pagingEnabled={true}
                horizontal={true}
                onScroll={onCalculateCurrenPage}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => {
                    return <Card data={item} />;
                }}
            /> 
        </View>
    )
}
