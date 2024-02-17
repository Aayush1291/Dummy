import React, { useState } from "react";
import { Text, TouchableOpacity, ScrollView, View } from "react-native";
import Style from "./DigitalAcademy.style";
import Registration from "./Registration";
import ContactUs from "./ContactUs";

const Skill = () => {
    const [reg, setreg] = useState(false)
    const [course, setcourse] = useState(false)
    const [photo, setphoto] = useState(false)
    const [excel,setexcel]=useState(false)
    const [contact, setcontact] = useState(false)
    const [detail, setdetail] = useState(false)

    const CourseList = () => {
        return (
            <View>
                <Text style={Style.heading2}>Photoshop</Text>
                <Text></Text>
                <Text style={Style.heading2}>Advance Excel</Text>
            </View>
        )
    }

    const Photoshop = () => {
        return (
            <View>
                <Text style={Style.heading2}>Photoshop – Course Syllabus</Text>
                <Text style={Style.heading1}>Modules :</Text>
                <Text style={Style.sub_text}>-Getting Started with Photoshop</Text>
                <Text style={Style.sub_text}>-Image Editing and Retouching</Text>
                <Text style={Style.sub_text}>-Introduction to Graphics in Photoshop</Text>
                <Text style={Style.sub_text}>-Working with Selections and Masks</Text>
                <Text />
                <Text />
                <Text style={Style.sub_text}>-Enhancing Visualizations</Text>
                <Text style={Style.sub_text}>-Creating Rendered Effects</Text>
                <Text style={Style.sub_text}>-Introduction to Montage in Photoshop</Text>
                <Text />
                <Text />
                <Text style={Style.sub_text}>-Creating Collages</Text>
                <Text style={Style.sub_text}>-Typography and Graphic Design</Text>
                <Text style={Style.sub_text}>-Finalizing and Exporting Graphics</Text>
                <Text />
                <Text />
                <Text style={Style.sub_text}>-Exporting Graphics and Introduction to Advanced photoshop applications and tools</Text>
            </View>
        )
    }
    const Excel = () => {
        return (
            <View>
                <Text style={Style.heading2}>Advance Excel – Course Syllabus</Text>
                <Text style={Style.heading1}>Total Duration : 16 hrs Skills students will learn</Text>
                <Text style={Style.sub_text}>-Excel Sort and Filter</Text>
                <Text style={Style.sub_text}>-Functions in Excel</Text>
                <Text style={Style.sub_text}>-Conditional formatting</Text>
                <Text style={Style.sub_text}>-Pivot Tables and Charts to create a PivotTable report to quickly analyze volumes of data, generate summary views, see comparisons and reveal patterns in your data – Advanced charting &graphing functions</Text>
                <Text style={Style.heading1}>Modules I:</Text>
                <Text style={Style.sub_text}>Excel Sort & Filter</Text>
                <Text style={Style.heading1}>Modules II:</Text>
                <Text style={Style.sub_text}>Working with PIVOT, CHARTS and REPORTS</Text>
                <Text style={Style.heading1}>Modules III:</Text>
                <Text style={Style.sub_text}>Formulas and Functions</Text>
                <Text style={Style.heading1}>Modules IV:</Text>
                <Text style={Style.sub_text}>Advanced Charting & Graphing Functions</Text>
                <Text style={Style.heading1}>Modules V:</Text>
                <Text style={Style.sub_text}>Formulas and Functions</Text>
            </View>
        )
    }
    const Detail = () => {
        return (
            <View>
                <Text style={Style.heading1}>Photoshop</Text>
                <Text style={Style.sub_text}>Course Duration : 3 Days (24hrs)</Text>
                <Text style={Style.sub_text}>Course Fees :</Text>
                <Text style={Style.sub_text}>Free for VES STUDENTS ONLY-</Text>
                <Text style={Style.sub_text}>Rs. 1000/- for VES Staff</Text>
                <Text style={Style.sub_text}>Rs. 1500/- for External Students</Text>
                <Text style={Style.sub_text}>Certification : Certified by VES College of Architecture</Text>
                <Text style={Style.heading1}>Advance Excel</Text>
                <Text style={Style.sub_text}>Course Duration : 1 Month (16hrs)</Text>
                <Text style={Style.sub_text}>Course Fees : Rs. 1,000/-</Text>
                <Text style={Style.sub_text}>Certification : Certified by VES College of Management</Text>

            </View>
        )
    }
    return (
        <ScrollView style={{ flex: 1, }}>
            <Text style={Style.heading2}>VES DIGITAL ACADEMY</Text>
            <Text style={Style.heading1}>SKILL DEVELOPMENT</Text>
            <View style={Style.sub_module_view}>
                <TouchableOpacity
                    onPress={() => { setreg(!reg), setcontact(false), setcourse(false), setdetail(false), setphoto(false),setexcel(false) }}
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
                    onPress={() => { setreg(false), setcontact(false), setcourse(!course), setdetail(false), setphoto(false),setexcel(false) }}
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
                    onPress={() => { setreg(false), setcontact(false), setcourse(false), setdetail(false), setphoto(!photo),setexcel(false) }}
                    style={Style.button2}>
                    <Text style={Style.textb}>Photoshop Syllabus</Text>
                    <Text style={Style.icon}>{photo ? '-' : '+'}</Text>
                </TouchableOpacity>
                {
                    photo && (
                        <Photoshop />
                    )
                }
                <TouchableOpacity
                    onPress={() => { setreg(false), setcontact(false), setcourse(false), setdetail(false), setphoto(false),setexcel(!excel) }}
                    style={Style.button2}>
                    <Text style={Style.textb}>Advance Excel Syllabus</Text>
                    <Text style={Style.icon}>{excel ? '-' : '+'}</Text>
                </TouchableOpacity>
                {
                    excel && (
                        <Excel />
                    )
                }
                <TouchableOpacity
                    onPress={() => { setreg(false), setcontact(false), setcourse(false), setdetail(!detail), setphoto(false),setexcel(false) }}
                    style={Style.button2}>
                    <Text style={Style.textb}>Course Detail</Text>
                    <Text style={Style.icon}>{course ? '-' : '+'}</Text>
                </TouchableOpacity>
                {
                    detail && (
                        <Detail />
                    )
                }
                <TouchableOpacity
                    onPress={() => { setreg(false), setcontact(!contact), setcourse(false), setdetail(false), setphoto(false),setexcel(false) }}
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
export default Skill