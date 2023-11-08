import usePosts from '../hooks/useContents'
import classes from './Home.module.css'
import Slider from '../components/home/sliders/Slider'
import SignUp from '../components/signup/SignUp'
import CourseInhome from '../components/home/sliders/CourseInhome'
import Interviwes from '../components/interviwes/Interviwes'
import Footer from '../components/home/sliders/Footer'
import RatingInhome from '../components/home/sliders/RatingInhome'

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
        <RatingInhome />
      </div>
      <Footer />
    </div>
  )
}

export default Home
