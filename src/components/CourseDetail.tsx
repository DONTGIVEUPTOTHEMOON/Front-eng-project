import { CourseDTO } from '../types/dto'
import classes from './CourseDetail.module.css'
import Tag from './TagCourse'

interface ICourseProps {
  course: CourseDTO
}

const CourseDetail = ({ course }: ICourseProps) => {
  return (
    <div className={classes.container}>
      <div className={classes.metaData}>
        <p className={classes.author}>{course.author}</p>
        <p className={classes.dateAndTime}>
          {course.date} • {course.readingTime}
        </p>
      </div>
      <h2 className={classes.blogHeader}>{course.header}</h2>
      <p className={classes.description}>{course.description}</p>
      <div className={classes.tagContainer}>
        {course.tags.map((course) => {
          return <Tag key={course} tag={course} />
        })}
      </div>
    </div>
  )
}
export default CourseDetail
