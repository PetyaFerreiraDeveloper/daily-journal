import React from "react";
import { Link } from "react-router-dom";

const Article = (props) => {
    const {articleTitle, description, label, className} = props
  return (
    <article className={`${className} py-20 flex flex-col gap-y-10 items-center -mx-[32px] lg:-mx-[96px] 2xl:-mx-[128px] px-8 md:px-16 2xl:px-32`}>
      <h2 className="text-3xl">{articleTitle}</h2>
      <p>{description}</p>
      <Link
        to={"/register"}
        className="rounded-full border-2 border-orange-500 bg-orange-400 px-8 py-2"
      >
        {label}
      </Link>
      
    </article>
  );
};

export default Article;
