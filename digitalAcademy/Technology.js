import React, { useState } from "react";
import { Text, TouchableOpacity, ScrollView, View, Linking } from "react-native";
import Style from "./DigitalAcademy.style";
import Registration from "./Registration";
import ContactUs from "./ContactUs";

const Technology = () => {
    const [reg, setreg] = useState(false)
    const [course, setcourse] = useState(false)
    const [contact, setcontact] = useState(false)
    const [detail, setdetail] = useState(false)
    const [cpp, setcpp] = useState(false)
    const [python, setpython] = useState(false)
    const [ni, setni] = useState(false)

    const CourseList = () => {
        return (
            <View>
                <Text style={Style.heading2}>• C++ Programming </Text>
                <Text style={Style.sub_text}>Course Objective : </Text>
                <Text style={Style.sub_text}>1. To learn the fundamentals of C++ programming concepts & OOP. </Text>
                <Text style={Style.sub_text}>2. To learn various C++ techniques to implement Object Oriented Programming. </Text>
                <Text style={Style.sub_text}>3. To learn pointers,  Polymorphism and Templates through C++. </Text>
                <Text style={Style.heading2}>• Python Programming </Text>
                <Text style={Style.sub_text}>Course Objective : </Text>
                <Text style={Style.sub_text}>1. Basics of Python programming including data types,operators,conditional statements and input output functions in Python </Text>
                <Text style={Style.sub_text}>2. List,Tuples,Set,Dictionary,String ,Array and Functions</Text>
                <Text style={Style.sub_text}>3. Object Oriented Programming using Python</Text>
                <Text style={Style.sub_text}>4.GUI and Data visualization using Matplotlib and Pandas.</Text>
                <Text style={Style.heading2}>• NI Lab View </Text>
                <Text style={Style.sub_text}>Course Objective : </Text>
                <Text style={Style.sub_text}>The course is aimed: </Text>
                <Text style={Style.sub_text}>To study graphical programming language for creating simulation and custom applications that interact with real-world data or signals in fields of science and engineering. </Text>


            </View>
        )
    }

    const Cpp = () => {
        return (
            <View>
                <Text style={Style.heading2}>C++ Programming – Course Syllabus</Text>
                <Text style={Style.heading1}>Modules :</Text>
                <Text style={Style.sub_text}>1.Programing Fundamentals algorithm and Flow Chart</Text>
                <Text style={Style.sub_text}>C++ Language Fundamentals:</Text>
                <Text >Data types, Operators, Preprocessor directives, Declarations, Input & Output, control structures, structures,functions and arrays</Text>
                <Text />
                <Text>Functions: Concept of function in C++, function prototypes in C++, function with parameters, Returning values From Functions. Reference Arguments, Overloaded Function, Default Arguments. Returning By Reference.</Text>
                <Text style={Style.sub_text}>Structures in C++, Array of objects in structures. </Text>
                <Text>Object  oriented  programming,  Object  And  Classes:  -Characteristics of  object oriented   programming,   Making   sense   of   core   object   concepts. (Encapsulation Abstraction, Polymorphism, Classes, Massages Association, Inheritance) Implementation of Class in C++, C++ Objects As Physical Object, C++ Object As Data Types, Public Private and Protected types. Constructor, Object As Function Arguments. The Default constructor, Copy Constructor, Returning Object From Function. Structures And Classes. Inline functions,  static,  virtual  and  friend  function. Classes  Objects  And  Memory  Static Class Data. Const Data. Const And Classes.</Text>
                <Text style={Style.sub_text}>2.Arrays and String: Arrays Fundamentals. Arrays as Class Member Data. Arrays Of Object. String. The Standard C++ String Class.</Text>
                <Text>Operator   Overloading:   Overloading   Unary   Operators.   Overloading.   Binary Operators.  Data  Conversion.  Pitfalls  of  Operators Overloading  And  Conversion Keywords Explicit And Mutable.</Text>
                <Text />
                <Text>Inheritance: Concept of Inheritance, Derived Class And Base Class, Derived Class Constructors, Overriding Member Function, Class Hierarchies, Public  And Private  Inheritance,  Levels  Of  Inheritance,  Multiple  Inheritance,  Ambiguity  In  Multiple Inheritance,   Aggregation: Classes   Within   Classes,   Inheritance   And   program Development</Text>
                <Text style={Style.sub_text}>3.Pointer.  Addresses  And  pointer,  The  Address-Of  Operator  “&”,  Pointer  And Arrays, Pointer And Function, Pointer And C- Types String, Memory Management: New And Delete operator, Pointers to Objects, Debugging pointers.</Text>
                <Text>Virtual Function and Polymorphism Virtual Function, Assignment And Copy Initialization, this Pointer, Dynamic Type Information </Text>
                <Text />
                <Text>Templates And Exceptions Function Templates, Class Templates Exceptions, File Handling in C++</Text>
                <Text style={Style.heading1}>System Requirements : </Text>
                <Text style={Style.sub_text}>Any system with minimum 2GB RAM & must support C++ compiler. If the system is not available / supportive in such a case, can use an Online c++ compiler.</Text>
                <Text style={Style.sub_text}>Hands On Lab work</Text>

                <Text style={Style.sub_text}>• To write basic programs in C++</Text>
                <Text>1. Mathematical Operations</Text>
                <Text>2. String Operations</Text>
                <Text>3. Loops decisions and statement Types.</Text>
                <Text>4. Array Operations</Text>
                <Text>5. Matrix Operations</Text>

                <Text style={Style.sub_text}>• Functions in C++</Text>
                <Text>1. Simple Functions in C++</Text>
                <Text>2. Function call by value call by reference</Text>
                <Text>3. Function Overloading</Text>
                <Text>4. Simple Application Using Functions</Text>

                <Text style={Style.sub_text}>• Structures in C++</Text>
                <Text>1. My First Structure in C+</Text>
                <Text>2. Array of Structure Objects</Text>
                <Text>3. Structure within the Structure</Text>

                <Text style={Style.sub_text}>• Classes and Objects in C++</Text>
                <Text>1. Simple Class in C++</Text>
                <Text>2. Public Private and protected Classes</Text>
                <Text>3. Polymorphism in C++</Text>
                <Text>4. Operator Overloading in C++ </Text>
                <Text>5. Various inheritance in C++</Text>

                <Text style={Style.sub_text}>• Structures in C++</Text>
                <Text>1. Default Constructor</Text>
                <Text>2. Copy Constructor</Text>
                <Text>3. Destructor</Text>
                <Text style={Style.sub_text}>• Program Using Pointers</Text>
                <Text style={Style.sub_text}>• File Handling in C++</Text>
                <Text style={Style.sub_text}>Reference Material :</Text>
                <Text>1. Object Oriented Programming in-C++ By Robert Lafore Techmedia Publication</Text>
                <Text>2. Object Oriented Programming with C++ E Balgurusammy 4ed Tata Mcgrawhill Publication</Text>
                <Text>3. The Complete Reference C ++ – By Herbert Sehlidt Tata Megraw-hill publicationr</Text>
                <Text>4. Object Oriented Programming and C++ R. Rajaram New Age International Publishers 2nd</Text>

                <TouchableOpacity
                    onPress={() => { Linking.openURL('https://www.w3schools.com/cpp/') }}>
                    <Text style={{ color: 'blue' }}>5. https://www.w3schools.com/cpp/</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => { Linking.openURL('https://www.geeksforgeeks.org/c-plus-plus/') }}>
                    <Text style={{ color: 'blue' }}>6. https://www.w3schools.com/cpp/</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => { Linking.openURL('https://www.javatpoint.com/cpp-tutorial') }}>
                    <Text style={{ color: 'blue' }}>7. https://www.javatpoint.com/cpp-tutorial/</Text>
                </TouchableOpacity>

            </View>
        )
    }
    const Python = () => {
        return (
            <View>
                <Text style={Style.heading2}>Python Programming – Course Syllabus</Text>
                <Text style={Style.heading1}>Modules :</Text>
                <Text style={Style.sub_text}>1.Basics of Python</Text>
                <Text>Introduction, Features, Python building blocks – Identifiers, Keywords, Indention, Variables and Comments, Basic data types (Numeric, Boolean, Compound) Operators: Arithmetic, comparison, relational, assignment, logical, bitwise, membership, identity operators, operator precedence Control flow statements: Conditional statements (if, if…else, nested if) Looping in Python (while loop, for loop, nested loops) Loop manipulation using continue, pass, break. Input/output Functions. a) Built -in functions in python b) Defining function, calling function, returning values, passing parameters c) Nested and Recursive functions d) Anonymous Functions (Lambda, Map, Reduce, Filter)</Text>
                <Text style={Style.sub_text}>2.Advanced data types and Overview of Object -oriented programming</Text>
                <Text>Lists: a) Defining lists, accessing values in list, deleting values in list, updating lists b) Basic list operations c) Built-in list functions Tuples: a) Accessing values in Tuples, deleting values in Tuples, and updating Tuples b) Basic Tuple operations c) Built-in Tuple functions Dictionaries: a) Accessing values in Dictionary, deleting values in Dictionary, and updating Dictionary b) Basic Dictionary operations c) Built-in Dictionary functions Sets: a) Accessing values in Set, deleting values in Set, updating Sets b) Basic Set operations, c) Built-in Set functions Strings: a) String initialization, Indexing, Slicing, Concatenation, Membership & Immutability b) Built-in String functions Arrays: a) Working with Single dimensional Arrays: Creating, importing, Indexing, Slicing, copying and processing array arrays. b) Working with Multi-dimensional Arrays using Numpy: Mathematical operations, Matrix operations, aggregate and other Built-in functions  </Text>
                <Text />
                <Text>Overview of Object -oriented programming, Creating Classes and Objects, Self-Variable, Constructors, Inner class, Static method, Namespaces. Inheritance: Types of Inheritance (Single, Multiple, Multi -level, Hierarchical), Super() method, Constructors in inheritance, operator overloading, Method overloading, Method overriding.</Text>
                <Text style={Style.sub_text}>3.GUI and Data visualization</Text>
                <Text>Graphical User interface,Visualization using Matplotlib: Matplotlib with Numpy, working with plots (line plot, bar graph, histogram, scatter plot, area plot, pie chart etc.), working with multiple figures</Text>
                <Text />
                <Text>Introduction to Pandas, importing data into Python, series, data frames, indexing data frames, basic operations with data frames.</Text>
                <Text style={Style.heading1}>System Requirements :</Text>
                <Text>1. Operating system: Linux- Ubuntu 16.04 to 17.10, or Windows 7 to 10, with 2GB RAM (4GB preferable</Text>
                <Text>2.Install Python 3.6: 1. To follow the installation procedure, you need to be connected to the Internet.</Text>
                <TouchableOpacity
                    onPress={() => Linking.openURL('https://www.python.org/downloads/release/python-368/')}>
                    <Text style={Style.link2}>Visit https://www.python.org/downloads/release/python-368/</Text>
                </TouchableOpacity>
                <Text>3. Notepad ++</Text>
                <Text>4. Python IDEs like IDLE, Pycharm, Pydev, Netbeans or Eclipse</Text>
                <Text style={Style.sub_text}>Reference Material :</Text>
                <Text>1. Dr. R. Nageswara Rao,” Core Python Programming” , Dreamtech Press, Wiley Publication</Text>
                <Text>2. M. T. Savaliya , R. K. Maurya, “Programming through Python”, StarEdu Solutions</Text>
                <Text>3. E Balagurusamy, “Introduction to computing and problem-solving using python”, McGraw Hill Publication.</Text>
                <Text style={Style.sub_text}>References:</Text>
                <Text>1. Zed A. Shaw, “Learn Python 3 the Hard Way”, Zed Shaw’s Hard Way Series.</Text>
                <Text>2. Martin C. Brown,” Python: The Complete Reference”, McGraw-Hill Publication.</Text>
                <Text>3. Paul Barry,” Head First Python”, 2nd Edition, O’Reilly Media, Inc</Text>
                <Text style={Style.sub_text}>Online resources:</Text>
                <TouchableOpacity
                    onPress={() => Linking.openURL('https://docs.scipy.org/doc/numpy/user/quickstart.html')}>
                    <Text style={Style.link2}>1. https://docs.scipy.org/doc/numpy/user/quickstart.html/</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => Linking.openURL('https://matplotlib.org/tutorials/')}>
                    <Text style={Style.link2}>2. https://matplotlib.org/tutorials/</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => Linking.openURL('https://pandas.pydata.org/docs/getting_started/')}>
                    <Text style={Style.link2}>3. hhttps://pandas.pydata.org/docs/getting_started/</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => Linking.openURL('https://www.w3schools.com/python/python_reference.asp')}>
                    <Text style={Style.link2}>4. https://www.w3schools.com/python/python_reference.asp</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => Linking.openURL('https://www.pdfdrive.com/python-pythons-companion-a-step-by-step-guide-for-beginners-to-start-coding-today-e176104699.html')}>
                    <Text style={Style.link2}>5. https://www.pdfdrive.com/python-pythons-companion-a-step-by-step-guide-for-beginners-to-start-coding-today-e176104699.html</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => Linking.openURL('https://www.guru99.com/python-tutorials.html')}>
                    <Text style={Style.link2}>6. https://www.guru99.com/python-tutorials.html</Text>
                </TouchableOpacity>
            </View>
        )
    }
    const Ni = () => {
        return (
            <View>
                <Text style={Style.heading2}>NI Lab View – Course Syllabus</Text>
                <Text style={Style.heading1}>Modules :</Text>
                <Text>1. Navigating LabVIEW,Troubleshooting & Debugging</Text>
                <Text>2. Relating Data</Text>
                <Text>3. Implementing a VI</Text>
                <Text>4. Modular Application</Text>
                <Text>5. Managing Resources</Text>
                <Text>6. Error Handling</Text>
                <Text>7. File I/O VIs</Text>
                <Text>8. Creating & Distribution Application</Text>
                <Text style={Style.heading1}>System Requirements :</Text>
                <Text>PC/Laptop with NI LabVIEW installed</Text>
                <Text style={Style.sub_text}>Reference Material :</Text>
                <Text>1. Jovitha Jerome, ―Virtual Instrumentation‖, PHI, 2018.</Text>
                <Text>2. Robert Bishop, ―Learning with LabVIEW TM 7 express‖, Pearson Education, 2005.</Text>
                <Text>3. Gupta S, ―Virtual Instrumentation Using LabVIEW‖, Tata McGraw Hill Publishing Company Limited.</Text>
                <Text>4. Labview for everyone, – Lisa K. Wells & Jettrey Travis Prentice Hall, New Jersey, 1997</Text>
                <Text>5. LabVIEW users manual.</Text>
            </View>
        )
    }
    const Detail = () => {
        return (
            <View>
                <Text style={Style.heading1}>• C++ Programming</Text>
                <Text style={Style.sub_text}>Course Duration : 2 Months (32hrs)</Text>
                <Text style={Style.sub_text}>Course Fees : 2,500/-</Text>
                <Text style={Style.sub_text}>Certification : Certified by VES Institute of Technology</Text>
                <Text style={Style.heading1}>• Python Programming </Text>
                <Text style={Style.sub_text}>Course Duration : 2 Months (32hrs)</Text>
                <Text style={Style.sub_text}>Course Fees : 2,500/-</Text>
                <Text style={Style.sub_text}>Certification : Certified by VES Institute of Technology</Text>
                <Text style={Style.heading1}>• NI Lab View </Text>
                <Text style={Style.sub_text}>Course Fees : 2,500/-</Text>
                <Text style={Style.sub_text}>Certification : Certified by VES Institute of Technology</Text>
            </View>
        )
    }
    return (
        <ScrollView style={{ flex: 1, }}>
            <Text style={Style.heading2}>VES DIGITAL ACADEMY</Text>
            <Text style={Style.heading1}>DIGITAL & TECHNOLOGY</Text>
            <View style={Style.sub_module_view}>
                <TouchableOpacity
                    onPress={() => { setreg(!reg), setcontact(false), setcourse(false), setdetail(false), setcpp(false), setpython(false), setni(false) }}
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
                    onPress={() => { setreg(false), setcontact(false), setcourse(!course), setdetail(false), setcpp(false), setpython(false), setni(false) }}
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
                    onPress={() => { setreg(false), setcontact(false), setcourse(false), setdetail(false), setcpp(!cpp), setpython(false), setni(false) }}
                    style={Style.button2}>
                    <Text style={Style.textb}>C++ Programming Syllabus</Text>
                    <Text style={Style.icon}>{cpp ? '-' : '+'}</Text>
                </TouchableOpacity>
                {
                    cpp && (
                        <Cpp />
                    )
                }
                <TouchableOpacity
                    onPress={() => { setreg(false), setcontact(false), setcourse(false), setdetail(false), setcpp(false), setpython(!python), setni(false) }}
                    style={Style.button2}>
                    <Text style={Style.textb}>Python Programming – Course Syllabus</Text>
                    <Text style={Style.icon}>{python ? '-' : '+'}</Text>

                </TouchableOpacity>
                {
                    python && (
                        <Python />
                    )
                }
                <TouchableOpacity
                    onPress={() => { setreg(false), setcontact(false), setcourse(false), setdetail(false), setcpp(false), setpython(false), setni(!ni) }}
                    style={Style.button2}>
                    <Text style={Style.textb}>NI Lab View Syllabus</Text>
                    <Text style={Style.icon}>{ni ? '-' : '+'}</Text>
                </TouchableOpacity>
                {
                    ni && (
                        <Ni />
                    )
                }
                <TouchableOpacity
                    onPress={() => { setreg(false), setcontact(false), setcourse(false), setdetail(!detail), setcpp(false), setpython(false), setni(false) }}

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
                    onPress={() => { setreg(false), setcontact(!contact), setcourse(false), setdetail(false), setcpp(false), setpython(false), setni(false) }}
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
export default Technology