export const CardLayout = (props) => {
  return (
    <div
      className={`h-[${props.customHeight}] lg:box-border lg:w-1/2 lg:h-full`}
    >
      {props.children}
    </div>
  );
};
