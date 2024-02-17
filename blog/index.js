import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    FlatList,
    Image,
    TouchableOpacity,
    Alert,
    Modal,
    TextInput,
    ImageBackground,
    Button,
    ScrollView,
    SafeAreaView,
} from 'react-native';
import styles from './blog.styles';
import firestore from '@react-native-firebase/firestore';
import { useAppSelector } from '../store/hooks';;
import Icon from 'react-native-vector-icons/MaterialIcons';
import NewIcon from 'react-native-vector-icons/Feather';
import AnotherIcon from 'react-native-vector-icons/FontAwesome';
import * as COLORS from '../utils/color';
import { connect } from 'react-redux';

const Blog = ({ navigation }) => {
    const user = useAppSelector((state) => state.profile.data);
    const [blogData, setBlogData] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null);
    const [showFullContent, setShowFullContent] = useState(false);
    const [fetchedComments, setFetchedComments] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [comment, setComment] = useState(null);
    const [textBoxVisible, setTextBoxVisible] = useState(false);
    const [buttonVisible, setButtonVisible] = useState(true);
    const [isLiked, setIsLiked] = useState(false);
    const [likes, setLikes] = useState(0);

    const handleClick = () => {
        setTextBoxVisible(!textBoxVisible);
        setButtonVisible(!buttonVisible);
    };

    const handleClickSend = async () => {
        if (comment == null) {
            Alert.alert('Error', 'Please enter a comment');
            handleClick();
        } else {
            try {
                const commentObject = {
                    text: comment,
                    commentedOn: new Date(),
                    commentedBy: {
                        email: user.email,
                        name: `${user.firstName} ${user.lastName}`,
                    },
                };

                const documentRef = firestore().collection('Blog').doc(selectedPost.id);
                const documentSnapshot = await documentRef.get();

                if (documentSnapshot.exists) {
                    await documentRef.update({
                        comments: firestore.FieldValue.arrayUnion(commentObject),
                    });

                    setComment('');
                } else {
                    console.error('Document not found');
                }
                getData()
            } catch (error) {
                console.error('Error adding comment:', error);
            }

            handleClick();
        }
    };

    const getData = async () => {
        try {
            const snapshot = await firestore().collection('Blog').get();

            const fetchedDocuments = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            const sortedDocuments = fetchedDocuments.sort(
                (a, b) => b.postedOn.toDate() - a.postedOn.toDate()
            );

            setBlogData(sortedDocuments);
        } catch (error) {
            console.log(error);
        }
    };

    const handleLike = async (postId) => {
        try {
            const postRef = firestore().collection('Blog').doc(postId);

            const likedBy = await postRef
                .get()
                .then((doc) => doc.data().likedBy);

            if (!likedBy || !likedBy.includes(user.email)) {
                await postRef.update({
                    likes: firestore.FieldValue.increment(1),
                    likedBy: firestore.FieldValue.arrayUnion(user.email),
                });

                setLikes(likes + 1);
                setIsLiked(true);
            } else {
                await postRef.update({
                    likes: firestore.FieldValue.increment(-1),
                    likedBy: firestore.FieldValue.arrayRemove(user.email),
                });

                setLikes(likes - 1);
                setIsLiked(false);
            }

            getData();
        } catch (error) {
            console.error('Error liking post:', error);
        }
    };

    const openModal = async (id) => {
        try {
            const snapshot = await firestore().collection('Blog').doc(id).get();
            const postData = snapshot.data();
            const commentsReceived = postData.comments || [];
            const commentsData = commentsReceived.sort(
                (a, b) => b.commentedOn - a.commentedOn
            );

            const updatedSelectedPost = { id, ...postData };
            setSelectedPost(updatedSelectedPost);
            setFetchedComments(commentsData);
            setModalVisible(true);
        } catch (error) {
            console.error('Error fetching comments:', error);
        }
    };


    const deleteItem = () => {
        try {
            const documentRef = firestore()
                .collection('Blog')
                .doc(selectedPost);
            documentRef.delete();
            Alert.alert('Success', 'Post deleted :(');
            getData();
        } catch (error) {
            console.error('Error deleting document:', error);
        }
    };

    const handleDelete = (postId) => {
        setSelectedPost(postId);
        Alert.alert(
            'Warning',
            'Are you sure you want to delete this AWESOME blog',
            [
                {
                    text: "Yes, I'm sure",
                    onPress: deleteItem,
                    style: 'destructive',
                },
                {
                    text: 'No, Cancel',
                    style: 'cancel',
                },
            ],
            { cancelable: false }
        );
    };

    useEffect(() => {
        getData();
    }, []);

    const toggleShowFullContent = () => {
        setShowFullContent(!showFullContent);
    };

    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/imgs/blog.png')}
                style={styles.image}
            />
            <Text style={styles.heading}>Our Blogs...</Text>
            <FlatList
                data={blogData}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.card1}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>{item.title}</Text>
                            {user.email === item.author.email ? (
                                <TouchableOpacity
                                    onPress={() => handleDelete(item.id)}
                                >
                                    <Icon
                                        name={'delete'}
                                        size={26}
                                        color={'black'}
                                    />
                                </TouchableOpacity>
                            ) : null}
                        </View>
                        <Text style={styles.post}>
                            {showFullContent
                                ? item.post
                                : `${item.post.slice(0, 100)}...`}
                        </Text>
                        {item.post.length > 100 && (
                            <TouchableOpacity onPress={toggleShowFullContent}>
                                <Text style={styles.readMore}>
                                    {showFullContent ? 'Read Less' : 'Read More'}
                                </Text>
                            </TouchableOpacity>
                        )}
                        <Text style={styles.name}>@{item.author.name}</Text>
                        <Text style={styles.date}>
                            {item.postedOn.toDate().toLocaleDateString()}
                        </Text>
                        <TouchableOpacity onPress={() => openModal(item.id)}>
                            <Text style={styles.name}>View Comments</Text>
                        </TouchableOpacity>
                        <View style={styles.likeContainer}>
                            <TouchableOpacity
                                onPress={() => handleLike(item.id)}
                            >
                                <AnotherIcon
                                    name={item.likedBy.includes(user.email) ? 'heart' : 'heart-o'}
                                    size={20}
                                    color={item.likedBy.includes(user.email) ? COLORS.red : COLORS.black}
                                    style={styles.icon}
                                />
                            </TouchableOpacity>
                            <Text style={styles.likes}>{item.likes} Likes</Text>
                        </View>
                    </View>
                )}
            />
            <Modal
                visible={modalVisible}
                animationType="slide"
                transparent={false}
            >
                <SafeAreaView style={styles.modalContainer}>
                    <ScrollView>
                        {selectedPost ? (
                            <View style={styles.selectedPostContainer}>
                                <View style={styles.card}>
                                    <View style={styles.titleContainer}>
                                        <Text style={styles.title}>
                                            {selectedPost.title}
                                        </Text>
                                    </View>
                                    <Text style={styles.post}>
                                        {showFullContent
                                            ? selectedPost.post
                                            : `${selectedPost.post.slice(0, 100)}...`}
                                    </Text>
                                    {selectedPost.post.length > 100 && (
                                        <TouchableOpacity onPress={toggleShowFullContent}>
                                            <Text style={styles.readMore}>
                                                {showFullContent ? 'Read Less' : 'Read More'}
                                            </Text>
                                        </TouchableOpacity>
                                    )}
                                    <Text style={styles.name}>
                                        @{selectedPost.author.name}
                                    </Text>
                                    <Text style={styles.date}>
                                        {selectedPost.postedOn.toDate().toLocaleDateString()}
                                    </Text>
                                </View>
                            </View>
                        ) : null}
                        <TouchableOpacity
                            style={styles.closeButton}
                            onPress={() => setModalVisible(false)}
                        >
                            <Icon name="close" size={26} color="black" />
                        </TouchableOpacity>

                        <Text style={styles.commentHeading}>Comments</Text>
                        {fetchedComments.map((item, index) => (
                            <View style={styles.commentContainer} key={index}>
                                <View style={{ flexDirection: 'row' }}>
                                    <AnotherIcon
                                        name="user-circle"
                                        size={25}
                                        color={COLORS.black}
                                    />
                                    <Text style={styles.commentText}>{item.text}</Text>
                                </View>
                                <View style={{ marginLeft: 40 }}>
                                    <Text style={styles.commentTag}>
                                        @{item.commentedBy.name}
                                    </Text>
                                    <Text style={styles.commentDate}>
                                        {item.commentedOn.toDate().toLocaleDateString()}
                                    </Text>
                                </View>
                            </View>
                        ))}
                        {textBoxVisible ? (
                            <View style={styles.rowInput}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Add a comment"
                                    placeholderTextColor={COLORS.gray}
                                    value={comment}
                                    onChangeText={setComment}
                                    multiline
                                    color={COLORS.black}
                                    onBlur={handleClick}
                                />
                                <TouchableOpacity onPress={handleClickSend}>
                                    <NewIcon name="send" size={35} color={COLORS.black} />
                                </TouchableOpacity>
                            </View>
                        ) : null}
                        {buttonVisible ? (
                            <TouchableOpacity style={styles.button} onPress={handleClick}>
                                <View style={styles.row}>
                                    <Text style={styles.buttonText}>Add a comment</Text>
                                    <Icon
                                        name="add-comment"
                                        size={20}
                                        color={COLORS.white}
                                    />
                                </View>
                            </TouchableOpacity>
                        ) : null}
                    </ScrollView>
                </SafeAreaView>
            </Modal>
        </View>
    );
};

export default Blog;