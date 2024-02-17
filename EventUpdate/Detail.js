import React, { useEffect, useState } from 'react';
import { View, Text, FlatList,Image,TouchableOpacity} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import Style from './EventUpdate.styles';

const Detail = ({ route }) => {
    const { itemTitle } = route.params;
     console.log(itemTitle)
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await firestore()
                    .collection('EventUpdate')
                    .where('Title', '==', itemTitle)
                    .get();
                const results = [];
                querySnapshot.forEach((doc) => {
                    results.push(doc.data());
                });

                setData(results);
            } catch (error) {
                console.log('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    const renderItems = ({ item }) => {
        const date=item.Eventdate.toDate()
        const formatted = date.toLocaleDateString()
        return (
            <View>
                <View style={Style.renderView}>
                        <Text style={Style.titleText}> {item.Title} </Text>
                    <Image source={{ uri: item.Image }}
                        style={Style.image} />
                    <View style={Style.descView}>
                        <Text style={Style.descText}> {item.Desc} </Text>
                        <Text style={Style.descText}> {item.Detail} </Text>
                        <Text style={Style.date}>{formatted}</Text>
                    </View>
                </View>
            </View>

        )
    }
    return (
        <View>
            <FlatList
                data={data}
                renderItem={renderItems}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

export default Detail;