import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    heading: {
        fontSize: 25,
        padding: 10,
        color: 'black',
        fontWeight: 'bold',
    },

    card: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
    },

    title: {
        padding: 10,
        color: '#B02A30',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 30,
        marginBottom: 10
    },

    text: {
        padding: 10,
        fontSize: 16,
        color: '#E7B909',
    },

    image: {
        height: 30,
        width: 30,
        padding: 10,
        marginRight: 15,
    }
})

export default styles;