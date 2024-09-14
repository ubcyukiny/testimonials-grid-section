import ReviewCard from "./components/ReviewCard";
import { data } from "./data/data";

function App() {
  return (
    <main className="font-barlow px-6 py-[4.375rem] text-[.813rem]">
      <div className="flex flex-col gap-6 pb-6">
        <ReviewCard key={data[0].username} {...data[0]} />
        <ReviewCard key={data[1].username} {...data[1]} />
        <ReviewCard key={data[2].username} {...data[2]} />
        <ReviewCard key={data[3].username} {...data[3]} />
        <ReviewCard key={data[4].username} {...data[4]} />
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
