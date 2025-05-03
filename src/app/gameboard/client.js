'use client'
import Image from "next/image";
import { DraftValue } from "../db/draftValue"
import TeamAForm from "./components/TeamA";
const GameboardClient = () => {

    // console.log(DraftValue)

    return (
        <main className="border-t border-MarvelRed bg-Primary h-full">
            <div className="w-fit ml-auto mr-20 relative">
                <Image src="/images/Dice.png" alt="Dice" width={200} height={200} />
            </div>
            <div>
                <TeamAForm DraftValue={DraftValue}/>
            </div>
        </main>
    );
}

export default GameboardClient;