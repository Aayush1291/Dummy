import React, { useState } from "react";
import { Text, TouchableOpacity, ScrollView, View, Linking } from "react-native";
import Style from "./DigitalAcademy.style";
import Registration from "./Registration";
import ContactUs from "./ContactUs";

const Management = () => {
    const [reg, setreg] = useState(false)
    const [course, setcourse] = useState(false)
    const [ipr, setipr] = useState(false)
    const [contact, setcontact] = useState(false)
    const [detail, setdetail] = useState(false)

    const CourseList = () => {
        return (
            <View>
                <Text style={Style.heading2}>Intellectual Property Rights</Text>
                <Text style={Style.sub_text}>Course Objective :</Text>
                <Text style={Style.sub_text}>• To acquaint the students with the fundamental aspects of Intellectual property Rights who are going to play a major role in development and management of innovative projects in industries in near future.</Text>
                <Text style={Style.sub_text}>• To develop awareness about protection and enforcement of different Intellectual Property Rights.</Text>
                <Text style={Style.sub_text}>• To provide in-depth knowledge about the different Intellectual Property registration procedure.</Text>
                <Text style={Style.sub_text}>Coming Soon</Text>
                <Text>Course 65b Indian Evidence in Court</Text>
                <Text>Information Technology Evidence Act</Text>
                <Text>Proof of Digital Evidence in Court</Text>
                <Text>Digital Forensic</Text>
                <Text>Cyber Crime – Process Course</Text>
            </View>
        )
    }

    const IPR = () => {
        return (
            <View>
                <Text style={Style.heading2}>Intellectual Property Rights – Course Syllabus</Text>
                <Text style={Style.heading1}>Modules :</Text>
                <Text style={Style.sub_text}>1.Introduction to Intellectual Property Rights. Concept and Theories. Kinds of Intellectual Property Rights. Advantages and Disadvantages of IPR. Case Laws.</Text>
                <Text style={Style.sub_text}>2.Introduction to Patents with emphasis on the Patent Act 1970. Concepts, Novelty, Utility Inventiveness/Non-obviousness. Patentable subject matter, Patentability criteria, non-patentable inventions. Products and process patent protection. Rights of patentee. Procedure for granting a patent and obtaining patents. Grounds for opposition. Working of Patents, Compulsory License Acquisition, Surrender, Revocation, restoration. Transfer of patent rights, Infringement and its remedies. International Treaties and Conventions on Patents.</Text>
                <Text style={Style.sub_text}>3.Copyright and Neighbouring Rights with emphasis on the Copyright Act, 1957 Terms of Copyright conditions for grant of copyright, Assignment and licensing, Copyright in Literary, Dramatic and Musical ,Works, Sound Recording, Cinematograph Films, Author Special Rights, Right of Broadcasting and performers, Copyright Registrar and Copyright Board-Power and Procedure. Compulsory Licences, Infringement-Criteria, Infringement of Copyright-Films, Literary and Dramatic works, Importation and Infringement. International Treaties and Conventions on Copyright.</Text>
                <Text style={Style.sub_text}>4.Introduction to Trademarks with emphasis on the Trade Marks Act, 1999. Concept of Well-known trademark. Registration of trademark.  Grounds of refusal of registration -Absolute ground & Relative ground. Procedure of registration of trademark opposition and its grounds. Infringement of trademark Passing off. Deceptive similarity. Defences Remedies for infringement and passing off –Civil remedies. Criminal remedies. International Treaties and Conventions on Trade marks.</Text>
                <Text style={Style.sub_text}>5.DESIGN- Meaning, Definition, Object, Registration of Design, Cancellation of Registration, functions of Design. Semiconductor Integrated circuits and layout design Act-2000. Geographical Indications- Meaning, Definition, Object, Registration of Geographical Indications, functions of Geographical Indication. Geographical Indications of Goods (Registration and Protection) Act, 1999</Text>
                <Text style={Style.sub_text}>6.Protection of Plant Varieties Objectives, Plant varieties protection in India. Rights of farmers, breeders and researchers. National gene bank. Protection of Plant Varieties and Farmers’ Rights Act, 2001.</Text>
                <Text style={Style.sub_text}>TEXT BOOKS/Reference Material :</Text>
                <Text>1. Intellectual Property Rights and the Law, Gogia Law Agency, by Dr. G.B. Reddy </Text>
                <Text>2. Law relating to Intellectual Property, Universal Law Publishing Co, by Dr. B.L.Wadehra</Text>
                <Text>3. TIPR by P. Narayanan</Text>
                <Text>4. Law of Intellectual Property, Asian Law House, Dr.S.R. Myneni.</Text>
                <Text>5. Ahuja – Law relating to Intellectual Property Rights. India, In: Lexis Nexis</Text>
                <Text style={Style.sub_text}>WEB RESOURCE :</Text>
                <TouchableOpacity
                onPress={()=>Linking.openURL('https://dst.gov.in/sites/default/files/E-BOOK%20IPR.pdf')}>
                    <Text style={Style.link2}>• .https://dst.gov.in/sites/default/files/E-BOOK%20IPR.pdf</Text>
                </TouchableOpacity>
                <Text>• .Wipo intellectual property handbook policy law and use.</Text>
                <Text style={Style.sub_text}>BARE ACTS:</Text>
                <Text>• Protection of Plant Varieties and Farmers’ Rights Act, 2001</Text>
            </View>
        )
    }
    const Detail = () => {
        return (
            <View>
                <Text style={Style.sub_text}>Course Duration : 2 Months (32hrs)</Text>
                <Text style={Style.sub_text}>Course Fees : 4000 + GST</Text>
                <Text style={Style.sub_text}>Certification : Certified by VES College of Law</Text>
            </View>
        )
    }
    return (
        <ScrollView style={{ flex: 1, }}>
            <Text style={Style.heading2}>VES DIGITAL ACADEMY</Text>
            <Text style={Style.heading1}>MANAGEMENT COURSES</Text>
            <View style={Style.sub_module_view}>
                <TouchableOpacity
                    onPress={() => { setreg(!reg), setcontact(false), setcourse(false), setdetail(false), setipr(false) }}
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
                    onPress={() => { setreg(false), setcontact(false), setcourse(!course), setdetail(false), setipr(false) }}
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
                    onPress={() => { setreg(false), setcontact(false), setcourse(false), setdetail(false), setipr(!ipr) }}
                    style={Style.button2}>
                    <Text style={Style.textb}>Intellectual Property Rights Syllabus</Text>
                    <Text style={Style.icon}>{ipr ? '-' : '+'}</Text>
                </TouchableOpacity>
                {
                    ipr && (
                        <IPR />
                    )
                }
                <TouchableOpacity
                    onPress={() => { setreg(false), setcontact(false), setcourse(false), setdetail(!detail), setipr(false) }}
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
                    onPress={() => { setreg(false), setcontact(!contact), setcourse(false), setdetail(false), setipr(false) }}
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
export default Management