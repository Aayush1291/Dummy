import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, Animated, Touchable } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './PhotoGallery.styles';
import { useAppSelector } from '../store/hooks';;
import { black, red } from '../utils/color';
import Share from 'react-native-share';
import Ionicon from 'react-native-vector-icons/Ionicons'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const ImageGrid = () => {
    const [imageArrays, setImageArrays] = useState([]);
    const [likes, setLikes] = useState({});
    const [isLiked, setIsLiked] = useState(false);
    const [selectedItem, setSelectedItem] = useState('Architecture College');
    const user = useAppSelector((state) => state.profile.data);

    const fetchImageArrays = async (selectedItem) => {
        try {
            const snapshot = await firestore().collection('Photos').where('imageTitle', '==', selectedItem).get();
            const fetchedDocuments = snapshot.docs.map((doc) => ({
                docId: doc.id,
                ...doc.data(),
            }));

            const likesSnapshot = await firestore().collection('Photos').get();
            const likesData = {};
            likesSnapshot.docs.forEach((doc) => {
                likesData[doc.id] = doc.data().likes;
            });

            setImageArrays(fetchedDocuments);
            setLikes(likesData);

            if (fetchedDocuments.length > 0) {
                setSelectedItem(fetchedDocuments[0].imageTitle);
            }
        } catch (error) {
            console.log('Error fetching image arrays:', error);
        }
    };

    useEffect(() => {
        fetchImageArrays(selectedItem);
    }, []);


    const shareImage = async (imagePath) => {
        try {
            const shareOptions = {
                title: 'Share Image',
                url: imagePath,
                type: 'image/png',
                social: Share.Social.WHATSAPP,
            };

            await Share.open(shareOptions);

            console.log('Image shared successfully');
        } catch (error) {
            console.log('Share error:', error.message);
        }
    };

    const handleTitleChange = (index, value) => {
        setSelectedItem(value);
        fetchImageArrays(value);
    };

    const handleLike = async (docId) => {
        try {
            const postRef = firestore().collection('Photos').doc(docId);
            const postSnapshot = await postRef.get();
            if (!postSnapshot.exists) {
                throw new Error('Post does not exist.');
            }

            const postData = postSnapshot.data();
            if (!postData || !postData.likedBy) {
                throw new Error('Likedby property not found in post data.');
            }

            const likedBy = postData.likedBy;

            if (!likedBy.includes(user.email)) {

                await postRef.update({
                    likes: firestore.FieldValue.increment(1),
                    likedBy: firestore.FieldValue.arrayUnion(user.email),
                });

                setLikes((prevLikes) => ({
                    ...prevLikes,
                    [docId]: (prevLikes[docId] || 0) + 1,
                }));
                setIsLiked(true);
            } else {

                await postRef.update({
                    likes: firestore.FieldValue.increment(-1),
                    likedBy: firestore.FieldValue.arrayRemove(user.email),
                });

                setLikes((prevLikes) => ({
                    ...prevLikes,
                    [docId]: (prevLikes[docId] || 0) - 1,
                }));
                setIsLiked(false);
            }
            fetchImageArrays(selectedItem);
        } catch (error) {
            console.error('Error liking post:', error);
        }
    };

    const renderLikeIcon = (like) => {
        const isLiked = like || false;
        return isLiked ? (

            <Icon name="heart" size={24} color={red} />
        ) : (
            <Icon name="heart-outline" size={24} color={black} />
        );
    };

    const renderItem = ({ item }) => {
        // const title = item.imageTitle;
        const maintitle = item.mainTitle;
        // const imageId = item.id;
        const like = item.likes;

        return (
            <View style={styles.imageContainer}>
                <View style={{ borderBottomWidth: 1 }}>
                    <Text style={styles.title}>Vivekanand Education</Text>
                    <Text style={styles.location}>{maintitle}</Text>

                </View>
                <Image source={{ uri: item.imageURL }} style={styles.image} resizeMode='stretch' />
                <View style={styles.bottomView}>
                    <TouchableOpacity onPress={() => handleLike(item.docId)}>
                        {renderLikeIcon(like)}
                        <Text>{like} likes</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => shareImage(item.imageURL)}
                        style={styles.share}
                    >
                        <Icon name="share-social-sharp" size={24} color={black} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    };

    return (
        <View style={styles.main}>
            <View style={{ flexDirection: 'row', marginVertical: responsiveHeight(1) }}>
                <Ionicon name={'chevron-down'} size={20} color={black} style={{ position: 'absolute', marginVertical: responsiveWidth(2.5), right: 1 }} />
            </View>
            <FlatList
                data={imageArrays}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View >
    );
};

export default ImageGrid;