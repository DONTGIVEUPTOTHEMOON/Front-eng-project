import usePosts from '../hooks/useContents'
import classes from '../pages/CourseDrawing.module.css'

const CourseDrawing = () => {
  const { isLoading } = usePosts()

  if (isLoading) return <h1 style={{ textDecoration: 'none', color: ' #6666dc' }}>Loading...</h1>

  return (
    <div className={classes.container}>
      <div>
        <div className={classes.containerIntro}>
          <div className={classes.cardIntro}>
            <div className={classes.cardImg}>
              <img
                className={classes.img}
                src="https://images.unsplash.com/photo-1556565681-67b9cd907d20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
              />
              <div className={classes.formcontainer}>
                <div>
                  <p className={classes.fontmian}>Community</p>
                  <p className={classes.font}>Space for share knowledge</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseDrawing
