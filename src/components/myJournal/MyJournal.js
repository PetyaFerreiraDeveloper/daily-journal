import React from 'react';


import Hero from '../Hero';
import JournalList from './JournalList';

import hero from '../../assets/hero.jpg';


const MyJournal = () => {
  return (
    <div>
        <Hero 
            articleTitle={"My Journal"}
            description={
            "When it comes to what you want to write about, the possibilities are limitless. You can write about your day, your thoughts and emotions, or something that inspired you."
            }
            label={"Start writing"}
            navigateTo={'/create'}
            imageUrl={hero}
            className={"bg-heroGreen text-white"}
            imageAlt={"laptop, computer and notebook with a pen on top of a desk"}
        />
        <JournalList />
    </div>
  )
}

export default MyJournal