'use client'
import { useState, useEffect } from "react";
import { DraftValue } from "../db/draftValue"
import { characters } from "../db/marvelCharacters"
import TeamAForm from "./components/TeamA";
import TeamBForm from "./components/TeamB";
import PowerGrid from '../components/PowerGrid'

const GameboardClient = () => {
    const [showPowerGrid, setShowPowerGrid] = useState(false);

    return (
        <main className="relative bg-MarvelBlack">
            <div className="h-[1px] bg-ThemeGradient1 w-full absolute top-1 left-0">
                <div className="flex justify-around mt-4">
                    <button
                        onClick={() => { setShowPowerGrid(true) }}
                        className="bg-ThemeB5 hover:bg-ThemeWhite text-ThemeWhite hover:text-ThemeB5 rounded-sm px-4"
                    >
                        <h1>Power Grid</h1>
                    </button>
                    <button className="bg-ThemeB5 hover:bg-ThemeWhite text-ThemeWhite hover:text-ThemeB5 rounded-sm px-4">
                        <h1>Rules</h1>
                    </button>
                </div>
                <div className="flex justify-around bg-ThemeGradient1 w-11/12 mx-auto py-20 mt-4 border border-white/30 rounded-lg">
                    <TeamAForm DraftValue={DraftValue} />
                    <TeamBForm DraftValue={DraftValue} />
                </div>
                {showPowerGrid ?
                    <div className="fixed">
                        <PowerGrid DraftValue={DraftValue} characters={characters} setShowPowerGrid={setShowPowerGrid} />
                    </div>
                    :
                    null
                }

            </div>
        </main >
    );
}

export default GameboardClient;