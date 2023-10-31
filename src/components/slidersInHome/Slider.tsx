import { useState, useEffect } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { sliderData } from '../../constant/slider-data'
import classes from './Slider.module.css'

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slideLength = sliderData.length

  const autoScroll = true
  let slideInterval: NodeJS.Timeout
  let intervalTime = 5000

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1)
    console.log('next')
  }

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1)
    console.log('prev')
  }

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime)
  }

  useEffect(() => {
    setCurrentSlide(0)
  }, [])

  useEffect(() => {
    setCurrentSlide(0)
    if (autoScroll) {
      auto()
    }
    return () => clearInterval(slideInterval)
  }, [currentSlide])

  return (
    <div className={classes.slider}>
      <div className={classes.slide}>
        <AiOutlineArrowLeft className={classes.arrow} onClick={prevSlide} />
        <AiOutlineArrowRight className={classes.arrow} onClick={nextSlide} />
        {sliderData.map((slide, index) => {
          return (
            <div className={index === currentSlide ? 'slide current' : 'slide'} key={index}>
              {index === currentSlide && (
                <div>
                  <img src={slide.Image} alt="slide" className="image" />
                  <div className={classes.content}>
                    <h2>{slide.heading}</h2>
                    <p>{slide.desc}</p>
                    <hr />
                    <button className="--btn --btn-primary">Get Started</button>
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Slider
