export const Card = (props) => {
  return (
    <div className="w-[90vw] h-[80vh] mt-[10vh] lg:m-0 lg:h-[70vh] flex-col lg:w-[60vw] lg:flex-row rounded-[2.5rem] bg-white flex ">
      {props.children}
    </div>
  );
};
