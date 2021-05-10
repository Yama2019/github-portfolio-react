import React from 'react';
import TopicSection from '../containers/TopicSection';
import EducationItem from './EducationItem';
import config from '../config';
const dictionary = (require("../lang/" + config.lang + ".js")).default;

function Education(props){
    const titulo= dictionary.education;
    return (
        <div className="Education mdc-layout-grid__cell--span-12">
            <TopicSection title={titulo}>
                {
                    /* @Possible_Enhance
                       Mirar el componente ProfessionalExperience
                    */
                    props.data.map(content =>{
                        return (
                            <EducationItem 
                                title={content.title}
                                date={content.date}
                                entity={content.entity}
                                city={content.city}
                            />
                        )
                    })
                }
            </TopicSection>
        </div>
    )
}

export default Education;