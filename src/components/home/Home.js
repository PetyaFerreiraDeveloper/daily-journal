import React from 'react';
import Hero from '../Hero';
import Article from '../common/Article';
import ArticleImage from '../common/ArticleImage';

import hero from '../../assets/hero.jpg';
import free from '../../assets/free.jpg';
import safe from '../../assets/safe.jpg';

const Home = () => {
  return (
    <div>
         <Hero 
          articleTitle={"Journal Every Day"}
          description={
            "This is your private sacred place. Here you can share your thoughts, plans and dreams."
          }
          label={"Start your journal"}
          navigateTo={'/register'}
          imageUrl={hero}
          className={"bg-heroGreen text-white"}
          imageAlt={"laptop, computer and notebook with a pen on top of a desk"}
        />
        <Article
          articleTitle={"Why are you writing?"}
          description={
            "You might be writing to record your daily experiences and emotions, to plan and organize your day and thoughts, to keep your creativity going or to express your dreams and desires. My Daily Journal is the place where you can do all of these and more."
          }
          label={"Get Started Now"}
          className=""
        />
        <ArticleImage
          articleTitle={"Your information and privacy are safe with us"}
          description={
            "You might be writing to record your daily experiences and emotions, to plan and organize your day and thoughts, to keep your creativity going or to express your dreams and desires. My Daily Journal is the place where you can do all of these and more."
          }
          label={"Get Started"}
          imageUrl={safe}
          className="md:flex-row"
          imageAlt={"tablet showing username and password"}
        />
        <ArticleImage
          articleTitle={"Enjoy the freedom and write from anywhere, whenever you feel like it"}
          description={
            "Your daily Journal is always at hand. You can write on your mobile, tablet or your computer. Just grab the opportunity and use it."
          }
          label={"Join the ride"}
          imageUrl={free}
          className="md:flex-row-reverse"
          imageAlt={"tablet showing username and password"}
        />
    </div>
  )
}

export default Home