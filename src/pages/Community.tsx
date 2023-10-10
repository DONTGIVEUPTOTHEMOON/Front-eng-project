import useContents from '../hooks/useContents'
import Content from '../components/Content'
import classes from '../pages/Community.module.css'
import Create from '../components/Create'

const Home = () => {
  const { contents, isLoading } = useContents()

  if (isLoading) return <h1>Loading...</h1>

  console.log(contents)
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
                  <p className={classes.fontmian}>Content</p>
                  <p className={classes.font}>Spaec for share knowrage</p>
                </div>
                <div>
                  <Create />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.containerContent}>
        <div className={classes.cardContent}>
          {contents &&
            contents.data.map((content) => {
              return <Content key={content.id} content={content} />
            })}
        </div>
      </div>
    </div>
  )
}

export default Home
