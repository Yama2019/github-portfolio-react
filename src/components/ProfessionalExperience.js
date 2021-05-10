import React from "react";
import TopicSection from '../containers/TopicSection'
import ExperienceItem from './ExperienceItem';
import config from '../config';
const dictionary = (require("../lang/" + config.lang + ".js")).default;

function ProfessionalExperience(props){
    const titulo = dictionary.professional_experience;

    return (
        <div className="ProfessionalExperience mdc-layout-grid__cell--span-12">
            <TopicSection title={titulo}>
                {
                    /* @Possible_Enhance
                    Podría poner esta sección en otro componente 
                    llamado RowGenerator, pero estaría muy acoplado al 
                    componente ExperienceItem porque compartirían 
                    las mismas propiedades y no podria ser usado por 
                    otro componente
                    */
                    props.data.map(content =>{
                        return (
                            <ExperienceItem 
                                title={content.title}
                                date={content.date}
                                entity={content.entity}
                                activities={content.activities}
                            />
                        )
                    })
                }
            </TopicSection>
        </div>
    )
}


export default ProfessionalExperience;