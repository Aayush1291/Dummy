import React, { useState } from "react";
import { Text, TouchableOpacity, ScrollView, View, Linking } from "react-native";
import Style from "./DigitalAcademy.style";
import Registration from "./Registration";
import ContactUs from "./ContactUs";

const Pharmacy = () => {
    const [reg, setreg] = useState(false)
    const [course, setcourse] = useState(false)
    const [opt, setopt] = useState(false)
    const [research, setresearch] = useState(false)
    const [chem, setchem] = useState(false)
    const [drug,setdrug]=useState(false)
    const [contact, setcontact] = useState(false)
    const [detail, setdetail] = useState(false)

    const CourseList = () => {
        return (
            <View>
                <Text style={Style.heading2}>Drug Discovery</Text>
                <Text style={Style.sub_text}>Course Objective : </Text>
                <Text style={Style.sub_text}>1. To know the basics and requirements of computational chemistry and applications in Drug discovery.</Text>
                <Text style={Style.sub_text}>2. To understand and apply quantum chemistry principles to drug discovery problems</Text>
                <Text style={Style.sub_text}>3. To understand the principle and application and apply it for the design of drug candidate</Text>
                <Text style={Style.sub_text}>4. To understand, apply, create, and analyze the homology model.</Text>
                <Text style={Style.sub_text}>5. To understand, apply, create, and analyze the QSAR equations.</Text>
                <Text style={Style.sub_text}>6. To understand, apply, create, and analyze the pharmacophore models.</Text>
                <Text style={Style.heading2}>Optimiztion Techniques</Text>
                <Text style={Style.sub_text}>Course Objective : </Text>
                <Text style={Style.sub_text}>1. To learn the fundamentals of optimization-process/ method/ formulation optimization.</Text>
                <Text style={Style.sub_text}>2. To learn various optimization design and its application.</Text>
                <Text style={Style.sub_text}>3. To learn software used for optimization</Text>
                <Text style={Style.heading2}>Academic Research Writing</Text>
                <Text style={Style.sub_text}>Course Objective : </Text>
                <Text style={Style.sub_text}>This course aims to enable the students:</Text>
                <Text style={Style.sub_text}>1. To practice the basic skills of performing quality literature review.</Text>
                <Text style={Style.sub_text}>2. To differentiate between various kinds of academic writings.</Text>
                <Text style={Style.sub_text}>3. To practice the basic skills of research paper, review paper and thesis writing.</Text>
                <Text style={Style.sub_text}>4. To identify and avoid plagiarism.</Text>
                <Text style={Style.sub_text}>5. To target the research work to suitable journal and communicate for publication.</Text>
                <Text style={Style.heading2}>Analytical Chemistry </Text>
                <Text style={Style.sub_text}>Course Objective : </Text>
                <Text style={Style.sub_text}>1. To provide a step-by-step approach to method development by UV-Visible spectroscopy and reverse phase HPLC</Text>
                <Text style={Style.sub_text}>2. To enable implementation of systematic and efficient approach to method development by UV-Visible spectroscopy and reverse phase HPLC.</Text>
            </View>
        )
    }

    const Optimization = () => {
        return (
            <View>
                <Text style={Style.heading2}>Optimizations Techniques – Course Syllabus</Text>
                <Text style={Style.heading1}>Modules :</Text>
                <Text style={Style.sub_text}>1.Optimization techniques and fundamentals Formulation: Concept and parameters of optimiztion</Text>
                <Text style={Style.sub_text}>2.Different types of Optimization techniques, Statistical design, Response surface method, Contour designs</Text>
                <Text style={Style.sub_text}>3.Factorial designs and applications with case studies</Text>
                <Text style={Style.sub_text}>4.Software for designs and Optimization</Text>
                <Text style={Style.heading1}>Reference Material:</Text>
                <Text>1.Drugs and the Pharmaceutical Sciences, Banker,Modern Pharmaceutics-CRC Press (2002).</Text>
                <Text>2.Pharmaceutical Statistics: Practical and Clinical Applications by</Text>
                <View style={Style.main}>
                    <TouchableOpacity
                        onPress={() => Linking.openURL('https://www.amazon.in/s?i=stripbooks&rh=p_27%3ASanford+Bolton&ref=dp_byline_sr_book_1')}>
                        <Text style={Style.link2}>Sanford Bolton,</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => Linking.openURL('https://www.amazon.in/s?i=stripbooks&rh=p_27%3ACharles+Bon&ref=dp_byline_sr_book_2')}>
                        <Text style={Style.link2}> Charles Bon</Text>
                    </TouchableOpacity>
                </View>
                <Text>3.“Design of Experiments: Statistical Principles of Research Design and Analysis” by Robert O Kuehl</Text>
                <Text>4.Statistical Design and Analysis of Experiments: With Applications to Engineering and Science by Robert L. Mason, Richard F. Gunst, James L. Hess</Text>
                <Text>5.Design-Expert® software-</Text>
                <TouchableOpacity
                    onPress={() => Linking.openURL('https://www.statease.com/docs/v13/')}>
                    <Text style={Style.link2}>https://www.statease.com/docs/v13/</Text>
                </TouchableOpacity>
            </View>
        )
    }
    const Research = () => {
        return (
            <View>
                <Text style={Style.heading2}>Academic Research Writing- Course Syllabus</Text>
                <Text style={Style.heading1}>Modules:</Text>
                <Text style={Style.sub_text}>1.Tools for Effective Literature Review (1hour)</Text>
                <Text style={Style.sub_text}>• Understanding the Literature Review Process</Text>
                <Text>1.Overview of the literature review process and its importance in research</Text>
                <Text>2.Different types of literature reviews (narrative, systematic, scoping, meta-analysis)</Text>
                <Text style={Style.sub_text}>• Developing a Literature Search Strategy</Text>
                <Text>1.Identifying relevant search terms and keywords</Text>
                <Text>2.Choosing appropriate databases and search engines</Text>
                <Text>3.Techniques for refining search results and avoiding bias</Text>
                <Text style={Style.sub_text}>• Critical Reading and Evaluation of Literature</Text>
                <Text>1.Strategies for evaluating the quality and relevance of research articles</Text>
                <Text>2.Assessing the credibility and reliability of sources</Text>
                <Text>3.Identifying gaps in existing literature and potential research opportunities</Text>
                <Text style={Style.sub_text}>• Efficiently Reading and Annotating Literature</Text>
                <Text>1.Techniques for efficient reading and note-taking</Text>
                <Text>2.Best practices for annotating articles and organizing notes</Text>
                <Text>3.Tools for facilitating efficient literature review (e.g., summarization software, annotation apps)</Text>
                <Text style={Style.sub_text}>2.Strategies of academic writing (2 hours)</Text>
                <Text style={Style.sub_text}>• Academic Writing Style and Tone:</Text>
                <Text>1.Establishing a professional and academic writing style.</Text>
                <Text>2.Understanding audience expectations and needs.</Text>
                <Text>3.Developing an appropriate writing tone.</Text>
                <Text style={Style.sub_text}>• Writing the Introduction:</Text>
                <Text>1.Crafting a strong thesis statement.</Text>
                <Text>2.Providing context and background information.</Text>
                <Text>3.Defining key terms and concepts.</Text>
                <Text style={Style.sub_text}>• Methods and Materials:</Text>
                <Text>1.Describing the research design and methods.</Text>
                <Text>2.Detailing data collection and analysis procedures.</Text>
                <Text>3.Addressing ethical considerations.</Text>
                <Text style={Style.sub_text}>• Results:</Text>
                <Text>1.Organizing and presenting research findings.</Text>
                <Text>2.Using tables, charts, and graphs to display data.</Text>
                <Text>3.Interpreting and analyzing research results.</Text>
                <Text style={Style.sub_text}>• Discussion and Conclusion:</Text>
                <Text>1.Interpreting research results and discussing implications.</Text>
                <Text>2.Addressing research limitations and future directions.</Text>
                <Text>3.Crafting a strong conclusion that highlights key findings.</Text>
                <Text style={Style.sub_text}>3.Referencing Styles and managers & Plagiarism Check</Text>
                <Text>1.Overview of popular citation management tools (e.g., Zotero, Mendeley, EndNote).</Text>
                <Text>2.Organizing and managing references.</Text>
                <Text>3.Creating and formatting bibliographies and in-text citations.</Text>
                <Text>4.Paraphrasing and plagiarism check tools.</Text>
                <Text style={Style.sub_text}>4.The Art of Journal Selection</Text>
                <Text>1.Understanding the academic publishing landscape: An overview of the academic publishing landscape, including the different types of journals, open access publishing, and predatory journals.</Text>
                <Text>2.Identifying potential target journals: How to identify potential target journals for your research paper, including databases and search engines that can help with the process.</Text>
                <Text>3.Analyzing the journal’s scope and focus: How to analyze the scope and focus of a journal to determine whether it is a good fit for your research.</Text>
                <Text>4.Assessing the journal’s quality and impact: How to assess the quality and impact of a journal using metrics such as impact factor, citation analysis, and indexing in databases.</Text>
                <Text>5.Understanding the submission process: An overview of the journal submission process, including manuscript formatting, submission guidelines, and author guidelines.</Text>
                <Text>6.Managing the review process: How to manage the peer review process, including responding to reviewer comments and revising your manuscript.</Text>
                <Text>7.Addressing ethical issues: An overview of ethical issues in academic publishing, including plagiarism, authorship, and conflicts of interest.</Text>
                <Text>8.Selecting the best fit journal: A step-by-step guide to selecting the best fit journal for your research paper based on the above factors.</Text>
                <Text style={Style.sub_text}>References:</Text>
                <Text>1.“A Handbook of Critical Approaches to Literature” by Wilfred L. Guerin, Earle Labor, Lee Morgan, and Jeanne C. Reesman</Text>
                <Text>2.“Systematic Approaches to a Successful Literature Review” by Andrew Booth, Anthea Sutton, and Diana Papaioannou</Text>
                <Text>3.“Critical Reading and Writing for Postgraduates” by Mike Wallace and Alison Wray</Text>
                <TouchableOpacity
                    onPress={() => { Linking.openURL('https://quillbot.com/summarize') }}>
                    <Text style={Style.link2}>4.https://quillbot.com/summarize</Text>
                </TouchableOpacity>
                <Text>5.“Research Methods in Education” by Louis Cohen, Lawrence Manion, and Keith Morrison</Text>
                <Text>6.“How to Write and Publish a Scientific Paper” by Robert A. Day and Barbara Gastel</Text>
                <TouchableOpacity
                    onPress={() => { Linking.openURL('https://www.zotero.org/support/quick_start_guide') }}>
                    <Text style={Style.link2}>7.https://www.zotero.org/support/quick_start_guide</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => { Linking.openURL('https://www.mendeley.com/guides') }}>
                    <Text style={Style.link2}>8.https://www.mendeley.com/guidese</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => { Linking.openURL('https://quillbot.com/summarize') }}>
                    <Text style={Style.link2}>9.https://quillbot.com/summarize</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => { Linking.openURL('https://quillbot.com/') }}>
                    <Text style={Style.link2}>10.https://quillbot.com/</Text>
                </TouchableOpacity>
                <Text>11.Suiter AM, Sarli CC. Selecting a Journal for Publication: Criteria to Consider. Mo Med. 2019 Nov-Dec;116(6):461-465.</Text>
                <Text>12.Bavdekar, Sandeep. (2015). Choosing the Right Journal for a Scientific Paper. The Journal of the Association of Physicians of India. 63. 56.</Text>
            </View>
        )
    }
    const Chemistry = () => {
        return (
            <View>
                <Text style={Style.heading2}>Analytical Chemistry – Course Syllabus</Text>
                <Text style={Style.heading1}>Course Modules:</Text>
                <Text style={Style.sub_text}>1.Basics of UV-Visible spectrophotometer Instrumentation</Text>
                <Text>• Basic components of uv-visible spectrophotometer- Light source, wavelength selectors, sample holder, detectors, cuvettes</Text>
                <Text>• Commercially available uv-visible spectrophotometers</Text>
                <Text style={Style.sub_text}>2.Practical aspects of method development by UV-Visible spectroscopy</Text>
                <Text>• Selection of medium/solvent</Text>
                <Text>• Selection of detection wavelength</Text>
                <Text>• Analysis of samples in presence of sample matrix</Text>
                <Text style={Style.sub_text}>3.Basics of HPLC Instrumentation</Text>
                <Text>• Basic components of an HPLC- Mobile phase reservoirs, pumps, columns, sample injection systems, detectors, data acquisition systems, tubes & fittings</Text>
                <Text>• Specific emphasis on instrumentation of RP-HPLC with UV detection</Text>
                <Text>• Commercially available HPLC equipments</Text>
                <Text style={Style.sub_text}>4.Principle of separation in RP-HPLC</Text>
                <Text>• Introduction to Resolution. The concepts of efficiency, retention factor and selectivity. The way to optimize each parameter and its role in reversed-phase resolution is explained</Text>
                <Text>• Reversed-Phase HPLC Columns and their characteristics</Text>
                <Text>• The matrix and the nature of the stationary phase</Text>
                <Text>• How hydrophobic, polar and ionic interactions contribute to and affect reversed-phase retention and selectivity.</Text>
                <Text>• The type of stationary phases available and how each affects selectivity.</Text>
                <Text style={Style.sub_text}>5. Principle of separation by RP-HPLC</Text>
                <Text>• How to evaluate and compare columns in order to select the best column for a given separation.</Text>
                <Text>• Reversed-Phase HPLC Mobile Phases and their characteristics.</Text>
                <Text>• How to find the best solvent concentration for a method</Text>
                <Text>• SHow solvent type and concentration affects selectivity and why</Text>
                <Text>• How the pH of the mobile phase is used to optimize the separation of basic and acidic compounds.</Text>
                <Text>• Temperature. The affect of column temperature on retention and selectivity is described.</Text>
                <Text>• An overview of type of elution-isocratic Vs gradient</Text>
                <Text style={Style.sub_text}>Requirements:</Text>
                <Text>Notebook, access to internet</Text>
                <Text style={Style.sub_text}>Virtual Demonstration of Handling & Operation</Text>
                <Text>1.Handling, operation and troubleshooting of UV-Visible spectroscopy Expert: Dr. Anita Ayre & Ms. Palak Karia</Text>
                <Text>2.Handling, operation and troubleshooting of HPLC Expert: Dr. Anita Ayre & Ms. Palak Karia</Text>
                <Text style={Style.sub_text}>Reference Books:</Text>
                <Text>1.Text book of Pharmaceutical Analysis by Kenneth A. Connors</Text>
                <Text>2.Vogel‘s Text book of Quantitative  Chemical Analysis by A.I. Vogel</Text>
                <Text>3.Instrumental Methods of Analysis by Skoog</Text>
                <Text>4.Practical Pharmaceutical Chemistry by A.H. Beckett and J.B. Stenlake</Text>
                <Text>5.HPLC Method Development by Snyder & Kirkland</Text>
            </View>
        )
    }
    const Drug = () => {
        return (
            <View>
                <Text style={Style.heading2}>Drug Discover Syllabus</Text>
                <Text style={Style.heading1}>Course Modules:</Text>
                <Text style={Style.sub_text}>1. Basics of computational chemistry</Text>
                <Text>• Computers in drug discovery, past present future</Text>
                <Text>• Structure file formats, databases, converters</Text>
                <Text>• Softwares</Text>
                <Text style={Style.sub_text}>2. Quantum Mechanics and its Application</Text>
                <Text>• Theory and methods</Text>
                <Text>• Softwares</Text>
                <Text>• Hands on</Text>
                <Text style={Style.sub_text}>3. Molecular Docking: Theory and Application</Text>
                <Text>• Theory and methods</Text>
                <Text>• Hands on: Structure Preparation, Grid generation, Validation, interpretation</Text>
                <Text style={Style.sub_text}>4. Homology Modelling: Theory and Application</Text>
                <Text>• Theory and methods</Text>
                <Text>• Hands on: Sequence, Alignment, structure generation, validation</Text>
                <Text style={Style.sub_text}>5. Quantitative Structure-activity Relationships: Theory and Application</Text>
                <Text>• Theory and methods</Text>
                <Text>• Hands on: structure preparation, property generation, property selection, data curing, equation generation, equation interpretation</Text>
                <Text style={Style.sub_text}>6. Pharmacophore mapping: Theory and Application</Text>
                <Text>• Theory and methods</Text>
                <Text>• Hands on: Structure preparation, pharmacophore generation, validation, application</Text>
                <Text style={Style.heading1}>System Requirements : </Text>
                <Text>Any system with minimum 4GB RAM and four processors.</Text>
                <Text style={Style.sub_text}>Reference Material:</Text>
                <Text>• Molecular Modeling: Basic Principles and Applications, 2nd Edition (Hans-Dieter Höltje, Wolfgang Sippl, Didier Rognan, and Gerd Folkers)</Text>
                <Text>• Leach, A. R. (2001). Molecular Modelling. Germany: Prentice Hall.</Text>
                <Text>• Pharmacophore Perception, Development and Use in Drug Design. Edited by Osman F. Güner</Text>
            </View>
        )
    }
    const Detail = () => {
        return (
            <View>
                <Text style={Style.heading1}>Drug Discovery</Text>
                <Text style={Style.sub_text}>Course Duration : 1 Months (12 hrs)</Text>
                <Text style={Style.sub_text}>Course Fees : 2,000/-</Text>
                <Text style={Style.sub_text}>Certification : Certified by VES College of Pharmacy</Text>
                <Text style={Style.heading1}>Optimiztion Techniques</Text>
                <Text style={Style.sub_text}>Course Duration : 1 Months (8 hrs)</Text>
                <Text style={Style.sub_text}>Course Fees : 2,000/-</Text>
                <Text style={Style.sub_text}>Certification : Certified by VES College of Pharmacy</Text>
                <Text style={Style.heading1}>Academic Research Writing</Text>
                <Text style={Style.sub_text}>Course Duration : 1 Months (5 hrs)</Text>
                <Text style={Style.sub_text}>Course Fees : 1,000/-</Text>
                <Text style={Style.sub_text}>Certification : Certified by VES College of Pharmacy</Text>
                <Text style={Style.heading1}>Analytical Chemistry</Text>
                <Text style={Style.sub_text}>Course Duration : 1 Months (12 hrs)</Text>
                <Text style={Style.sub_text}>Course Fees : 2,000/-</Text>
                <Text style={Style.sub_text}>Certification : Certified by VES College of Pharmacy</Text>
            </View>
        )
    }
    return (
        <ScrollView style={{ flex: 1, }}>
            <Text style={Style.heading2}>VES DIGITAL ACADEMY</Text>
            <Text style={Style.heading1}>PHARMACY & SCIENCE</Text>
            <View style={Style.sub_module_view}>
                <TouchableOpacity
                    onPress={() => { setreg(!reg), setcontact(false), setcourse(false), setdetail(false), setopt(false), setresearch(false), setchem(false),setdrug(false) }}
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
                    onPress={() => { setreg(false), setcontact(false), setcourse(!course), setdetail(false), setopt(false), setresearch(false), setchem(false) ,setdrug(false)}}
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
                    onPress={() => { setreg(false), setcontact(false), setcourse(false), setdetail(false), setopt(!opt), setresearch(false), setchem(false) ,setdrug(false)}}
                    style={Style.button2}>
                    <Text style={Style.textb}>Optimizations Techniques Syllabus</Text>
                    <Text style={Style.icon}>{opt ? '-' : '+'}</Text>
                </TouchableOpacity>
                {
                    opt && (
                        <Optimization />
                    )
                }
                <TouchableOpacity
                    onPress={() => { setreg(false), setcontact(false), setcourse(false), setdetail(false), setopt(false), setresearch(!research), setchem(false),setdrug(false) }}
                    style={Style.button2}>
                    <Text style={Style.textb}>Academic Research Writing Syllabus</Text>
                    <Text style={Style.icon}>{research ? '-' : '+'}</Text>
                </TouchableOpacity>
                {
                    research && (
                        <Research />
                    )
                }
                <TouchableOpacity
                    onPress={() => { setreg(false), setcontact(false), setcourse(false), setdetail(false), setopt(false), setresearch(false), setchem(!chem) ,setdrug(false)}}
                    style={Style.button2}>
                    <Text style={Style.textb}>Analytical Chemistry Syllabus</Text>
                    <Text style={Style.icon}>{chem ? '-' : '+'}</Text>
                </TouchableOpacity>
                {
                    chem && (
                        <Chemistry />
                    )
                }
                 <TouchableOpacity
                    onPress={() => { setreg(false), setcontact(false), setcourse(false), setdetail(false), setopt(false), setresearch(false), setchem(false) ,setdrug(!drug)}}
                    style={Style.button2}>
                    <Text style={Style.textb}>Drug Discovery Syllabus</Text>
                    <Text style={Style.icon}>{drug ? '-' : '+'}</Text>
                </TouchableOpacity>
                {
                    drug && (
                        <Drug />
                    )
                }
                <TouchableOpacity
                    onPress={() => { setreg(false), setcontact(false), setcourse(false), setdetail(!detail), setopt(false), setresearch(false), setchem(false),setdrug(false) }}
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
                    onPress={() => { setreg(false), setcontact(!contact), setcourse(false), setdetail(false), setopt(false), setresearch(false), setchem(false),setdrug(false) }}
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
export default Pharmacy