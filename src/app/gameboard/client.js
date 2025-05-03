'use client'
import Image from "next/image";
import { DraftValue } from "../db/draftValue"
import TeamAForm from "./components/TeamA";
import TeamBForm from "./components/TeamB";
const GameboardClient = () => {

    return (
        <main className="relative bg-MarvelBlack">
            <div className="h-[1px] bg-ThemeGradient1 w-full absolute top-1 left-0" >

                <div className="flex justify-around bg-ThemeGradient1 w-11/12 mx-auto py-20 mt-10 border border-white/30 rounded-lg">
                    <TeamAForm DraftValue={DraftValue} />
                    <TeamBForm DraftValue={DraftValue} />
                </div>

            </div>
        </main >
    );
}

export default GameboardClient;