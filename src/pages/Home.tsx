import usePosts from '../hooks/useContents'
import classes from './Home.module.css'
import Slider from '../components/sliders/Slider'
import SignUp from '../components/SignUp'
import CourseInhome from '../components/CourseInhome'
import Interviwes from '../components/Interviwes'

const Home = () => {
  const { isLoading } = usePosts()

  if (isLoading) return <h1 style={{ textDecoration: 'none', color: ' #6666dc' }}>Loading...</h1>

  return (
    <div>
      <div className={classes.container1}>
        <Slider />
        <SignUp />
      </div>
      <div>
        <CourseInhome />
      </div>
      <div>
        <Interviwes />
      </div>
    </div>
  )
}

export default Home
