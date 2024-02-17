import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import styles from './faqs.styles';

const FAQ = () => {
  
  const [faqs, setFaqs] = useState([
    {
      header: 'Addmissions',
      question1: 'How do I apply for admission?',
      answer1: 'To apply for admission, visit the official website and follow the application instructions. Create an account, fill out the online form, and submit the required documents.',
      question2: 'What are the application deadlines?',
      answer2: 'Application deadlines vary. Check the specific deadlines for the program or institution you are interested in and ensure that you submit your application before the stated deadline.',
      question3: 'What documents do I need to submit with my application?',
      answer3: 'The required documents may include academic transcripts, standardized test scores, letters of recommendation, a personal statement or essay, and proof of English language proficiency. Check the institution\'s website or application instructions for the complete list of required documents.',
      question4: 'How long does it take to process an application?',
      answer4: 'The time taken to process an application can vary. It depends on factors such as the volume of applications received, the institutions review process, and the specific program. Its best to check with the institution for an estimated timeline.',

    },
    {
      header: ' Diploma Courses',
      question1: 'What types of courses are typically offered in a diploma institute?',
      answer1: 'Diploma institute\'s offer specialized vocational or technical courses designed to provide practical skills and knowledge in specific industries or professions. Some common course categories in diploma institute\'s include:',
      answer:'Business and Management, Healthcare, Information Technology, Design and Multimedia, Hospitality and Tourism.',
      question2:' How do I choose the right diploma course in a college institute?',
      answer2:'When choosing a diploma course in a college institute, consider the following factors: Career goals, Course curriculum, Accreditation and reputation, Internship or practical training opportunities, Alumni success and industry connections.',
      question3:' Can I transfer credits from a diploma course to a degree program?',
      answer3:' In some cases, it may be possible to transfer credits from a diploma course to a degree program, depending on the policies of the receiving institution. Some colleges and universities have articulation agreements or transfer pathways that allow students to transfer credits earned in a diploma program towards a related degree program. It\'s important to research the transfer policies of the specific college or university you plan to attend and consult with their admissions or transfer office for accurate information.',
      question4:' Can I pursue higher education after completing a diploma course in a college institute?',
      answer4:' Yes, you can pursue higher education after completing a diploma course in a college institute. While a diploma provides specialized vocational training, it may not be equivalent to a bachelor\'s degree. However, many colleges and universities offer diploma-to-degree programs or bridge programs that allow diploma holders to continue their education and earn a bachelor\'s degree in a related field. These programs typically recognize the credits earned during the diploma course and provide a streamlined pathway towards a degree.',
    },
    {
      header: 'Business School',
      question1: 'What is PGDM?',
      answer1:'PGDM :- Post Graduate Diploma in Management is a master\'s degree 2-year full-time program offered by VBS. The program is approved by the All India Council for Technical Education (AICTE) and is also accorded Equivalence by AIU, with MBA Degree of an Indian University. This program has received NBA accreditation for academic years 2016-2022.',
      question4: 'What are the specializations offered in PGDM?',
      answer4:'VBS offers PGDM in the following specializations:- Banking and Finance along with Financial Analytics  Marketing along with Marketing Analytics   Human Resource Management with HR Analytics       Marketing along with Marketing Analytics',
      question3: 'What type of Internship experiences do PGDM students get?',
      answer3:'The internship offers an intensive learning experience to a student. They receive on-the-job training and corporate internships at various reputed organizations. This helps students gain experience of working in a business organization while grasping curriculum-related information. Student internships are generally offered for a period of 2 months as part of their Summer Internship Program and they also undertake a Management Internship Program of 3 months.',
      question2: 'What is the genesis of VES Business School?',
      answer2:'Late Shri Hashu Advani, a visionary, chose the education field to build a strong nation. He felt that educated youth, with high moral values, can only build a strong nation. This thinking led to the formation of the Vivekanand Education Society (VES) in the year 1962. Today, the society runs 24 educational Institutions offering courses from Pre-primary to Ph.D. Since its inception, VBS has been quietly contributing to the growth of the Indian Corporate World by providing professionals for industry requirements.',
    },
    {
      header: 'Insitute of Management',
      question1: 'What is MMS?',
      answer1: 'The Master of Management Studies, abbreviated as MMS, is the two-year, full-time post graduate program of VESIM. The program is affiliated to the University of Mumbai, and also approved by AICTE, it has received NBA accreditation for academic years 2016-2017, 2017-2018, 2018-2019, 2019-2020, 2020-2021 & 2021-22.',
      question2: 'What is the course structure for MMS?',
      answer2: 'MMS program is spread over four semesters (2 semesters in each year) as per the guidelines of the University of Mumbai. The first year subjects are common across all specializations. For detailed course outline, please refer to the MMS section on our website.',
      question3: 'When should I apply for the course?',
      answer3: 'The admissions to the MMS course are as per the State CET Cell Rules and conducted through the Centralized Admission Procedure (CAP) Round. For regular updates on the CAP round, students can visit State CET Cell, Mumbai website',
      question4: 'I have missed the last deadline, can I still apply?',
      answer4:'If you have missed the last deadline, we recommend you to contact our office during the working hours 10.00 am to 5.00 pm. If cancellations occur, we may still consider your application as per the State CET Cell Rules. The applications will be assessed on a merit basis.',
    },
    {
      header: 'Financial Aid and Scholarships',
      question1: 'What financial aid options are available at VES?',
      answer1: 'VES offers a range of financial aid options, including need-based grants, scholarships, work-study programs, and student loans. We are committed to making education affordable for our students and encourage you to explore the various options available. Detailed information about financial aid can be found on our website or by contacting our Financial Aid Office.',
      question2: 'How do I apply for scholarships or grants?',
      answer2:'To be considered for scholarships and grants at [College Name], you will need to submit your application for admission. Scholarships and grants are awarded based on various criteria such as academic achievements, extracurricular involvement, leadership qualities, and financial need. Our scholarship committee carefully reviews all eligible applicants and selects recipients based on merit and fit with the institution.',
      question3: 'Are there any special scholarships available for specific groups or achievements?',
      answer3:'Yes, [College Name] offers a range of scholarships specifically tailored to various groups or achievements. These may include scholarships for underrepresented minorities, first-generation college students, high-achieving students, athletes, artists, or students with specific career interests. We encourage you to explore our scholarship opportunities on our website or reach out to our Scholarship Office for more information.',
    },
   /* {
      header:'Campus Safety and Security',
      question1: 'What measures are in place to ensure campus safety?',
      answer1:'',
      question2: 'How can I report incidents or emergencies on campus?',
      answer2:'',
      question3: 'Are there campus police or security personnel available 24/7?',
      answer3:'',
    }*/
  ]);

  const OnExpand = (index) => {
    setFaqs((prevFaqs) => {
      const updatedFaqs = [...prevFaqs];
      updatedFaqs[index].expanded = !updatedFaqs[index].expanded;
      return updatedFaqs;
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {faqs.map((faq, index) => (
          <View style={styles.faqContainer} key={index}>
            <TouchableOpacity
              style={styles.header}
              onPress={() => OnExpand(index)}
            >
              <Text style={styles.headerText}>{faq.header}</Text>
              <Text style={styles.icon}>{faq.expanded ? '-' : '+'}</Text>
            </TouchableOpacity>
            {faq.expanded && (
              <View style={styles.content}>
                <Text style={styles.questionText}>{faq.question1}</Text>
                <Text style={styles.answerText}>{faq.answer1}</Text>
                <Text style={styles.answerText}>{faq.answer}</Text>
                <Text style={styles.questionText}>{faq.question2}</Text>
                <Text style={styles.answerText}>{faq.answer2}</Text>
                <Text style={styles.questionText}>{faq.question3}</Text>
                <Text style={styles.answerText}>{faq.answer3}</Text>
                <Text style={styles.questionText}>{faq.question4}</Text>
                <Text style={styles.answerText}>{faq.answer4}</Text>
              </View>
            )}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};
export default FAQ;
