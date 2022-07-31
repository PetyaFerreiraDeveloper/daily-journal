import React from "react";
import { Link } from "react-router-dom";

const ArticleImage = (props) => {
  const { articleTitle, description, label, imageUrl, imageAlt, className } =
    props;
  return (
    <article
      className={`flex flex-col py-24  justify-between items-center gap-y-16 md:gap-x-10  md:place-items-center whitespace-pre-line ${className}`}
    >
      <div className="flex flex-col justify-center items-center gap-y-10 md:w-1/2">
        <h2 className="text-3xl self-start">{articleTitle}</h2>
        <p className="self-start">{description}</p>
        <Link
          to={"/register"}
          className="rounded-full border-2 border-orange-500 bg-orange-400 xxs:px-5 px-8 py-2"
        >
          {label}
        </Link>
      </div>
      <div className="md:w-1/2">
        <img src={imageUrl} alt={imageAlt} className="rounded-lg" />
      </div>
    </article>
  );
};

export default ArticleImage;
