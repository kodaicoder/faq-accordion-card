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
          />
          <img
            src={PatternDesktop}
            className="absolute -top-10 -left-80 scale-[2]"
          />
        </div>
        {/* image group mobile */}
        <div className="lg:hidden relative w-full h-full">
          <img src={WomenMobile} className="absolute scale-[.7] -top-40" />
          <img
            src={PatternMobile}
            className="absolute left-1/2 -translate-x-1/2"
          />
        </div>
      </div>
    </>
  );
};
