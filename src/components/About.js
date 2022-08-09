import React, { useRef } from 'react';

import Hero from './Hero';
import ArticleImage from './common/ArticleImage';

import hero from '../assets/hero.jpg';
import safe from '../assets/safe.jpg'

const About = () => {
  const aboutSection = useRef(null);

  return (
    <div>
        <Hero 
          articleTitle={"About Us"}
          description={
            "My Daily Journal is the one place you want to stop by everyday. This is the place where you can be yourself."
          }
          label={"Start your journal"}
          navigateTo={'/register'}
          imageUrl={hero}
          className={"bg-heroGreen text-white"}
          imageAlt={"laptop, computer and notebook with a pen on top of a desk"}
          first={aboutSection}

        />
        <ArticleImage
          articleTitle={"We are all about providing safe space for you"}
          description={
            "You might be writing to record your daily experiences and emotions, to plan and organize your day and thoughts, to keep your creativity going or to express your dreams and desires. My Daily Journal is the place where you can do all of these and more."
          }
          imageUrl={safe}
          imageAlt={"tablet showing username and password"}
          label={"Get Started"}
          navigateTo={'/register'}
          buttonColor={'bg-dark-green border-darker-green md:self-start'}
          className="md:flex-row"
          aboutSection={aboutSection}

        />
    </div>
  )
}

export default About