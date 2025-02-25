import Link from "next/link";

const MarvelFantasyBattleHome = () => {
  return (
    <div className="bg-black h-screen flex justify-center items-center">
      <div className="max-w-fit -mt-40">
        <div className="flex justify-center">
          <h1 className="bg-MarvelRed text-white font-bold tracking-tighter px-3 py-0 text-8xl text-center max-w-fit">
            MARVEL
          </h1>
        </div>
        <div className="">
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-Secondary to-MarvelRed text-6xl text-center">
            Fantasy Battle
          </h2>
          <Link href="">
            <h3 className="text-white text-center text-2xl hover:text-MarvelRed active:text-Secondary animate-pulse hover:animate-grow ">Enter</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MarvelFantasyBattleHome;