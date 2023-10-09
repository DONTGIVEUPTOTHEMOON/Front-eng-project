import usePosts from '../hooks/useContents'
import classes from './Home.module.css'
import SignUp from '../components/SignUp'
import Slider from '../components/sliders/Slider'

const Home = () => {
  const { isLoading } = usePosts()

  if (isLoading) return <h1 style={{ textDecoration: 'none', color: ' #6666dc' }}>Loading...</h1>

  return (
    <div className={classes.container}>
      <Slider />
      <SignUp />
    </div>
  )
}

export default Home
