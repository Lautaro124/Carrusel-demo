import { StyleSheet, Dimensions} from 'react-native';
const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const styles = StyleSheet.create({
    flatlsitHome: {
        flex:1
    },
    contenCard: {
        width: windowWidth,
        height: windowHeight * 0.9,
        paddingTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardTitle: {
        fontSize:50,
        textAlign: 'center',
        marginBottom: 10,
        color: '#202731',
        fontWeight: 'bold',
    },
    cardImg: {
        width: '80%',
        height: 500,
        paddingBottom: 200,
        borderRadius: 20,
    },
    textHomeButton: {
        fontSize: 24,
        color: '#9ACFDD',
        fontWeight: 'bold',
    },
    home: {
        width: windowWidth,
        height: windowHeight,
        backgroundColor: '#9ACFDD',
    },
    btsrigth: {
        marginLeft: 30,
        marginTop: 10,
        width: windowWidth * 0.3,
        alignItems: 'center',
        backgroundColor: '#202731',
        borderRadius: 4,
    
    },
    btsleft:{
        marginRight: 30,
        marginTop: 10,
        width: windowWidth * 0.3,
        alignItems: 'center',
        backgroundColor: '#202731',
        borderRadius: 4,
    },
    flexHomeButtion: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "row",
        flexWrap: "wrap",
        marginBottom: 15
    },
})

export default styles