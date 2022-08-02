import React from 'react';
import Hero from './Hero';
import hero from '../assets/hero.jpg'

const About = () => {
  return (
    <div>
        <Hero 
          articleTitle={"About Us"}
          description={
            "This is About us page"
          }
          label={"Start your journal"}
          navigateTo={'/register'}
          imageUrl={hero}
          className={"bg-heroGreen text-white"}
          imageAlt={"laptop, computer and notebook with a pen on top of a desk"}
        />
    </div>
  )
}

export default About