import arrowDown from "../../assets/icon-arrow-down.svg";
export const Accordion = (props) => {
  return (
    <div className="flex flex-col items-start border-b border-[color:var(--light-grayish)] py-4 w-full">
      {/* Accordion header */}
      {/* This input will hidden but working on css*/}
      <input
        className="appearance-none peer"
        type="checkbox"
        id={`faq_${props.id}`}
        name={`faq_${props.id}`}
      />
      {/*use label "for" (htmlFor) to made input can selectable*/}
      <label
        htmlFor={`faq_${props.id}`}
        className={`relative select-none w-full cursor-pointer z-10 text-lg text-start text-[color:var(--very-dark)] 
        hover:text-[color:var(--soft-red)] hover:font-[700]
        peer-checked:font-[700] peer-checked:text-[color:var(--desaturated-blue)]
        peer-checked:hover:text-[color:var(--soft-red)]
        peer-checked:[&>span]:rotate-180`}
      >
        {/* "peer-checked:[&>span]:rotate-180" is mean
          "input:checked label>span"
          that will made nested child can access to peer class too*/}

        {props.title}
        <span
          className={`absolute top-1/2 right-0 rotate-0 transition-all linear duration-300`}
        >
          <img className="h-2" src={arrowDown} alt="accordion arrow" />
        </span>
      </label>

      {/*--End-- Accordion Header */}

      <p className="peer-checked:max-h-40 peer-checked:mt-3 max-h-0 overflow-hidden text-[color:var(--dark-grayish)] text-base text-start  select-none transition-all ease-in-out duration-300 z-0">
        {props.faqText}
      </p>
    </div>
  );
};
