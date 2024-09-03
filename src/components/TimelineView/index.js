import {Chrono} from 'react-chrono'
import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  const onRenderTimelineCardBasedOnCategory = () => {
    return timelineItemsList.map(each => {
      if (each.categoryId === 'COURSE') {
        return <CourseTimelineCard courseCard={each} key={each.id} />
      }
      if (each.categoryId === 'PROJECT') {
        return <ProjectTimelineCard projectCard={each} key={each.id} />
      }
      return null
    })
  }

  return (
    <div className="app-cont">
      <h1 className="title">
        MY JOURNEY OF <span className="sub-title">CCBP 4.0</span>
      </h1>

      <div className="ccbp-timeline-cont">
        <Chrono
          items={timelineItemsList}
          mode="VERTICAL_ALTERNATING"
          theme={{
            primary: '#0967d2',
            secondary: 'white',
            cardBgColor: 'white',
            cardForeColor: 'violet',
            titleColor: 'black',
            titleColorActive: 'red',
          }}
        >
          {onRenderTimelineCardBasedOnCategory()}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
