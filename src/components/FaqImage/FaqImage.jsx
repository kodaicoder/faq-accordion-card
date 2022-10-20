import WomenDesktop from "../../assets/illustration-woman-online-desktop.svg";
import WomenMobile from "../../assets/illustration-woman-online-mobile.svg";
import PatternDesktop from "../../assets/bg-pattern-desktop.svg";
import PatternMobile from "../../assets/bg-pattern-mobile.svg";
import BoxImage from "../../assets/illustration-box-desktop.svg";
export const FaqImage = (props) => {
  return (
    <>
      <img
        className="absolute w-[12%] top-[44vh] left-[14vw] z-20 hidden lg:block"
        src={BoxImage}
        alt="Box Image"
      />
      {/* container */}
      <div className="lg:overflow-hidden w-full h-full">
        {/* image group desktop */}
        <div className="hidden lg:block relative w-full h-full">
          <img
            src={WomenDesktop}
            className="absolute -left-20 top-1/2 -translate-y-1/2 z-10"
            alt="Women & Desktop Image"
          />
          <img
            src={PatternDesktop}
            className="absolute -top-10 -left-80 scale-[2]"
            alt="Pattern background image"
          />
        </div>
        {/* image group mobile */}
        <div className="lg:hidden relative w-full h-full">
          <img
            src={WomenMobile}
            className="absolute w-64 -top-28 left-1/2 -translate-x-1/2"
            alt="Women & Desktop Image"
          />
          <img
            src={PatternMobile}
            className="absolute left-1/2 -translate-x-1/2"
            alt="Pattern background image"
          />
        </div>
      </div>
    </>
  );
};
