import useContents from '../hooks/useContents'
import Content from '../components/Content'
import classes from '../pages/Home.module.css'

const Home = () => {
  const imageUrl =
    'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80'
  const { contents, isLoading } = useContents()

  if (isLoading) return <h1>Loading...</h1>

  console.log(contents)
  return (
    <div>
      <div>
        <img src={imageUrl} alt="intro of commu page" />
      </div>

      <div className={classes.feedContainer}>
        <h2>Content</h2>
        {contents &&
          contents.data.map((content) => {
            return <Content key={content.id} content={content} />
          })}
      </div>
    </div>
  )
}

export default Home
