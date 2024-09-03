import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'
const CourseTimelineCard = props => {
  const {courseCard} = props
  const {courseTitle, description, duration, tagsList} = courseCard

  return (
    <div className="course-card">
      <div className="title-duration-cont">
        <h1 className="course-title">{courseTitle}</h1>
        <div className="duration-cont">
          <AiFillClockCircle />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <div className="tags-cont">
        {tagsList.map(each => (
          <p className="tag" key={each.id}>
            {each.name}
          </p>
        ))}
      </div>
    </div>
  )
}

export default CourseTimelineCard
