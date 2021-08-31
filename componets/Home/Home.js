import React from 'react'
import {useState, useRef, useEffect} from 'react';
import { FlatList, TouchableOpacity, View, Text} from 'react-native';
import data from '../../data/data'
import Card from '../Card/Card'
import styles from '../Styles'

export default function Home (){

    const [page, setPage] = useState(0);
    const ref = useRef()
    const obj = {book: '', images: '', id: '',}
    const [currentCards, setCurrentCards] = useState([obj,data[0],data[1]]);

    useEffect( () => {
        ref.current.scrollToIndex({index: page});      
    },[page])
    
    async function lastPage() {
        setPage(page - 1); 
 
        await ref.current.scrollToIndex({animated: true, index: page});    
        setCurrentCards(
            page === 1 ? 
            [obj,data[0],data[1]] : 
            [data[ page - 2 ],data[ page - 1 ],data[ page ]]
        );
    }

    async function nextPage() {
        setPage(page + 1);     
        await ref.current.scrollToIndex({index: page});  
        console.log(page);   
        setCurrentCards(
            page === data.length - 1 ?
            [obj,data[ page ], data[ page ]] :
            [data[ page ],data[ page + 1],data[ page + 2]]
        );
    }

    return(
        <View>
            <FlatList 
                contentContainerStyle={{
                    alignItems: 'center', 
                    justifyContent: 'center',
                    width: '100%', 
                    height: 400, 
                }}
                scrollEnabled={false}
                horizontal={true}
                data={currentCards}
                ref={ref}
                renderItem={({item}) => {
                    return(
                        <Card keys={item.id} book={item.book}
                        images={item.images}/> 
                    )
                }}
                extraData={page}
            />
            <View style={styles.bts}>
                {
                    page !== 0 ?
                        <TouchableOpacity style={styles.button} onPress={lastPage}>
                            <Text style={styles.text} >Last..</Text>
                        </TouchableOpacity> :
                        null
                }
                {
                    page !== data.length - 2 ? 
                        <TouchableOpacity style={styles.button} onPress={nextPage}>
                            <Text style={styles.text} >Next..</Text>
                        </TouchableOpacity> :
                        null
                }
            </View>
            
            
        </View>
    )
}