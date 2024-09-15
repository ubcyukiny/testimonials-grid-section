const ReviewCard = (props) => {
  return (
    <div
      className="rounded-lg bg-[right_1.5rem_top] px-8 py-7 shadow-xl xl:bg-[right_5rem_top] xl:py-8 xl:pb-8 xl:pt-[26px]"
      style={{
        backgroundColor: props.bgColor || "#ffffff",
        backgroundImage: `url(${props.bgImage}`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-row gap-[1.063rem] pb-[1.125rem]">
        <img
          src={props.pfp}
          alt=""
          className="size-7 rounded-full"
          style={{
            borderColor: props.pfpBorderColor,
            borderWidth: props.pfpBorderColor ? ".125rem" : "0",
          }}
        />
        <div className="font-medium leading-none">
          <h3
            className="leading-[.813rem]"
            style={{
              color: props.headerColor,
            }}
          >
            {props.username}
          </h3>
          <span
            className="text-[.688rem] leading-[.688rem] opacity-50"
            style={{
              color: props.headerColor,
            }}
          >
            Verified Graduate
          </span>
        </div>
      </div>
      <h2
        className={`text-[1.25rem] font-semibold leading-6 ${props.username === "Daniel Clifford" ? "pb-10" : "pb-4"} lg:pb-4`}
        style={{
          color: props.headerColor,
        }}
      >
        {props.header}
      </h2>
      <p
        className={`font-medium leading-[1.125rem] opacity-70 ${props.username === "Daniel Clifford" ? "pr-4" : "pr-0"}`}
        style={{
          color: props.textColor ? props.textColor : props.headerColor,
        }}
      >
        {props.content}
      </p>
    </div>
  );
};

export default ReviewCard;
