import React from "react";
import Button from "./Button";

const Article = (props) => {
    const {articleTitle, description, navigateTo, label, className, buttonColor} = props
  return (
    <article className={`${className} py-20 flex flex-col gap-y-10 items-center -mx-[32px] lg:-mx-[96px] 2xl:-mx-[128px] px-8 md:px-16 2xl:px-32`}>
      <h2 className="text-3xl">{articleTitle}</h2>
      <p>{description}</p>
      <Button 
        label={label}
        nav={navigateTo}
        className={buttonColor}
      />
    </article>
  );
};

export default Article;
