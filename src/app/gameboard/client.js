'use client'
import Image from "next/image";
import { DraftValue } from "../db/draftValue"
import TeamAForm from "./components/TeamA";
import TeamBForm from "./components/TeamB";
const GameboardClient = () => {

    return (
        <main className="relative bg-MarvelBlack">
            <div className="h-[1px] bg-gradient-to-r from-ThemeB5 via-ThemeB2 to-MarvelRed w-full absolute top-0 left-0" >

                <div className="flex justify-around bg-green-900/70 w-11/12 mx-auto py-20 mt-10 border border-white/30 rounded-lg">
                    <TeamAForm DraftValue={DraftValue} />
                    <TeamBForm DraftValue={DraftValue} />
                </div>

            </div>
        </main >
    );
}

export default GameboardClient;