import usePosts from '../hooks/useContents'
import classes from './Home.module.css'
import Slider from '../components/slidersInHome/Slider'
import SignUp from '../components/home/SignUp'
import CourseInhome from '../components/home/courseInHome/CourseInhome'
import Interviwes from '../components/home/Interviwes'
import Footer from '../components/home/Footer'
import RatingInhome from '../components/home/RatingInhome'

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
