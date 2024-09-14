const ReviewCard = (props) => {
  return (
    <div
      className="rounded-lg px-8 py-7"
      style={{
        backgroundColor: props.bgColor || "#ffffff",
        backgroundImage: `url(${props.bgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top right 1.5rem",
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
