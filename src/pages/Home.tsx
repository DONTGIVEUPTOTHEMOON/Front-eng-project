import usePosts from '../hooks/useContents'
import classes from './Home.module.css'
import Slider from '../components/sliders/Slider'
import SignUp from '../components/SignUp'
import CourseInhome from '../components/CourseInhome'
import Interviwes from '../components/Interviwes'
import Footer from '../components/Footer'

const Home = () => {
  const { isLoading } = usePosts()

  if (isLoading) return <h1 style={{ textDecoration: 'none', color: ' #6666dc' }}>Loading...</h1>

  return (
    <div className={classes.feedContainer}>
      <div className={classes.container}>
        <Slider />
        <SignUp />
      </div>
      <div>
        <CourseInhome />
      </div>
      <div>
        <Interviwes />
      </div>
      <Footer />
    </div>
  )
}

export default Home
