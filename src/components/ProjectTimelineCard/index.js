// Write your code here

import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {projectCard} = props
  const {projectTitle, imageUrl, projectUrl, description, duration} =
    projectCard

  return (
    <div className="course-card">
      <img src={imageUrl} alt="project" className="project-img" />
      <div className="title-duration-cont">
        <h1 className="project-title">{projectTitle}</h1>
        <div className="duration-cont">
          <AiFillCalendar />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <a href={projectUrl} className="link">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
