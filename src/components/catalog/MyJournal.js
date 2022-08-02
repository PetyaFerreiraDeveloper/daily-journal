import React from 'react';
import Hero from '../Hero';
import Catalog from './Catalog';

import hero from '../../assets/hero.jpg';

const MyJournal = () => {
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
        <Catalog />
    </div>
  )
}

export default MyJournal