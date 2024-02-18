import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    Button,
    Modal,
    Alert,
    TextInput,
    TouchableOpacity,
    FlatList,
    Linking
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import styles from './examSchedule.styles';
import { useAppSelector } from '../store/hooks';
import DocumentPicker from 'react-native-document-picker';
import * as COLORS from '../utils/color'
import Icon from 'react-native-vector-icons/MaterialIcons';
import NewIcon from 'react-native-vector-icons/AntDesign';

const Exam = () => {
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [institute, setInstitute] = useState('')
    const [visibleModal, setVisibleModal] = useState(false);
    const [fileUri, setFileUri] = useState('');
    const [fileName, setFileName] = useState('');
    const [addBtnVisible, setAddBtnVisible] = useState(false)
    const [exams, setExams] = useState([]);

    const user = useAppSelector(state => state.profile.data)

    const HorizontalLine = () => {
        return <View style={styles.line} />;
    };

    const handleUploadPDF = async () => {
        try {
            const documentPickerResponse = await DocumentPicker.pickSingle({
                type: [DocumentPicker.types.pdf],
            });

            const fileName = documentPickerResponse.name;
            setFileName(fileName)
            const storageRef = storage().ref().child(`pdfs/${fileName}`);

            const fileUri = documentPickerResponse.uri;
            const response = await fetch(fileUri);
            const blob = await response.blob();

            await storageRef.put(blob);

            const downloadURL = await storageRef.getDownloadURL();
            setFileUri(downloadURL)
            setAddBtnVisible(true)

        } catch (error) {
            console.log('Error uploading PDF:', error);
        }
    };


    const handleAddPdf = () => {
        const file = {
            uploadedBy: user.email,
            uploadedOn: new Date(),
            title: title,
            institute: institute,
            url: fileUri
        }

        firestore()
            .collection('Exams')
            .add(file)
            .then(() => {
                Alert.alert("Success", "File uploaded successfully")
            })
        setVisibleModal(false);

    }

    const getData = async () => {
        try {
            if (user.loginType == 'Teacher') {
                const snapshot = await firestore().collection('Exams').get();

                const docs = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))
                setExams(docs)
            }

            else {
                const snapshot = await firestore().collection('Exams').where('institute', '==', user.institute).get();

                const docs = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))
                setExams(docs)
            }

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    const deleteDoc = async (id) => {
        Alert.alert(
            "Warning",
            "Are you sure you want to delete this Document",
            [
                {
                    text: "Yes, I'm sure",
                    onPress: () => {
                        firestore()
                            .collection('Exams')
                            .doc(id)
                            .delete()
                            .then(() => {
                                Alert.alert("Success", "Document deleted successfully")
                            })
                    },
                    style: 'destructive',
                },
                {
                    text: "No, Cancel",
                    style: 'cancel',
                }
            ],
            { cancelable: false }
        );
    }


    const displayCards = ({ item }) => {

        return (
            <View style={styles.card}>
                <View style={styles.row}>
                    <Text style={styles.cardTitle}>{item.title} - {item.institute}</Text>
                    {
                        user.loginType == 'Teacher' ?
                            <TouchableOpacity onPress={() => deleteDoc(item.id)}>
                                <Icon name='delete' size={26} color={COLORS.black} />
                            </TouchableOpacity>

                            :
                            null
                    }
                </View>
                <HorizontalLine />
                <TouchableOpacity style={styles.downloadButton} onPress={() => {
                    Linking.openURL(item.url)
                }}>
                    <NewIcon name='pdffile1' color={COLORS.black} size={40} />
                    <Text style={styles.downloadButtonText}>Click here to download</Text>
                </TouchableOpacity>
                <Text style={styles.cardInfo}>Uploaded by: {item.uploadedBy}</Text>
                <Text style={styles.cardInfo}>Uploaded on: {item.uploadedOn.toDate().toLocaleDateString()}</Text>
                {
                    user.loginType == 'teacher' ? <Text style={styles.cardInfo}>Institute: {item.institute}</Text> : null
                }

            </View>
        )
    }

    return (
        <View style={styles.main}>
            <FlatList
                data={exams}
                keyExtractor={(item, index) => index}
                renderItem={displayCards}
            />

            {
                user.loginType == 'teacher' ?
                    <View style={styles.button}>
                        <TouchableOpacity onPress={() => setVisibleModal(true)} style={styles.addButtonMain}>
                            <Text style={styles.addButtonLabel}>Add Document</Text>
                        </TouchableOpacity>
                    </View>
                    :
                    null
            }

            <Modal
                visible={visibleModal}
                animationType="slide"
                transparent
                onRequestClose={() => setVisibleModal(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Add Document</Text>

                        <TextInput
                            style={styles.input}
                            placeholder="Title"
                            placeholderTextColor={COLORS.gray}
                            color={COLORS.black}
                            value={title}
                            onChangeText={setTitle}
                        />

                        <TouchableOpacity style={styles.addButton} onPress={handleUploadPDF}>
                            <Text style={styles.addButtonLabel}>Select Document</Text>
                        </TouchableOpacity>
                        {
                            addBtnVisible ?
                                <View>
                                    <Text style={styles.text}>{`Selected ${fileName}`}</Text>
                                    <TouchableOpacity style={styles.addButton} onPress={handleAddPdf}>
                                        <Text style={styles.addButtonLabel}>Upload Document</Text>
                                    </TouchableOpacity>
                                </View>
                                :
                                null
                        }
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default Exam;
