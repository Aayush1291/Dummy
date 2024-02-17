import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Linking, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './Counselling.style';


const Counselling = () => {
    const [ex1, setex1] = useState(false)
    const [ex2, setex2] = useState(false)
    const [ex3, setex3] = useState(false)
    const [ex4, setex4] = useState(false)
    const [ex5, setex5] = useState(false)


    const renderArrowIcon = (isExpanded) => {
        return (
            <Text style={styles.arrowIcon}>{isExpanded ? '-' : '+'}</Text>
        );
    };

    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity onPress={() => setex1(!ex1)}>
                <View style={styles.sectionContainer}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.heading}>
                            1. Listening mindfulness
                        </Text>
                        {renderArrowIcon(ex1)}
                    </View>
                    {ex1 && (
                        <View style={styles.sectionContent}>
                            <Image
                                source={{ uri: 'https://tse1.mm.bing.net/th?id=OIP.pC5HrV6tlpcENE1vLcXrOAHaEK&pid=Api&P=0&h=180' }}
                                style={styles.image}
                            />
                            <Text style={styles.subheading}>
                                Steps:
                            </Text>
                            <Text style={styles.text}>
                                1. Close your eyes if it feels good. If not, find a spot in your space to softly gaze at (relax your eyes and don’t focus on anything specific)
                            </Text>
                            <Text style={styles.text}>
                                2.Listen deeply to that sound. Take note of its tone (Is it soft? Buzzy? Harsh?), rhythm (maybe it’s steady or irregular), and volume.
                            </Text>
                            <Text style={styles.text}>
                                3.Stay with the sound as best you can. If your mind wanders off, that’s okay; just acknowledge that and come back to the sound. You can even imagine your distracting thoughts drifting away from you on a balloon or floating down a stream on a leaf
                            </Text>
                            <Text style={styles.text}>
                                4. End the exercise whenever you feel ready to stop.
                            </Text>

                        </View>
                    )}
                </View>
            </TouchableOpacity>


            <TouchableOpacity onPress={() => setex2(!ex2)}>
                <View style={styles.sectionContainer}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.heading}>
                            2. Four-seven-eight mindful breathing
                        </Text>
                        {renderArrowIcon(ex2)}
                    </View>
                    {ex2 && (
                        <View style={styles.sectionContent}>
                            <Image
                                source={{ uri: 'https://www.epainassist.com/assets/articles/2022/understanding-the-4-7-8-breathing-technique.jpg' }}
                                style={styles.image}
                            />
                            <Text style={styles.subheading}>
                                Steps:
                            </Text>
                            <Text style={styles.text}>
                                1.Close your eyes if it feels comfortable. If not, gaze softly gaze at a spot in your environment.
                            </Text>
                            <Text style={styles.text}>
                                2.Inhale for a count of four.
                            </Text>
                            <Text style={styles.text}>
                                3.Hold for a count of seven.
                            </Text>
                            <Text style={styles.text}>
                                4.Exhale for a count of eight.
                            </Text>
                            <Text style={styles.text}>
                                5. Make sure you’re breathing deeply, from the pit of your belly (compared to shallow breathing from your chest) so your lungs fill up fully.
                            </Text>
                            <Text style={styles.text}>
                                6.Stay with this pattern as best you can.
                            </Text>
                            <Text style={styles.text}>
                                7.End the exercise whenever you feel ready to stop.
                            </Text>
                        </View>
                    )}
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setex3(!ex3)}>
                <View style={styles.sectionContainer}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.heading}>
                            3. Group drawing
                        </Text>
                        {renderArrowIcon(ex3)}
                    </View>
                    {ex3 && (
                        <View style={styles.sectionContent}>
                            <Image
                                source={{ uri: 'https://img.freepik.com/free-photo/woman-drawing-while-taking-break-from-her-phone_23-2149017773.jpg?w=2000' }}
                                style={styles.image}
                            />
                            <Text style={styles.subheading}>
                                Steps:
                            </Text>
                            <Text style={styles.text}>
                                1. Set a timer for one minute.
                            </Text>
                            <Text style={styles.text}>
                                2.Start drawing something (anything!) on your piece of paper. 
                            </Text>
                            <Text style={styles.text}>
                                3.When the time is up, pass the paper to the person on your left.
                            </Text>
                            <Text style={styles.text}>
                                4. Reset the timer. The person who got your paper will now add to your drawing for another minute.
                            </Text>
                            <Text style={styles.text}>
                                5. Continue drawing and passing along in one-minute intervals until all the papers are returned to their original owners.
                            </Text>
                            <Text style={styles.text}>
                                6. During this exercise, notice any judgments about the activity, the drawing you were just handed, how you’re drawing, or what the drawing will look like in the end. Acknowledge and let them go, allowing yourself to focus on the task at hand.
                            </Text>
                        </View>
                    )}
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setex4(!ex4)}>
                <View style={styles.sectionContainer}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.heading}>
                            4. Body scan
                        </Text>
                        {renderArrowIcon(ex4)}
                    </View>
                    {ex4 && (
                        <View style={styles.sectionContent}>
                            <Image
                                source={{ uri: 'https://svadhyayakosha.com/wp-content/uploads/2020/11/meditation-for-sleep-the-hormonal-and-cellular-benefits.jpg' }}
                                style={styles.image}
                            />
                            <Text style={styles.subheading}>
                                Steps:
                            </Text>
                            <Text style={styles.text}>
                                1. Close your eyes or maintain a soft gaze (again, where your eyes are relaxed and you’re not focusing on anything in particular).
                            </Text>
                            <Text style={styles.text}>
                                2.Bring your attention to the bottom of your feet, followed by your toes, the tops of your feet, your heels, and your ankles. Notice what you’re sensing in each area—think tightness, coldness, a tingling sensation, or nothing at all—without judging it as good or bad.  
                            </Text>
                            <Text style={styles.text}>
                                3.Move deliberately up your body—to your calves, knees, thighs, hips, etc.—and do the same thing: Notice the physical sensations in each section with curious attention.
                            </Text>
                            <Text style={styles.text}>
                                4. When you come to the top of your head, you can either stop or travel back down to your feet again, the same way you came.
                            </Text>
                        </View>
                    )}
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setex5(!ex5)}>
                <View style={styles.sectionContainer}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.heading}>
                        5. Meditation
                        </Text>
                        {renderArrowIcon(ex5)}
                    </View>
                    {ex5 && (
                        <View style={styles.sectionContent}>
                            <Image
                                source={{ uri: 'https://getinfolist.com/wp-content/uploads/2014/09/2125909.jpg' }}
                                style={styles.image}
                            />
                            <Text style={styles.subheading}>
                                Steps:
                            </Text>
                            <Text style={styles.text}>
                                1.Find a comfortable place to sit.
                            </Text>
                            <Text style={styles.text}>
                                2.Gently close your eyes and begin by taking some deep breaths.
                            </Text>
                            <Text style={styles.text}>
                                3.Choose your mantra repeat your mantra silently to yourself without moving your tongue or lips.
                            </Text>
                            <Text style={styles.text}>
                                4.Do not try and stop your thoughts or empty your mind.
                            </Text>
                            <Text style={styles.text}>
                                5.End the exercise whenever you feel ready to stop.
                            </Text>
                        </View>
                    )}
                </View>
            </TouchableOpacity>
          
        </ScrollView>
    );

};
export default Counselling;