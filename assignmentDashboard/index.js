import React, { useRef, useState } from "react";
import { DrawerLayoutAndroid, View, Text, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './assignmentdashboard.styles'
import AssignmentHomeScreen from "./assignmenthome";
import AssignmentCreationScreen from "./assignmentCreate";
import AssignmentResponseScreen from "./assignmentResponse";

const AssignmentDashboard = () => {
    const drawer = useRef(null);
    const [selectedOption, setSelectedOption] = useState(null);

    const navigationView = () => (
        <View>
          <TouchableOpacity
            style={[
              styles.optionTouchable,
              selectedOption === "Home" && styles.selectedOption
            ]}
            onPress={() => handleOptionSelect("Home")}
          >
            <Text style={[styles.optionText,selectedOption === "Home" && styles.selectedOptionText]}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.optionTouchable,
              selectedOption === "Active Assignments" && styles.selectedOption
            ]}
            onPress={() => handleOptionSelect("Active Assignments")}>
            <Text style={[styles.optionText,selectedOption === "Active Assignments" && styles.selectedOptionText]}>Active Assignments</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.optionTouchable,
              selectedOption === "Response" && styles.selectedOption
            ]}
            onPress={() => handleOptionSelect("Response")}>
            <Text style={[styles.optionText,selectedOption === "Response" && styles.selectedOptionText]}>Response</Text>
          </TouchableOpacity>
        </View>
      );

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        drawer.current.closeDrawer();
    };

    const renderContent = () => {
        switch (selectedOption) {
            case "Home":
                return <AssignmentHomeScreen/>;
            case "Active Assignments":
                return <AssignmentCreationScreen/>;
            case "Response":
                return <AssignmentResponseScreen/>;
            default:
                return <AssignmentHomeScreen/>
        }
    };

    return (
        <DrawerLayoutAndroid
            ref={drawer}
            drawerWidth={300}
            renderNavigationView={navigationView}
        >
            <View style={styles.drawerStyles}>
                <TouchableOpacity
                    style={styles.drawerIcon}
                    onPress={() => drawer.current.openDrawer()}
                >
                    <Icon name="bars" size={30} color="black" />
                </TouchableOpacity>
                <View>
                    {renderContent()}
                </View>
            </View>
        </DrawerLayoutAndroid>
    );
};

export default AssignmentDashboard;
