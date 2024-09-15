import ReviewCard from "./components/ReviewCard";
import { data } from "./data/data";

function App() {
  return (
    <main className="font-barlow flex flex-col items-center justify-center text-[.813rem]">
      <div className="mx-6 my-[4.375rem] flex flex-col gap-6 pb-6 xl:grid xl:grid-cols-[255px_255px_255px_255px] xl:grid-rows-[282px_266px] xl:gap-x-[1.875rem] xl:gap-y-6">
        <div className="col-span-2 col-start-1">
          <ReviewCard key={data[0].username} {...data[0]} />
        </div>
        <div className="col-start-3 row-span-1">
          <ReviewCard key={data[1].username} {...data[1]} />
        </div>
        <div className="order-4 col-span-1">
          <ReviewCard key={data[2].username} {...data[2]} />
        </div>
        <div className="order-5 col-span-2">
          <ReviewCard key={data[3].username} {...data[3]} />
        </div>
        <div className="order-3 row-span-2">
          <ReviewCard key={data[4].username} {...data[4]} />
        </div>
      </div>
      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://www.frontendmentor.io/profile/ubcyukiny"
          target="_blank"
        >
          Ken
        </a>
        .
      </div>
    </main>
  );
}

export default App;
