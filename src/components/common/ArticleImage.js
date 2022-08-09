import React from "react";
import Button from "./Button";

const ArticleImage = (props) => {
  const { articleTitle, description, label, buttonColor, navigateTo, imageUrl, imageAlt, className, aboutSection } =
    props;
  return (
    <article ref={aboutSection}
      className={`flex flex-col py-24  justify-between items-center gap-y-16 md:gap-x-10  md:place-items-center whitespace-pre-line ${className}`}
    >
      <div className="flex flex-col justify-center items-center gap-y-10 md:w-1/2">
        <h2 className="text-3xl self-start">{articleTitle}</h2>
        <p className="self-start">{description}</p>
        <Button 
          label={label}
          nav={navigateTo}
          className={buttonColor}
        />
      </div>
      <div className="md:w-1/2">
        <img src={imageUrl} alt={imageAlt} className="rounded-lg" />
      </div>
    </article>
  );
};

export default ArticleImage;
