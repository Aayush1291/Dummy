import React, { useState, useEffect } from 'react';
import { View, Text, Image, Linking, ScrollView, TouchableOpacity, Button } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import firestore from '@react-native-firebase/firestore';
import { useAppSelector } from '../store/hooks';
import styles from './Placement.style';

const Placement = ({ navigation }) => {
  const handleJobPress = () => {
    navigation.navigate('AddJob');
  };

  const [placementData, setPlacementData] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const user = useAppSelector(state => state.profile.data);

  const getData = async () => {
    try {
      const querySnapshot = await firestore().collection('Placement').get();
      const data = querySnapshot.docs.map((doc) => doc.data());
      setPlacementData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handlePlacementPress = (placement) => {
    navigation.navigate('JobDetails', { placement });
  };

  const handleInternshipDetailsPress = () => {
    const pdfUrl = 'https://ves.ac.in/polytechnic/wp-content/uploads/2023/03/Internship-Details.pdf';
    downloadPDF(pdfUrl, 'Internship Details.pdf');
  };

  const handlePlacementDetailsPress = (year) => {
    let pdfUrl = '';
    let pdfName = '';

    switch (year) {
      case '2021-22':
        pdfUrl =
          'https://ves.ac.in/polytechnic/wp-content/uploads/2023/03/Placement-Details-21-22.pdf';
        pdfName = 'Placement Details 2021-22.pdf';
        break;
      case '2020-21':
        pdfUrl =
          'https://ves.ac.in/polytechnic/wp-content/uploads/2023/03/Placement-Details-20-21.pdf';
        pdfName = 'Placement Details 2020-21.pdf';
        break;
      case '2019-20':
        pdfUrl =
          'https://ves.ac.in/polytechnic/wp-content/uploads/2023/03/Placement-Details-19-20.pdf';
        pdfName = 'Placement Details 2019-20.pdf';
        break;
      case '2018-19':
        pdfUrl =
          'https://ves.ac.in/polytechnic/wp-content/uploads/2023/03/Placement-Details-18-19.pdf';
        pdfName = 'Placement Details 2018-19.pdf';
        break;
      case '2017-18':
        pdfUrl =
          'https://ves.ac.in/polytechnic/wp-content/uploads/2023/03/Placement-Details-17-18.pdf';
        pdfName = 'Placement Details 2017-18.pdf';
        break;
      case '2016-17':
        pdfUrl =
          'https://ves.ac.in/polytechnic/wp-content/uploads/2023/03/Placement-Details-16-17.pdf';
        pdfName = 'Placement Details 2016-17.pdf';
        break;
      default:
        break;
    }

    if (pdfUrl !== '') {
      downloadPDF(pdfUrl, pdfName);
    }
  };

  const downloadPDF = (url, name) => {
    Linking.openURL(url);
  };

  const renderPDFSign = (year) => {
    return (
      <TouchableOpacity onPress={() => handlePlacementDetailsPress(year)}>
        <View style={[styles.pdfContainer, styles.pdfMargin]}>
          <Icon name="pdffile1" size={60} color="maroon" />
          <Text style={styles.pdfYear}>{year}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const handleNewJobAdded = (newJob) => {
    setPlacementData((prevPlacementData) => [...prevPlacementData, newJob]);
  };

  useEffect(() => {
    const unsubscribe = firestore().collection('Placement').onSnapshot((snapshot) => {
      const updatedData = snapshot.docs.map((doc) => doc.data());
      setPlacementData(updatedData);
    });

    return () => unsubscribe();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
      {user.loginType === 'Teacher' && (
       <TouchableOpacity style={styles.button} onPress={handleJobPress}>
       <Text style={styles.buttontext}>Add Job</Text>
     </TouchableOpacity>
      )}
        <TouchableOpacity style={styles.header} onPress={toggleExpand}>
          <Text style={styles.about}>View Jobs</Text>
          <Text style={styles.icon}>{isExpanded ? '▲' : '▼'}</Text>
        </TouchableOpacity>
        {isExpanded && (
          <View style={styles.placementList}>
            {placementData.map((placement, index) => (
              <TouchableOpacity
                key={index}
                style={styles.titleContainer}
                onPress={() => handlePlacementPress(placement)}
              >
                <Text style={styles.title}>{placement.Title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>

      <View style={styles.section}>
        <Text style={styles.subHeading}>Our Recruiters</Text>
        <Text style={styles.aboutText}>
          We are proud of achieving remarkable placements and we would like to thank the corporate
          world for showing immense faith in our students and helping us to continue our legacy of
          excellence.
        </Text>
        <Image
          source={{ uri: 'https://i0.wp.com/ves.ac.in/wp-content/uploads/2022/01/campus1.png?fit=134%2C69&ssl=1' }}
          style={styles.image1}
        />
        <Image
          source={{ uri: 'https://i0.wp.com/ves.ac.in/wp-content/uploads/2022/01/campus2.png?fit=177%2C56&ssl=1' }}
          style={styles.image2}
        />
        <Image
          source={{ uri: 'https://i0.wp.com/ves.ac.in/wp-content/uploads/2022/01/campus3.png?fit=179%2C56&ssl=1' }}
          style={styles.image3}
        />
        <Image
          source={{ uri: 'https://i0.wp.com/ves.ac.in/wp-content/uploads/2022/01/campus4.png?fit=129%2C71&ssl=1' }}
          style={styles.image4}
        />
        <Image
          source={{ uri: 'https://i0.wp.com/ves.ac.in/wp-content/uploads/2022/01/campus5.png?w=152&ssl=1' }}
          style={styles.image5}
        />
        <Image
          source={{ uri: 'https://i0.wp.com/ves.ac.in/wp-content/uploads/2022/01/campus6.png?fit=155%2C76&ssl=1' }}
          style={styles.image6}
        />
      </View>

      <View style={styles.section}>
        <TouchableOpacity onPress={handleInternshipDetailsPress}>
          <Text style={styles.subHeading}>Internship Details</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.subHeading}>Placement Details</Text>
        <View style={styles.placementDetailsContainer}>
          <TouchableOpacity onPress={() => handlePlacementDetailsPress('2021-22')}>
            {renderPDFSign('2021-22')}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePlacementDetailsPress('2020-21')}>
            {renderPDFSign('2020-21')}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePlacementDetailsPress('2019-20')}>
            {renderPDFSign('2019-20')}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePlacementDetailsPress('2018-19')}>
            {renderPDFSign('2018-19')}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePlacementDetailsPress('2017-18')}>
            {renderPDFSign('2017-18')}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePlacementDetailsPress('2016-17')}>
            {renderPDFSign('2016-17')}
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Placement;

