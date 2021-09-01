import React, {Fragment} from 'react'
import {useState, useRef, useCallback, useEffect } from 'react';
import { FlatList, TouchableOpacity, View, Text } from 'react-native';
import data from '../../data/data'
import Card from '../Card/Card'
import styles from '../../style/Styles'


export default function Home (){
    const [index, setIndex] = useState(0)

    const flatListRef = useRef(null)

    function onCalculateCurrenPage (event)  {
        const { contentOffset } = event.nativeEvent;
        const viewSize = event.nativeEvent.layoutMeasurement;
        const pageNum = Math.floor(contentOffset.x / viewSize.width);
        setIndex(pageNum);
    }

    function changePage(index) {
        flatListRef?.current?.scrollToIndex({index});    
        setIndex(index);  
    }

    function prevCard() {
        const i = index === 0 ? 0 : index - 1;
        changePage(i);
    }
    
    
     function nextCard() {
        const i = index + 1
        changePage(i);  
    }
    function Title ({onPress, title}) {
        return (
            <TouchableOpacity style={styles.btsleft} onPress={onPress}>
                <Text style={styles.textHomeButton}> {title}</Text>
            </TouchableOpacity> 
        );
    }
    
    return(
        <View style={styles.home }>
           <FlatList
                data={data}
                style={styles.flatlsitHome}
                pagingEnabled={true}
                horizontal={true}
                ref={flatListRef} 
                onMomentumScrollEnd={onCalculateCurrenPage}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => {
                    return <Card data={item} />;
                }}
            />
            <View style={styles.flexHomeButtion}>   
                {
                    index > 0 &&
                        <Title onPress={prevCard} title={'<-- Last'} /> 
                }
                {
                    index !== data.length -1 &&
                        <Title onPress={nextCard} title={'next -->'} />
                }              
            </View>        
        </View>
    )
}
