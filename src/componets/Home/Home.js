import React from 'react'
import {useState, useRef, useCallback, useEffect } from 'react';
import { FlatList, TouchableOpacity, View, Text } from 'react-native';
import data from '../../data/data'
import Card from '../Card/Card'
import styles from '../../style/Styles'


export default function Home (){
    const [index, setIndex] = useState(0)
    const [dataShow, setDataShow]= useState(index)

    const indexRef = useRef(index)

    const onCalculateCurrenPage = (event) => {
        const { contentOffset } = event.nativeEvent;
        const viewSize = event.nativeEvent.layoutMeasurement;
        const pageNum = Math.floor(contentOffset.x / viewSize.width);

        setIndex(pageNum);
      };
    
     function prevCard() {
        setIndex(index === 0 ? 0 : index - 1);    
         indexRef.current.scrollToIndex({index: index});    
        setDataShow(index === 1 ? [data[0]] : [data[index-1]]);
    }
      
     function nextCard() {
        setIndex(index === data.length - 1 ? 0 : index + 1);    
        indexRef.current.scrollToIndex({index: index});    
        setDataShow(index === data.length - 2 ? [data[index]] : [data[index+1]]);
    }

    return(
        <View style={styles.home }>
           <FlatList
                data={data}
                style={styles.flat}
                pagingEnabled={true}
                horizontal={true}
                ref={indexRef}
                extraData= {dataShow}
                onScroll={onCalculateCurrenPage}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => {
                    return <Card data={item} />;
                }}
            />
            <TouchableOpacity onPress={prevCard}>
                <Text>Last</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={nextCard}>
                <Text>Next</Text>
            </TouchableOpacity>
        </View>
    )
}
