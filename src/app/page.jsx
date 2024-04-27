import MyButton from "@/src/components/MyButton";

export default function Home() {
  return (
    <>
      <div className="h-screen w-full flex flex-col items-center px-5">
        <h1 className="text-3xl font-bold">Projects</h1>
        <div className="h-full w-full rounded-lg border border-black flex gap-2 p-2">
          <MyButton
            name={"Dice Rolling Game"}
            href={"dice-rolling-game"}
          />
          <MyButton
            name={"Mouse Over Color Animation"}
            href={"mouse-over-color-animation"}
          />
          <MyButton
            name={"Fylo Dark Theme Landing Page"}
            href={"fylo-dark-theme-landing-page"}
          />
        </div>
      </div>
    </>
  );
}