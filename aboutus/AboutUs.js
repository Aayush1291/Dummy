import React from 'react';
import { View, Text, Image, StyleSheet, Linking, ScrollView, TouchableOpacity } from 'react-native';
import styles from './Aboutus.style';

const AboutUs = () => {

  const handleImagePress = (url) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.coloredSection}>
        <Text style={styles.heading1}> VIVEKANAND</Text>
        <Text style={styles.heading2}>  EDUCATION SOCIETY</Text>
      </View>
      <View style={styles.content}>
        <Image
          source={{ uri: 'https://i.imgur.com/b9YG5qM.png' }}
          style={styles.image}
        />
        <View style={styles.coloredSection1}>
          <Text style={styles.heading}>About Vivekanand Education Society’s Polytechnic</Text>
        </View>
        <Text style={styles.description}>
          Vivekanand Education Society’s Polytechnic, Mumbai is one of the highly reputed colleges for polytechnic in Maharashtra, India.
          Established in 1983 by the Vivekanand Education Society founded by Late Shri Hashuji Advani, the institute offers quality technical education.
        </Text>
        <Text style={styles.description}>
          Swami Vivekananda – a great social reformer, was one of the most influential spiritual leaders of Vedanta philosophy.
          Swami Vivekananda was the living embodiment of sacrifice and dedicated his life to the country and yearned for the progress of the poor, the helpless, and the downtrodden.
        </Text>
        <Text style={styles.description}>
          Following the same line, Vivekanand Education Society (V.E.S.) started its educational activities in 1962, which now has over 20,000 students enrolled in various educational institutions.
          V.E.S. Polytechnic is affiliated with Maharashtra Board of Technical Education (MSBTE) and has been approved by AICTE.
        </Text>
        <Text style={styles.description}>
          Over the years, the institute has marched towards excellence in technical education through sustained efforts of the quality staff, improved teaching methodologies, and keeping pace with the latest technologies and industry requirements.
        </Text>
        <Text style={styles.description}>
          The Polytechnic is a part of a campus boasting various educational institutions, resulting in an atmosphere conducive to learning.
          It has a beautiful lush green playground and offers activities like Yoga, Music, and Vedanta to aid in shaping budding engineers.
        </Text>
        <Text style={styles.description}>
          The institute offers six diploma programs in Engineering with varying intake capacities:
        </Text>
        <View style={styles.programsContainer}>
          <Text style={styles.programName}>Automation and Robotics</Text>
          <Text style={styles.programIntake}>Intake: 60</Text>
        </View>
        <View style={styles.programsContainer}>
          <Text style={styles.programName}>Computer Engineering</Text>
          <Text style={styles.programIntake}>Intake: 120</Text>
        </View>
        <View style={styles.programsContainer}>
          <Text style={styles.programName}>Electronics & Telecommunication Engineering</Text>
          <Text style={styles.programIntake}>Intake: 60</Text>
        </View>
        <View style={styles.programsContainer}>
          <Text style={styles.programName}>Civil Engineering</Text>
          <Text style={styles.programIntake}>Intake: 60</Text>
        </View>
        <View style={styles.programsContainer}>
          <Text style={styles.programName}>Mechanical Engineering</Text>
          <Text style={styles.programIntake}>Intake: 60</Text>
        </View>
        <View style={styles.programsContainer}>
          <Text style={styles.programName}>Electrical Engineering</Text>
          <Text style={styles.programIntake}>Intake: 60</Text>
        </View>
        <Text style={styles.remarks}>
          Diploma in Instrumentation, Computer Engineering & Electronics & Telecommunication Engg. are accredited by National Board of Accreditation for the period of 3 years (Academic year 2017-2020).
        </Text>
        <Text style={styles.remarks}>
          Diploma in Civil Engineering, Mechanical Engineering & Electrical Engineering are graded with "Very Good" remark by MSBTE.
        </Text>
        <View style={styles.coloredSection1}>
          <Text style={styles.heading}>Vision</Text>
        </View>
        <Text style={styles.description}>
          To be a center of excellence in the field of technical education.
        </Text>
        <View style={styles.coloredSection1}>
          <Text style={styles.heading}>Mission</Text>
        </View>
        <Text style={styles.description}>
          - Enable the students to excel in their academic pursuits, making them sensitive to the needs of the progressive industrial world.
        </Text>
        <Text style={styles.description}>
          - Produce technocrats with psychomotor and cognitive skills, committed to lifelong learning.
        </Text>
        <Text style={styles.description}>
          - Impart ethical values and leadership qualities in students which would transform them into superior human beings.
        </Text>
        <View style={styles.coloredSection1}>
          <Text style={styles.heading}>Quality Policy</Text>
        </View>
        <Text style={styles.description}>
          VES Polytechnic is committed to imparting quality education in a disciplined environment with the help of competent and dedicated faculty.
          We continuously strive to improve the teaching-learning process to achieve academic excellence.
        </Text>
        <View style={styles.coloredSection1}>
          <Text style={styles.heading}>Social Media and Websites</Text>
        </View>


        <View style={{ flexDirection: 'row', justifyContent: 'center' }} >
          <TouchableOpacity onPress={() => handleImagePress('https://www.instagram.com/vespolytechnic_0004/')}>

            <Image
              source={require('../assets/imgs/instagram.png')}
              style={{ width: 50, height: 50, marginRight: 15, }}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleImagePress('https://youtube.com/@VESPolytechnic')}>
            <Image
              source={require('../assets/imgs/Youtube.png')}
              style={{ width: 50, height: 50, marginRight: 15 }}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleImagePress('https://www.facebook.com/profile.php?id=100063678624978&mibextid=ZbWKwL')}>
            <Image
              source={require('../assets/imgs/facebook.png')}
              style={{ width: 50, height: 50, marginRight: 15 }}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleImagePress('https://www.linkedin.com/school/ves-polytechnic/')}>
            <Image
              source={require('../assets/imgs/linkkedin.png')}
              style={{ width: 50, height: 50, marginRight: 15 }}
            />
          </TouchableOpacity>
        </View>

      </View>
    </ScrollView>
  );
};

export default AboutUs;

