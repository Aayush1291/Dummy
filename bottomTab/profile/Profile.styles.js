import { StyleSheet } from 'react-native'
import * as COLORS from '../../utils/color'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },

    anotherCard: {
        alignItems: 'center',
        backgroundColor: COLORS.white,
        marginTop: 1,
        width: responsiveWidth(90),
        padding: 1,
        borderRadius: 10
    },
    icon: {
        width: 60,
        height: 60,
        borderRadius: 30,
        alignSelf: 'center'
    },

    image: {
        width: '100%',
        height: '100%',
    },

    main: {
        flex: 1,
        paddingHorizontal: 5
    },

    oneFourth: {
        flex: 1,
        marginTop: 10,
        backgroundColor: COLORS.white
    },

    threeFourth: {
        backgroundColor: COLORS.white,
        flex: 3,
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    title: {
        fontSize: 20,
        color: COLORS.black,
        marginLeft: 20
    },

    card: {
        backgroundColor: COLORS.white,
        borderRadius: 10,
        padding: 10,
        marginTop: 16,
        width: responsiveWidth(90),
        height: responsiveHeight(35)
    },

    heading: {
        color: COLORS.black,
        fontSize: 25
    },

    bottomText: {
        color: COLORS.black,
        fontSize: 15,
        marginTop: 5
    },

    line: {
        borderBottomColor: COLORS.black,
        borderBottomWidth: 1,
        marginBottom: 5
    },

    button: {
        backgroundColor: COLORS.lightMaroon,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginBottom: 10,
        elevation: 10,
        marginTop: 20,
        width: responsiveWidth(60),
        alignSelf: 'center'
    },
    buttonText: {
        color: COLORS.white,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    },

    modalContainer: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 40,
        backgroundColor: COLORS.white,
    },

    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: COLORS.black
    },

    label: {
        color: COLORS.maroon,
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10
    },

    inputContainer: {
        marginLeft: 10,
        marginVertical: 10
    },

    input: {
        width: responsiveWidth(90),
        height: 40,
        borderWidth: 1,
        borderColor: '#000',
        marginBottom: 15,
        paddingHorizontal: 10,
        borderRadius: 10,
    },

    imageContainer: {
        height: 200,
        width: '100%',
        overflow: 'hidden',
        borderBottomLeftRadius: 70,
        borderBottomRightRadius: 70,
    },

    iconContainer: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: COLORS.lightgray,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10
    }

})

export default styles;