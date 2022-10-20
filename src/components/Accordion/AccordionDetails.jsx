import arrowDown from "../../assets/icon-arrow-down.svg";
export const Accordion = (props) => {
  return (
    <div className="border-b border-[color:var(--light-grayish)] py-4 w-full">
      {/* if you want to animated <p> tag , it will need to build some javascript
       to control a open/close state of <detail>.
       more info : https://css-tricks.com/how-to-animate-the-details-element-using-waapi/ */}

      <details
        name={`faq_${props.id}`}
        className="group text-start select-none "
      >
        <summary
          className={`relative list-none text-[color:var(--very-dark)]
          hover:text-[color:var(--soft-red)] hover:font-[700] hover:cursor-pointer
          group-open:font-[700] group-open:text-[color:var(--desaturated-blue)]
          group-open:hover:text-[color:var(--soft-red)]`}
        >
          {props.title}
          <span className="absolute top-1/2 right-0 rotate-0  group-open:rotate-180 transition-all linear duration-300">
            <img className=" h-2" src={arrowDown} alt="accordion arrow" />
          </span>
        </summary>
        <p>{props.faqText}</p>
      </details>
    </div>
  );
};
