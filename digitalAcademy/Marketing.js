import React, { useState } from "react";
import { Text, TouchableOpacity, ScrollView, View } from "react-native";
import Style from "./DigitalAcademy.style";
import Registration from "./Registration";
import ContactUs from "./ContactUs";

const Marketing = () => {
    const [reg, setreg] = useState(false)
    const [course, setcourse] = useState(false)
    const [web, setweb] = useState(false)
    const [contact, setcontact] = useState(false)
    const [detail, setdetail] = useState(false)

    const CourseList = () => {
        return (
            <View>
                <Text style={Style.heading2}>Website Design (HTML + CSS)</Text>
                <Text style={Style.sub_text}>Course Objective : Introduction to PHP. Evaluation of Php, Basic Syntax, Defining variable and constant, Php Data type, Operator and Expression. </Text>
                <Text style={Style.sub_text}>• To get familiar with the basics of the web and to acquire knowledge and skills for creation of static web sites using HTML tags and CSS.</Text>
                <Text style={Style.sub_text}>• To get brief idea about  Java Script</Text>
                <Text style={Style.sub_text}>• To explore server side programming : php</Text>
            </View>
        )
    }

    const Web = () => {
        return (
            <View>
                <Text style={Style.heading2}>Website Design (HTML + CSS) Syllabus</Text>
                <Text style={Style.heading1}>Modules :</Text>
                <Text style={Style.sub_text}>1.Introduction to Web, how does web work, Components of web, HTML introduction, Basics related to tags and text formatting tags, heading levels, HTML tables, HTML forms, Meta tags, Inserting image and hyperlinks, Simple forms in HTML, Use of Scripting in HTML, Basics of JavaScript and Simple JavaScript Program</Text>
                <Text style={Style.sub_text}>2.Advanced HTML 5, CSS2-Selectors, CSS Introduction, CSS Types, class, id, group and other types of selectors, CSS Tables, Text Fonts</Text>
                <Text style={Style.sub_text}>3.Decisions and loop. Function. Array. Handling Html Form with PHP. Working with files and Directories. Session and Cookie</Text>
                <Text style={Style.heading1}>System Requirements : </Text>
                <Text>Any system with minimum 2GB RAM</Text>
            </View>
        )
    }
    const Detail = () => {
        return (
            <View>
                <Text style={Style.sub_text}>Course Duration : 2 Months (32hrs)</Text>
                <Text style={Style.sub_text}>Course Fees : 2,500/-</Text>
                <Text style={Style.sub_text}>Certification : Certified by VES Institute of Technology</Text>
            </View>
        )
    }
    return (
        <ScrollView style={{ flex: 1, }}>
            <Text style={Style.heading2}>VES DIGITAL ACADEMY</Text>
            <Text style={Style.heading1}>DIGITAL MARKETING</Text>
            <View style={Style.sub_module_view}>
                <TouchableOpacity
                    onPress={() => { setreg(!reg), setcontact(false), setcourse(false), setdetail(false), setweb(false) }}
                    style={Style.button2}>
                    <Text style={Style.textb}>Registration</Text>
                    <Text style={Style.icon}>{reg ? '-' : '+'}</Text>
                </TouchableOpacity>
                {
                    reg && (
                        <Registration />
                    )
                }
                <TouchableOpacity
                    onPress={() => { setreg(false), setcontact(false), setcourse(!course), setdetail(false), setweb(false) }}
                    style={Style.button2}>
                    <Text style={Style.textb}>Course List</Text>
                    <Text style={Style.icon}>{course ? '-' : '+'}</Text>
                </TouchableOpacity>
                {
                    course && (
                        <CourseList />
                    )
                }
                <TouchableOpacity
                    onPress={() => { setreg(false), setcontact(false), setcourse(false), setdetail(false), setweb(!web) }}
                    style={Style.button2}>
                    <Text style={Style.textb}>Website Design (HTML + CSS) Syllabus</Text>
                    <Text style={Style.icon}>{web ? '-' : '+'}</Text>
                </TouchableOpacity>
                {
                    web && (
                        <Web />
                    )
                }
                <TouchableOpacity
                    onPress={() => { setreg(false), setcontact(false), setcourse(false), setdetail(!detail), setweb(false) }}
                    style={Style.button2}>
                    <Text style={Style.textb}>Course Detail</Text>
                    <Text style={Style.icon}>{detail ? '-' : '+'}</Text>
                </TouchableOpacity>
                {
                    detail && (
                        <Detail />
                    )
                }
                <TouchableOpacity
                    onPress={() => { setreg(false), setcontact(!contact), setcourse(false), setdetail(false), setweb(false) }}
                    style={Style.button2}>
                    <Text style={Style.textb}>Contact Us</Text>
                    <Text style={Style.icon}>{contact ? '-' : '+'}</Text>
                </TouchableOpacity>
                {
                    contact && (
                        <ContactUs />
                    )
                }
            </View>
        </ScrollView>
    )
}
export default Marketing