import React, { useEffect, useState } from 'react';
import LoginScreen from './LoginScreen';
import Home from './Home';
import EventUpdate from './EventUpdate/EventUpdate';
import Detail from './EventUpdate/Detail';
import AddEvent from './EventUpdate/AddEvent';
import CompletedEvent from './EventUpdate/CompletedEvent';
import AboutUs from './aboutus/AboutUs';
import Facultyload from './facultyload/Facultyload';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';
import { store } from './store';
import Alumni from './alumni/Alumni';
import Fees from './fees/Fees';
import Splash from './Splash';
import Chat from './groupchat/chat';
import ParentChat from './groupchat/chatParent';
import FAQ from './FAQs/faqs';
import Profile from './bottomTab/profile';
import Notifications from './bottomTab/notifications';
import ContactUs from './bottomTab/contactUs';
import CustomHeader from './components/header';
import FitnessAndHealth from './fitnessandhealth/FitnessAndHealth';
import DigitalAcademy from './digitalAcademy/DigitalAcademy';
import DigitalAcademyDetail from './digitalAcademy/DigitalAcademyDetail';
import ImageGrid from './photoGallery';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { white } from './utils/color';
import Calendar from './holidayCalendar/HolidayCalendar';
import Blog from './blog';
import { useAppSelector } from './store/hooks';
import Exam from './examSchedule';
import Counselling from './counselling/Counselling';
import WelcomeUser from './WelcomeUser';
import Contact from './campusContact';
import AddContact from './campusContact/addContact';
import AssignmentDashboard from './assignmentDashboard';
import Test from './Test';
import TestTeacher from './TestTeacher';
import TestParent from './TestParent';
import Notessharing from './Notes Dashboard';
import AttendanceNew from './attendance/AttendanceNew';
import ViewAttend from './attendance/AttendenceView';
import Placement from './placement/Placement';
import AddJob from './placement/AddJob';
import JobDetails from './placement/JobDetails';
const stack = createNativeStackNavigator();
const tab = createBottomTabNavigator();

const MyHome = () => {
  const [isVisible, setIsVisible] = useState(false);
  const user = useAppSelector(state => state.profile.data);

  useEffect(() => {
    checkUser();
  }, [user]);

  const checkUser = () => {
    if (user.loginType != 'Guest') {
      setIsVisible(true);
    }
  };

  return (
    <tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: () => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Profile') {
            iconName = 'account-circle';
          } else if (route.name === 'Notifications') {
            iconName = 'notifications-active';
          } else if (route.name === 'ContactUs') {
            iconName = 'email';
          }

          return <Icon name={iconName} size={26} color={white} />;
        },
        tabBarLabelStyle: {
          fontWeight: 'bold',
          fontSize: 12,
          color: 'white',
        },
        tabBarActiveBackgroundColor: 'rgb(160,80,15)',
        tabBarStyle: {
          backgroundColor: 'rgb(145,40,41)',
        },
      })}>
      <tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <tab.Screen
        name="Notifications"
        component={Notifications}
        options={{ headerShown: false }}
      />
      <tab.Screen
        name="ContactUs"
        component={ContactUs}
        options={{ headerShown: false }}
      />
      {isVisible ? (
        <tab.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
        />
      ) : null}
    </tab.Navigator>
  );
};


const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <stack.Navigator>
        <stack.Screen
            name="Splash"
            component={Splash}
            options={{ headerShown: false }}
          />
          <stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <stack.Screen
            name="HomeScreen"
            component={MyHome}
            options={({ navigation }) => ({
              headerShown: true,
              header: () => (
                <CustomHeader navigation={navigation} title="Home" />
              ),
            })}
          />
          <stack.Screen
            name="Alumni"
            component={Alumni}
            options={({ navigation }) => ({
              headerShown: true,
              header: () => (
                <CustomHeader navigation={navigation} title="Alumni" />
              ),
            })}
          />
          <stack.Screen
            name="Test"
            component={Test}
            options={({ navigation }) => ({
              headerShown: true,
              header: () => (
                <CustomHeader navigation={navigation} title="Test Scores" />
              ),
            })}
          />
          <stack.Screen
            name="AboutUs"
            component={AboutUs}
            options={({ navigation }) => ({
              headerShown: true,
              header: () => (
                <CustomHeader navigation={navigation} title="About Us" />
              ),
            })}
          />
          <stack.Screen
            name="AttendanceNew"
            component={AttendanceNew}
            options={({ navigation }) => ({
              headerShown: true,
              header: () => (
                <CustomHeader navigation={navigation} title="Attendance" />
              ),
            })}
          />
          <stack.Screen
            name="ViewAttend"
            component={ViewAttend}
            options={({ navigation }) => ({
              headerShown: true,
              header: () => (
                <CustomHeader navigation={navigation} title="View Attendance" />
              ),
            })}
          />
          <stack.Screen
            name="EventUpdate"
            component={EventUpdate}
            options={({ navigation }) => ({
              headerShown: true,
              header: () => (
                <CustomHeader navigation={navigation} title="Event Updates" />
              ),
            })}
          />
          <stack.Screen
            name="AddEvent"
            component={AddEvent}
            options={({ navigation }) => ({
              headerShown: true,
              header: () => (
                <CustomHeader navigation={navigation} title="Add Events" />
              ),
            })}
          />
          <stack.Screen
            name="Detail"
            component={Detail}
            options={({ navigation }) => ({
              headerShown: true,
              header: () => (
                <CustomHeader navigation={navigation} title="Details" />
              ),
            })}
          />
          <stack.Screen
            name="CompletedEvent"
            component={CompletedEvent}
            options={({ navigation }) => ({
              headerShown: true,
              header: () => (
                <CustomHeader
                  navigation={navigation}
                  title="Completed Events"
                />
              ),
            })}
          />

          <stack.Screen
            name="Facultyload"
            component={Facultyload}
            options={({ navigation }) => ({
              headerShown: true,
              header: () => (
                <CustomHeader navigation={navigation} title="Faculty Load" />
              ),
            })}></stack.Screen>
          <stack.Screen
            name="Fees"
            component={Fees}
            options={({ navigation }) => ({
              headerShown: true,
              header: () => (
                <CustomHeader navigation={navigation} title="Fees" />
              ),
            })}></stack.Screen>
          <stack.Screen
            name="Calendar"
            component={Calendar}
            options={({ navigation }) => ({
              headerShown: true,
              header: () => (
                <CustomHeader navigation={navigation} title="Calendar" />
              ),
            })}
          />
          <stack.Screen
            name="FAQ"
            component={FAQ}
            options={({ navigation }) => ({
              headerShown: true,
              header: () => (
                <CustomHeader navigation={navigation} title="FAQs" />
              ),
            })}></stack.Screen>
          <stack.Screen
            name="FitnessAndHealth"
            component={FitnessAndHealth}
            options={({ navigation }) => ({
              headerShown: true,
              header: () => (
                <CustomHeader
                  navigation={navigation}
                  title="Fitness And Health"
                />
              ),
            })}
          />
          <stack.Screen
            name="PhotoGallery"
            component={ImageGrid}
            options={({ navigation }) => ({
              headerShown: true,
              header: () => (
                <CustomHeader navigation={navigation} title="Photo Gallery" />
              ),
            })}
          />
          <stack.Screen
            name="Blog"
            component={Blog}
            options={({ navigation }) => ({
              headerShown: true,
              header: () => (
                <CustomHeader navigation={navigation} title="VES Blog" />
              ),
            })}
          />
          <stack.Screen
            name="DigitalAcademy"
            component={DigitalAcademy}
            options={({ navigation }) => ({
              headerShown: true,
              header: () => (
                <CustomHeader navigation={navigation} title="Digital Academy" />
              ),
            })}
          />
          <stack.Screen
            name="DigitalAcademyDetail"
            component={DigitalAcademyDetail}
            options={({ navigation }) => ({
              headerShown: true,
              header: () => (
                <CustomHeader
                  navigation={navigation}
                  title="Digital Academy Detail"
                />
              ),
            })}
          />
          <stack.Screen
            name="Chat"
            component={Chat}
            options={({ navigation }) => ({
              headerShown: true,
              header: () => (
                <CustomHeader navigation={navigation} title="VES Chat" />
              ),
            })}
          />
          <stack.Screen
            name="chatParent"
            component={ParentChat}
            options={({ navigation }) => ({
              headerShown: true,
              header: () => (
                <CustomHeader navigation={navigation} title="VES Chat" />
              ),
            })}
          />
          <stack.Screen
            name="Exam"
            component={Exam}
            options={({ navigation }) => ({
              headerShown: true,
              header: () => (
                <CustomHeader navigation={navigation} title="Exam Schedule" />
              ),
            })}
          />
          <stack.Screen
            name="Counselling"
            component={Counselling}
            options={({ navigation }) => ({
              headerShown: true,
              header: () => (
                <CustomHeader navigation={navigation} title="Counselling" />
              ),
            })}
          />
          <stack.Screen
            name="WelcomeUser"
            component={WelcomeUser}
            options={() => ({
              headerShown: false,
            })}
          />
          <stack.Screen
            name="Campus Contact"
            component={Contact}
            options={({ navigation }) => ({
              headerShown: true,
              header: () => (
                <CustomHeader navigation={navigation} title="Campus Contact" />
              ),
            })}
          />
          <stack.Screen
            name="Add Contact"
            component={AddContact}
            options={({ navigation }) => ({
              headerShown: true,
              header: () => (
                <CustomHeader navigation={navigation} title="Add Contact" />
              ),
            })}
          />
          <stack.Screen
            name="Assignment Dashboard"
            component={AssignmentDashboard}
            options={({ navigation }) => ({
              headerShown: true,
              header: () => (
                <CustomHeader navigation={navigation} title="Assignment Dashboard" />
              ),
            })}
          />
            <stack.Screen
            name="TestTeacher"
            component={TestTeacher}
            options={({ navigation }) => ({
              headerShown: true,
              header: () => (
                <CustomHeader navigation={navigation} title="Test Scores" />
              ),
            })}
          />
            <stack.Screen
            name="TestParent"
            component={TestParent}
            options={({ navigation }) => ({
              headerShown: true,
              header: () => (
                <CustomHeader navigation={navigation} title="Test Scores" />
              ),
            })}
          />
          <stack.Screen
            name="Notes Dashboard"
            component={Notessharing}
            options={({ navigation }) => ({
              headerShown: true,
              header: () => (
                <CustomHeader navigation={navigation} title="Notes Dashboard" />
              ),
            })}
          />
          <stack.Screen
            name="Placement"
            component={Placement}
            options={({ navigation }) => ({
              headerShown: true,
              header: () => (
                <CustomHeader navigation={navigation} title="Placement" />
              ),
            })}
          />
          <stack.Screen
            name="JobDetails"
            component={JobDetails}
            options={({ navigation }) => ({
              headerShown: true,
              header: () => (
                <CustomHeader navigation={navigation} title="JobDetails" />
              ),
            })}
          />
          <stack.Screen
            name="AddJob"
            component={AddJob}
            options={({ navigation }) => ({
              headerShown: true,
              header: () => (
                <CustomHeader navigation={navigation} title="AddJob" />
              ),
            })}
          />
        </stack.Navigator>
        <stack.Screen
            name="Assignment Dashboard"
            component={AssignmentDashboard}
            options={({ navigation }) => ({
              headerShown: true,
              header: () => (
                <CustomHeader navigation={navigation} title="Assignment Dashboard" />
              ),
            })}
          />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
