
import Button from "./common/Button";
import ArrowDownIcon from "../components/svg/ArrowDownIcon";

const Hero = (props) => {
  const {
    articleTitle,
    description,
    label,
    imageUrl,
    imageAlt,
    navigateTo,
    className,
    first
  } = props;

  const scrollDown = () => {
    window.scrollTo({
      top: first.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <section
      className={`flex flex-col gap-y-20 md:gap-y-24 lg:gap-y-0 -mt-[80px] md:-mt-[116px] h-screen -mx-[32px] lg:-mx-[96px] md:h-[700px] 2xl:-mx-[128px] px-8 md:px-16 2xl:px-32 justify-center items-center xs:pb-10 pb-20 relative ${className}`}
    >
      <div className="flex flex-col items-center xxs:gap-y-3 gap-y-10 pt-20 md:grid md:grid-cols-2 relative">
        <h1 className="text-center text-4xl font-bold md:self-end md:text-left">
          {articleTitle}
        </h1>

        <div className="self-center md:row-span-2 md:justify-self-end">
          <img src={imageUrl} alt={imageAlt} className="rounded-lg" />
        </div>
        <div className="flex flex-col items-center justify-center md:items-start md:self-start gap-y-7">
          <p className="text-center md:text-left">{description}</p>
          <Button
            label={label}
            nav={navigateTo}
            className={"bg-orange-400 border-orange-500"}
          />
          <div onClick={scrollDown}>

          <ArrowDownIcon  />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
