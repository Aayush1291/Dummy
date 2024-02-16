import { StyleSheet, Dimensions } from 'react-native'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({

    //Common
    Login_Button: {
        borderRadius: responsiveWidth(10),
        backgroundColor: '#175ca4',
        height: responsiveHeight(6.5),
        width: responsiveWidth(45),
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        marginTop: responsiveHeight(89),
        marginHorizontal: responsiveWidth(3),
    },
    Login_Button_Text: {
        fontSize: responsiveFontSize(2.3),
        fontFamily: 'Poppins-Regular',
        textAlign: 'center',
        alignSelf:'center',
        color: '#fff',
        lineHeight: 45,
    },
    Enquiry_Button: {
        borderRadius: responsiveWidth(10),
        backgroundColor: '#175ca4',
        height: responsiveHeight(6.5),
        width: responsiveWidth(45),
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        marginTop: responsiveHeight(89),
        marginLeft: responsiveWidth(50),
    },
    Enquiry_Button_Text: {
        fontSize: responsiveFontSize(2.3),
        fontFamily: 'Poppins-Regular',
        textAlign: 'center',
        alignSelf:'center',
        color: '#fff',
        lineHeight: 45,
    },

    //work
    work_Content_View: {
        borderRadius: responsiveWidth(10),
        backgroundColor: '#fff',
        borderStyle: 'solid',
        borderColor: '#175ca4',
        borderWidth: 1,
        flex: 1,
        width: responsiveWidth(85),
        height: responsiveHeight(45),
        position: 'absolute',
        marginHorizontal: responsiveWidth(7.5),
        marginTop: responsiveHeight(35)
    },
    work_fr_title: {
        fontSize: responsiveFontSize(3),
        fontFamily: 'Poppins-Regular',
        color: '#175ca4',
        fontWeight: 'bold',
        lineHeight: responsiveWidth(14),
        alignSelf: 'center'
    },
    work_en_title: {
        fontSize: responsiveFontSize(3.8),
        fontFamily: 'Poppins-Regular',
        color: '#175ca4',
        fontWeight: 'bold',
        lineHeight: responsiveWidth(14),
        alignSelf: 'center'
    },
    work_en_desc: {
        fontSize: responsiveFontSize(2.5),
        marginHorizontal: responsiveWidth(6),
        marginTop: responsiveHeight(1),
        fontFamily: 'Poppins-Regular',
        color: 'black',
        lineHeight: responsiveHeight(2.9),
    },
    work_fr_desc: {
        fontSize: responsiveFontSize(2.3),
        marginLeft: responsiveWidth(5),
        marginTop: responsiveHeight(1),
        fontFamily: 'Poppins-Regular',
        color: 'black',
        lineHeight: responsiveHeight(2.8),
    },

    //doctor
    Youtube_View: {
        height: responsiveHeight(28),
        top: responsiveHeight(12)
    },
    Player_Button: {
        color: '#175CA4',
        fontSize: responsiveFontSize(8)
    },
    ActiveDotStyle: {
        width: responsiveWidth(9)
    },
    YoutubePlayer_View: {
        top: responsiveHeight(0.1),
        alignSelf: 'center',
        borderWidth: responsiveWidth(2),
        borderColor: '#175CA4',
    },
    Doctor_Content_View: {
        borderRadius: responsiveWidth(10),
        backgroundColor: '#fff',
        borderStyle: 'solid',
        borderColor: '#175ca4',
        borderWidth: 1,
        flex: 1,
        width: responsiveWidth(85),
        height: responsiveHeight(37),
        position: 'absolute',
        marginHorizontal: responsiveWidth(7.5),
        marginTop: responsiveHeight(43),
    },
    Doctor_fr_title: {
        fontSize: responsiveFontSize(3),
        fontFamily: 'Poppins-Regular',
        color: '#175ca4',
        fontWeight: 'bold',
        lineHeight: responsiveHeight(6.55),
        alignSelf: 'center'
    },
    Doctor_en_title: {
        fontSize: responsiveFontSize(4.2),
        fontFamily: 'Poppins-Regular',
        color: '#175ca4',
        fontWeight: 'bold',
        lineHeight: responsiveHeight(6.4),
        alignSelf: 'center'
    },
    Doctor_en_desc: {
        fontSize: responsiveFontSize(2.5),
        marginHorizontal: responsiveWidth(6),
        marginTop: responsiveHeight(1),
        fontFamily: 'Poppins-Regular',
        color: 'black',
        lineHeight: responsiveHeight(2.9),
    },
    Doctor_fr_desc: {
        fontSize: responsiveFontSize(2.4),
        marginHorizontal: responsiveWidth(6),
        marginTop: responsiveHeight(1),
        fontFamily: 'Poppins-Regular',
        color: 'black',
        lineHeight: responsiveHeight(2.8),
    },

    //Patient

    Patient_View: {
        borderRadius: responsiveWidth(10),
        backgroundColor: '#fff',
        borderStyle: 'solid',
        borderColor: '#175ca4',
        borderWidth: 1,
        flex: 1,
        width: responsiveWidth(85),
        height: responsiveHeight(37),
        position: 'absolute',
        marginHorizontal: responsiveWidth(7.5),
        marginTop: responsiveHeight(43),
    },
    Patient_title: {
        fontSize: responsiveFontSize(3.4),
        fontFamily: 'Poppins-Regular',
        color: '#175ca4',
        fontWeight: 'bold',
        lineHeight: responsiveWidth(14),
        alignSelf: 'center'
    },
    Patient_desc: {
        fontSize: responsiveFontSize(2.5),
        marginHorizontal: responsiveWidth(6),
        marginTop: responsiveHeight(1),
        fontFamily: 'Poppins-Regular',
        color: 'black',
        lineHeight: responsiveHeight(2.9),
    },

    //Blogs and Research
    Blogs_View: {
        borderRadius: responsiveWidth(10),
        backgroundColor: '#fff',
        borderStyle: 'solid',
        borderColor: '#175ca4',
        borderWidth: 1,
        flex: 1,
        width: responsiveWidth(85),
        height: responsiveHeight(37),
        position: 'absolute',
        marginHorizontal: responsiveWidth(7.5),
        marginTop: responsiveHeight(43),
    },
    Blogs_fr_title: {
        fontSize: responsiveFontSize(3.8),
        fontFamily: 'Poppins-Regular',
        color: '#175ca4',
        fontWeight: 'bold',
        lineHeight: responsiveWidth(14),
        alignSelf: 'center'
    },
    Blogs_en_title: {
        fontSize: responsiveFontSize(3.8),
        fontFamily: 'Poppins-Regular',
        color: '#175ca4',
        fontWeight: 'bold',
        lineHeight: responsiveWidth(14),
        alignSelf: 'center'
    },
    Blogs_fr_Content_title: {
        fontSize: responsiveFontSize(2.4),
        marginHorizontal: responsiveWidth(3),
        lineHeight: responsiveHeight(3),
        fontFamily: 'Poppins-Regular',
        color: '#175ca4',
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    Blogs_en_Content_title: {
        fontSize: responsiveFontSize(2.5),
        marginHorizontal: responsiveWidth(3),
        fontFamily: 'Poppins-Regular',
        color: '#175ca4',
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    Blogs_en_desc: {
        fontSize: responsiveFontSize(2.3),
        marginHorizontal: responsiveWidth(5),
        marginTop: responsiveHeight(1),
        fontFamily: 'Poppins-Regular',
        color: 'black',
        lineHeight: responsiveHeight(2.8),
    },
    Blogs_fr_desc: {
        fontSize: responsiveFontSize(2.35),
        marginLeft: responsiveWidth(5),
        marginTop: responsiveHeight(1),
        fontFamily: 'Poppins-Regular',
        color: 'black',
        lineHeight: responsiveHeight(2.9),
    },
    Blogs_Pdf: {
        fontSize: responsiveFontSize(2),
        fontFamily: 'Poppins-Regular',
        color: '#175ca4',
        alignSelf: 'center'
    },

    //Login
    Login_Parameter_Text: {
        fontFamily: 'Poppins-Regular',
        color: '#303535',
        marginTop: responsiveHeight(5),
        fontSize: responsiveFontSize(2.5),
        marginLeft: responsiveWidth(4.5),
    },
    Login_Email_View: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: responsiveWidth(3.3),
        width: responsiveWidth(90),
        paddingLeft: responsiveWidth(2),
        height: responsiveHeight(7),
        marginHorizontal: responsiveWidth(5),
        marginTop: responsiveHeight(1.5),
    },
    Login_Password_View: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: responsiveWidth(3.3),
        width: responsiveWidth(90),
        borderWidth: 1,
        height: responsiveHeight(7),
        paddingLeft: responsiveWidth(2),
        marginHorizontal: responsiveWidth(5),
        marginTop: responsiveHeight(1.5),
    },
    Login_TextInput: {
        flex: 1,
        color: 'black',
        fontFamily: 'Poppins-Regular',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    },
    Recovery_Password: {
        color: '#6A6F7D',
        fontFamily: 'Poppins-Regular',
        fontSize: responsiveFontSize(1.5),
        marginLeft: responsiveWidth(62),
        marginTop: responsiveHeight(1),
    },
    Error_Message: {
        fontSize: responsiveFontSize(1.5),
        padding: responsiveWidth(1.5),
        color: 'red', marginLeft: (15),
        fontFamily: 'Poppins-Regular',
    },
    Sign_in_button_view: {
        width: responsiveWidth(90),
        marginHorizontal: responsiveWidth(5),
        marginTop: responsiveHeight(5),
        height: responsiveHeight(10)
    },
    Sign_in_button: {
        backgroundColor: '#175CA4',
        padding: responsiveHeight(1.5),
        borderRadius: responsiveWidth(10),
        marginTop: responsiveHeight(2)
    },
    Sign_in_button_Text: {
        color: '#ffffff',
        fontSize: responsiveFontSize(2),
        fontFamily: 'Poppins-Regular',
        lineHeight: responsiveHeight(3),
        textAlign: 'center',
    },

    //Enquiry

    Enquiry_text: {
        color: '#303535',
        top: responsiveHeight(-1),
        marginLeft: responsiveWidth(5),
        fontSize: responsiveFontSize(1.8),
        fontFamily: 'Poppins-Regular'
    },
    Enquiry_textinput_a: {
        // flex: 1,
        top: responsiveHeight(-1.5),
        color: 'black',
        fontFamily: 'Poppins-Regular',
        fontSize: responsiveFontSize(2),
        marginBottom: responsiveWidth(1.5),
        // paddingHorizontal: 12,
        // paddingVertical: 8,
        // // top:10,
        alignSelf: 'center',
        width: responsiveWidth(90),
        borderBottomWidth: 1,
        borderColor: '#ccc',
        paddingBottom: responsiveHeight(0.5)
        // marginRight:10
    },
    Enquiry_textinput_b: {
        top: responsiveHeight(-1.5),
        color: 'black',
        fontFamily: 'Poppins-Regular',
        fontSize: responsiveFontSize(2),
        // paddingHorizontal: 12,
        // paddingVertical: 8,
        // // top:10,
        alignSelf: 'center',
        width: responsiveWidth(83),
        borderBottomWidth: 1,
        borderColor: '#ccc',
        paddingBottom: responsiveHeight(0.5),
        marginLeft: responsiveWidth(5),
        marginBottom: responsiveWidth(1.5),
    },
    Enquiry_text_Contact: {
        top: responsiveHeight(4),
        marginLeft: responsiveWidth(5),
        fontSize: responsiveFontSize(2.1),
        fontFamily: 'Poppins-Regular',
        color: 'black'
    },
    Enquiry_text_afterContact: {
        color: 'black',
        top: responsiveHeight(4),
        marginLeft: responsiveWidth(5),
        fontSize: responsiveFontSize(1.8),
        fontFamily: 'Poppins-Regular',
    },
    Enquiry_textinput_afterContact: {
        top: responsiveHeight(3),
        color: 'black',
        fontFamily: 'Poppins-Regular',
        fontSize: responsiveFontSize(1.8),
        // paddingHorizontal: 12,
        // paddingVertical: 8,
        // // top:10,
        alignSelf: 'center',
        width: responsiveWidth(90),
        borderBottomWidth: 1,
        borderColor: '#ccc',
        paddingBottom: responsiveHeight(0.4),
        marginBottom: responsiveHeight(0.2)
    },
    Submit_Button: {
        backgroundColor: '#175CA4',
        padding: responsiveHeight(1.5),
        borderRadius: responsiveHeight(10),
        marginTop: responsiveHeight(8),
    },
    Submit_Button_Text: {
        color: '#ffffff',
        fontSize: responsiveFontSize(1.8),
        fontFamily: 'Poppins-Regular',
        lineHeight: responsiveHeight(3),
        textAlign: 'center',
    },
    Calendar_Container: {
        flex: 1,
        backgroundColor: '#fff',
        marginHorizontal: responsiveWidth(5),
        marginTop: responsiveWidth(5),
    },
    Calendar_Header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#175CA4',
        paddingVertical: responsiveHeight(1.25),
        paddingHorizontal: responsiveWidth(3.5),
        borderTopLeftRadius: responsiveHeight(1.5),
        borderTopRightRadius: responsiveHeight(1.5),
    },
    Calendar_Header_Text: {
        color: '#fff',
        fontFamily: 'Poppins-Regular',
        fontSize: responsiveFontSize(2.25),
    },
    CloseIcon:{
        marginLeft: responsiveWidth(48),
    }
})

export default styles;