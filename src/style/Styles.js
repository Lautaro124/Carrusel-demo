import { StyleSheet, Dimensions} from 'react-native';
const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const styles = StyleSheet.create({
    flat: {
        flex:1
    },
    contenCard: {
        width: windowWidth,
        height: windowHeight,
        paddingTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red'
    },
    title: {
        fontSize:40,
        textAlign: 'center',
        marginBottom: 10,
    },
    img: {
        width: '80%',
        height: 500,
        paddingBottom: 200,
    },
    text: {
        fontSize: 20,
    },
    home: {
        width: '100%',
        height: '100%',
        backgroundColor: 'blue',
    },
    button: {
        width: 150,
        padding: 5,
        backgroundColor: 'grey',
    },
    bts:{
        alignItems: 'center',
        width: "90%",
        height: 80,
        backgroundColor: 'green'
    },
})

export default styles