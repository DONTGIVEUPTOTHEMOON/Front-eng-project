import usePosts from '../hooks/useContents'
import classes from '../pages/CourseVisual .module.css'

const CourseVisual = () => {
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
                src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80&w=2845&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <div className={classes.formcontainer}>
                <div>
                  <p className={classes.fontmian}></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseVisual