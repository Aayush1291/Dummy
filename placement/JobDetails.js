import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Linking, StyleSheet, ScrollView } from 'react-native';
import styles from './Placement.style'

const JobDetails = ({ route }) => {
  const { placement } = route.params;
  const [isApplied, setIsApplied] = useState(false);

  const handleApplyPress = () => {
    const formUrl = 'https://docs.google.com/forms/d/1tsYMyoVPcHkNgccfzQqwgc6pO4MqliEdX8WZz5Lm9x0/edit';
    Linking.openURL(formUrl);
    setIsApplied(true);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Title: <Text style={styles.titleText}>{placement.Title}</Text></Text>
        <Text style={styles.info}>Location: <Text style={styles.infoText}>{placement.Location}</Text></Text>
        <Text style={styles.info}>Duration: <Text style={styles.infoText}>{placement.Duration}</Text></Text>
        <Text style={styles.info}>Experience: <Text style={styles.infoText}>{placement.Experience}</Text></Text>
        <Text style={styles.info}>Description: <Text style={styles.infoText}>{placement.Description}</Text></Text>

        {!isApplied && (
          <TouchableOpacity style={styles.button} onPress={handleApplyPress}>
            <Text style={styles.buttontext}>Apply</Text>
          </TouchableOpacity>
        )}
        {isApplied && <Text style={styles.successText}>You have successfully applied for this job.</Text>}
      </View>
    </ScrollView>
  );
};


export default JobDetails;
