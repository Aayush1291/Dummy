import { StyleSheet } from 'react-native';
import { gray } from '../utils/color';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
    },
    header: {
        height: 50,
        backgroundColor: '#128C7E',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',

    },
    headerText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    logoutButton: {
        padding: 8,
    },
    logoutButtonText: {
        color: '#fff',
        fontSize: 16,
    },
    date: {
        textAlign: 'center',
        marginTop: 8,
        marginBottom: 8,
        color: '#888',
    },
    messageContainer: {
        padding: 10,
        marginBottom: 10,
        borderRadius: 8,
        maxWidth: '75%',
        alignSelf: 'flex-start',
        backgroundColor: '#fff',
    },
    userMessageContainer: {
        alignSelf: 'flex-end',
        backgroundColor: '#dcf8c6',
    },
    otherMessageContainer: {
        alignSelf: 'flex-start',
        backgroundColor: '#fff',
    },
    userMessageText: {
        fontSize: 16,
        color: '#000',
    },
    otherMessageText: {
        fontSize: 16,
        color: '#000',
    },
    userMessageTimestamp: {
        fontSize: 12,
        color: '#888',
        marginTop: 4,
    },
    otherMessageTimestamp: {
        fontSize: 12,
        color: '#888',
        marginTop: 4,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        backgroundColor: '#fff',
    },
    input: {
        flex: 1,
        height: 40,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 20,
        paddingHorizontal: 16,
        marginRight: 8,
        fontSize: 16,
        color: '#000',
    },
    sendButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#128C7E',
        borderRadius: 20,
        paddingHorizontal: 16,
        height: 40,
    },
    sendButtonText: {
        color: '#fff',
        fontSize: 16,
    },
    usernameText: {
        color: gray,
    }

});

export default styles;
