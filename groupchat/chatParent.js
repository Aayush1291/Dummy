import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TextInput, Button, Text, Alert, TouchableOpacity, FlatList } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { useAppSelector } from '../store/hooks';
import styles from './Chat.styles';


const ParentChat = ({ navigation }) => {
    const [messages, setMessages] = useState([]);
    const [text, setText] = useState('');
    const user1 = useAppSelector(state => state.profile.data);
    const u1 = user1.email;
    const uname = user1.name;

    useEffect(() => {
        groupChat();
    }, []);

    
    useEffect(() => {
        fetchclass();
    }, []);

    const fetchclass = async () => {
        try {
            const studentQuery = await firestore()
                .collection('Users')
                .where('email', '==', user1.ward)
                .get();
            const student = studentQuery.docs[0].data().class;
            setClass(student);
            console.log("He bagh class==>",student)
        } catch (error) {
            console.error('Error retrieving student data:', error);
        }
    };

    const groupChat = async () => {
        const collectionRef = firestore().collection(`Parent${user1.class}`);
        const querySnapshot = await collectionRef.orderBy('createdAt', 'asc').get();
        const fetchedMessages = querySnapshot.docs.map((doc) => doc.data());
        setMessages(fetchedMessages);
    };

    const sendMessage = async () => {
        const currentTime = firestore.Timestamp.now();
        const user = u1;
        const message = text.trim();
        const name = uname;

        if (message === '') {
            return;
        }

        try {
            await firestore().collection(user1.class).add({
                name: name,
                email: user,
                text: message,
                createdAt: currentTime,
            });
            setText('');
            groupChat();
        } catch (error) {
            console.log('Error sending message:', error);
        }
    };

    const renderMessage = ({ item }) => {
        const isUser = item.email === u1;
        const messageContainerStyle = isUser ? styles.userMessageContainer : styles.otherMessageContainer;
        const messageTextStyle = isUser ? styles.userMessageText : styles.otherMessageText;
        const messageTimestampStyle = isUser ? styles.userMessageTimestamp : styles.otherMessageTimestamp;
        const messageNameStyle = isUser ? styles.usernameText : styles.othernameText

        return (
            <View style={[styles.messageContainer, messageContainerStyle]}>
                <Text style={messageNameStyle}>~{item.name}</Text>
                <Text style={messageTextStyle}>{item.text}</Text>
                <Text style={messageTimestampStyle}>{item.createdAt.toDate().toLocaleTimeString([], { hour: 'numeric', minute: 'numeric', hour12: true })}</Text>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Parent Teacher Association(PTA)</Text>
            </View>
            <Text style={styles.date}>{new Date().toLocaleDateString()}</Text>
            <FlatList
                data={messages}
                renderItem={renderMessage}
                keyExtractor={(item, index) => index.toString()}
            />
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={text}
                    onChangeText={setText}
                    placeholder="Type a message"
                    placeholderTextColor="#757575"
                />
                <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
                    <Text style={styles.sendButtonText}>Send</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
export default ParentChat;