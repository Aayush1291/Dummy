import React, { useState } from 'react';
import { ScrollView, Text, StyleSheet, Image, TouchableOpacity, View } from 'react-native';
import styles from './FitnessAndHealth.style';

const FitnessAndHealth = () => {
  const [showYogaDay, setShowYogaDay] = useState(false);
  const [showBloodDonationCamp, setShowBloodDonationCamp] = useState(false);
  const [showWorldHealthDay, setShowWorldHealthDay] = useState(false);

  const toggleYogaDay = () => {
    setShowYogaDay(!showYogaDay);
  };

  const toggleBloodDonationCamp = () => {
    setShowBloodDonationCamp(!showBloodDonationCamp);
  };

  const toggleWorldHealthDay = () => {
    setShowWorldHealthDay(!showWorldHealthDay);
  };

  const renderArrowIcon = (isExpanded) => {
    return (
      <Text style={styles.arrowIcon}>{isExpanded ? '▲' : '▼'}</Text>
    );
  };

  return (
    <ScrollView style={styles.container}>
      {/* Yoga Day */}
      <TouchableOpacity onPress={toggleYogaDay}>
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.heading}>
              International Yoga Day
            </Text>
            {renderArrowIcon(showYogaDay)}
          </View>
          {showYogaDay && (
            <View style={styles.sectionContent}>
              <Text style={styles.text}>
                Health is a state of complete physical, mental, and social well-being and not merely the absence of 
                disease or infirmity. The enjoyment of the highest attainable standard of health is one of the 
                fundamental rights of every human being without distinction of race, religion, political belief, 
                economic or social condition.
              </Text>
              <Text style={styles.text}>
                Yoga is essentially a spiritual discipline based on an extremely subtle science, which focuses on 
                bringing harmony between mind and body. It is an art and science of healthy living. The word 'Yoga' 
                is derived from the Sanskrit root 'Yuj', meaning 'to join' or 'to yoke' or 'to unite'.
              </Text>
              <Text style={styles.text}>
                Every year on 21st June, we celebrate International Yoga Day with our students and staff.
              </Text>
              <Image
                source={{ uri: 'https://vesit.ves.ac.in/storage/about/VKG_0484.jpg' }}
                style={styles.image}
              />
              <Image
                source={{ uri: 'https://vesit.ves.ac.in/storage/about/VKG_0447.jpg' }}
                style={styles.image}
              />
              
              <Image
                source={{ uri: 'https://vesit.ves.ac.in/storage/about/DSCN3389.jpg' }}
                style={styles.image}
              />
              
            </View>
          )}
        </View>
      </TouchableOpacity>

      {/* Blood Donation Camp */}
      <TouchableOpacity onPress={toggleBloodDonationCamp}>
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.heading}>
              Blood Donation Camp
            </Text>
            {renderArrowIcon(showBloodDonationCamp)}
          </View>
          {showBloodDonationCamp && (
            <View style={styles.sectionContent}>
              <Text style={styles.text}>
                Every drop of blood counts and can be a matter of life and death for someone. SoRT VESIT in 
                association with Hashu Advani Memorial Trust collaborated with JJ Mahanagar Raktapedhi to organize 
                a blood donation camp in VESIT. Additionally, a health checkup camp was also organized for the 
                faculty and staff members which included BMI, diabetes, blood pressure including other checkups. 
                The camp was held from 10 am to 5 pm on 24th February 2020 witnessed 210 registrations out of which 
                140 were eligible for donation after the preliminary hemoglobin and blood pressure tests conducted. 
                While the camp held Light refreshments were also provided to the donors.
              </Text>
              <Image
                source={{ uri: 'https://vesit.ves.ac.in/storage/about/sortsort2.jpeg' }}
                style={styles.image}
              />
            </View>
          )}
        </View>
      </TouchableOpacity>

      {/* World Health Day */}
      <TouchableOpacity onPress={toggleWorldHealthDay}>
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.heading}>
              World Health Day
            </Text>
            {renderArrowIcon(showWorldHealthDay)}
          </View>
          {showWorldHealthDay && (
            <View style={styles.sectionContent}>
              <Text style={styles.text}>
                The CSR Cell of VESIM had organized HEALTH DAY on 13th March, which included Blood donation organized by 
                Sadguru Charitable blood bank, Koparkhairane, Health check-up camp, Stem cells donation registration by 
                Dr. Praveen Clement and his team. Along with the event, CSR Team had arranged Dance and Fitness 
                sessions which also included Dance therapy for students and faculties hosted by Eeshan Dance 
                Academy, Chembur.
              </Text>
              <Image
                source={{ uri: 'https://vesim.ves.ac.in/images/bagallery/gallery-50/thumbnail/category-1/csr-health-2019-1.jpg' }}
                style={styles.image}
              />
             
            </View>
          )}
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default FitnessAndHealth;


