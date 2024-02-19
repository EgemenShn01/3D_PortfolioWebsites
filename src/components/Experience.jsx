import { VerticalTimeline, VerticalTimelineElement  } from "react-vertical-timeline-component"
import {motion} from "framer-motion"
import  'react-vertical-timeline-component/style.min.css'

import {styles} from '../styles'
import {experiences} from '../constants'
import {SectionWrapper} from '../hoc'
import { textVariant } from "../utils/motion"

const ExperienceCard = ({experience}) =>  (
 
           <VerticalTimelineElement
           contentStyle={{background:'#81848f', color:"BLACK"}}
           contentArrowStyle={{borderRight:'8px Solid black'}}
           date={experience.date}
           iconStyle={{background:experience.İconbg}}
           icon={
                <div className="flex shadow-sm shadow-black bg-white rounded-full justify-center items-center w-full h-full">
                    <img
                    src={experience.icon}
                    alt={experience.comapany_name}
                    className="w-[60%] h-[60%] object-contain  "
                    
                      />
                </div>
           }
           >
            
               <div className="  ">
                <h3 className="text-white text-[24px] font-bold">
                     {experience.title}
                </h3>
                <p className="text-black text-[16px] underline  font-semibold">
                  {experience.company_name}
                  </p>
               </div>
               <ul className="mt-5 list-disc ml-5 space-y-2 ">
                {experience.points.map((point, index)=>(
                  <li key={`experience-point-${index}`}
                  className="text-white-100 text-[14px] pl-1 tracking-wider"
                  >
                    {point}
                  </li>
                ))}

               </ul>
                          </VerticalTimelineElement>       
)

const Experience = () => {
  return (
    <>
    <motion.div variants={textVariant}>
    <p className={styles.sectionSubText}>What Have Done So Far</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
    </motion.div>
    <div className="mt-20 flex flex-col">
          <VerticalTimeline>
            {experiences.map((experience , index) => 
            <ExperienceCard key={index} experience={experience} />
            )} 
          </VerticalTimeline>
    </div>
    </>
  )
}

export default SectionWrapper(Experience , "experience")