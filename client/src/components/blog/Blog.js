import React, {useContext, useRef} from 'react';

import { AuthContext } from '../../contexts/AuthContext';

import BlogList from './BlogList';
import Hero from '../Hero';
import hero from '../../assets/hero.jpg'

const Blog = () => {
  const { user } = useContext(AuthContext);
  const blogSection = useRef(null);


  return (
    <div>
        <Hero 
          articleTitle={"Read all blog posts below"}
          description={
            "Every year, tens of thousands of people get into a famous college of their choice. It's not unlikely that someone will get in, it's simply not certain that you will. "
          }
          label={"Write a blog post"}
          navigateTo={user.email ? '/create' : '/register'}
          imageUrl={hero}
          className={"bg-heroGreen text-white"}
          imageAlt={"laptop, computer and notebook with a pen on top of a desk"}
          first={blogSection}

        />
        <BlogList blogSection={blogSection}/>

    </div>
  )
}

export default Blog