import classes from './TagCourse.module.css'

interface ITagProps {
  tag: string
}

const Tag = ({ tag }: ITagProps) => {
  return <div className={classes.tag}>#{tag}</div>
}
export default Tag
