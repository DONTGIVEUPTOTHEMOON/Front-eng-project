import usePosts from '../hooks/useContents'
import classes from '../pages/CourseCon.module.css'

const CourseCon = () => {
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
                src="https://plus.unsplash.com/premium_photo-1661335257817-4552acab9656?auto=format&fit=crop&q=80&w=2942&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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

export default CourseCon
