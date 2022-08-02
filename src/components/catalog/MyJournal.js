import React from 'react';
import Hero from '../Hero';
import Catalog from './JournalList';

import hero from '../../assets/hero.jpg';


const MyJournal = ( props ) => {
  const {entries} = props;
  return (
    <div>
        <Hero 
            articleTitle={"My Journal"}
            description={
            "Write every day"
            }
            label={"Add an entry"}
            navigateTo={'/register'}
            imageUrl={hero}
            className={"bg-heroGreen text-white"}
            imageAlt={"laptop, computer and notebook with a pen on top of a desk"}
        />
        <Catalog entries={entries}/>
    </div>
  )
}

export default MyJournal