import React from "react";
import Hero from "../Hero";

import hero from '../../assets/hero.jpg';
import CreateForm from "./CreateForm";

const CreateEntry = () => {
  return (
    <div>
      <Hero
        articleTitle={"Creaty entry"}
        description={"What happened today"}
        label={"Start your journal"}
        navigateTo={"/create-form"}
        imageUrl={hero}
        className={"bg-heroGreen text-white"}
        imageAlt={"laptop, computer and notebook with a pen on top of a desk"}
      />
      <CreateForm />
    </div>
  );
};

export default CreateEntry;
