import React from 'react'
import CreateEntry from './CreateEntry';
import Hero from '../Hero';

import hero from '../../assets/hero.jpg';

const Create = () => {
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
        imageAlt={"laptop, computer and notebook with a pen on top of a desk"} />
        <CreateEntry />
    </div>
  )
}

export default Create