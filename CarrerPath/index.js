import React, { useEffect,useState} from 'react';
import {FlatList,TouchableOpacity,Text,View} from 'react-native';
import Style from './CareerPath.style';

const Jobs = ({route}) => {
    const {query}=route.params;
    const API_KEY = 'AIzaSyDpoPSel0zdL_RdsThP3-d1pa5VH5m_QF4';
    const SEARCH_ENGINE_ID = '418dbe66ae12042d0';
    const [breeds, setBreeds] = useState([]);

  useEffect(()=>{
    const submit = async () => {
        console.log(query)
        try {
          console.log(query)
          const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${SEARCH_ENGINE_ID}&q=${query}`);
          const data = await response.json();
          if (data.items) {
            setBreeds(data.items);
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      submit();
  },[])
    const renderItem = ({ item }) => (
        <View style={Style.cart}>
          <TouchableOpacity
            onPress={() => Linking.openURL(item.link)}>
            <Text>{item.snippet}</Text>
          </TouchableOpacity>
        </View>
      )
    return(
        <View>
            <Text style={Style.text1}>Suggested Career Opportunities!!</Text>
        <FlatList
          data={breeds}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    )
}
export default Jobs;