import React from "react";
import Marketing from "./Marketing";
import Technology from "./Technology";
import Skill from "./Skill";
import Pharmacy from "./Pharmacy";
import Management from "./Management";

const DigitalAcademyDetail = ({ route }) => {
    const { itemTitle } = route.params;
        if (itemTitle == 'Marketing') {
            return<Marketing />
        }
        else if (itemTitle == 'Technology') {
            return<Technology />
        }
        else if (itemTitle == 'Skill') {
            return<Skill />
        }
        else if (itemTitle == 'Pharmacy') {
           return <Pharmacy />
        }
        else if (itemTitle == 'Management') {
            return<Management />
        }
        else{
            return null
        }

}
export default DigitalAcademyDetail