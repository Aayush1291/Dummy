import { StyleSheet } from 'react-native';
import { white, shadowcolor, titletext, desctext, black } from '../../../utils/color';
import { responsiveWidth } from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between', // Arrange components with space between them
    },
    content: {
        flex: 1, // Take up remaining space
        padding: 16,
    },
    input: {
        width: responsiveWidth(90),
        height: 40,
        borderWidth: 1,
        borderColor: black,
        marginBottom: 15,
        paddingHorizontal: 10,
        borderRadius: 10,
    },
    multilineInput: {
        height: 120, // Adjust the height of the input
        textAlignVertical: 'top', // Place text at the top of the input area
        padding: 10, // Add padding for better readability
        borderWidth: 1, // Add borders to visualize the TextInput
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black overlay
        justifyContent: 'center',
        alignItems: 'center',
    },
    loaderContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: 'rgb(145,41,40)',
        paddingVertical: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 6,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default styles;
