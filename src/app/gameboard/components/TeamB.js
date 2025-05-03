'use client'
import { useEffect, useState } from "react";

const TeamBForm = ({ DraftValue }) => {
    //State for form to be submitted to supabase
    const [formData, setFormData] = useState({
        team: [],
        teamValue: 0,
    });

    const [selectedCharacter, setSelectedCharacter] = useState('');

    const handleSelectChange = (e) => {
        const value = e.target.value;
        setSelectedCharacter(value);

        const characterObj = DraftValue.find(c => c.Character === value);

        if (characterObj && !formData.team.find(c => c.Character === value)) {
            const updatedTeam = [...formData.team, characterObj];
            const totalValue = updatedTeam.reduce((sum, c) => sum + parseInt(c.DraftValue), 0);

            setFormData((prev) => ({
                ...prev,
                team: updatedTeam,
                teamValue: totalValue,
            }));
        }
    };


    //To remove characters from the form before submit
    const handleRemoveCharacter = (charToRemove) => {
        const updatedTeam = formData.team.filter(c => c.Character !== charToRemove.Character);
        const totalValue = updatedTeam.reduce((sum, c) => sum + parseInt(c.DraftValue), 0);

        setFormData((prev) => ({
            ...prev,
            team: updatedTeam,
            teamValue: totalValue,
        }));
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        // await supabase.from('your_table').insert([formData])
    };



    console.log(formData)

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto p-4 bg-white/60 shadow-xl rounded space-y-4 flex flex-col w-full"
        >
            <div className="flex-grow space-y-4">
                <div>
                    <label htmlFor="item" className="block text-sm font-medium text-gray-700">
                        Team A
                    </label>
                    <select
                        id="item"
                        name="item"
                        value={selectedCharacter}
                        onChange={handleSelectChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-ThemeB2"
                    >
                        <option value="">Select a Character</option>
                        {DraftValue.map((character, idx) => (
                            <option
                                key={idx}
                                value={character.Character}
                            >
                                {character.Character} ({character.DraftValue})
                            </option>
                        ))}
                    </select>
                </div>

                {formData.team.length > 0 && (
                    <div className="max-w-md mx-auto mt-6 bg-white p-4 shadow rounded">
                        <h2 className="text-lg font-semibold mb-2">Selected Characters:</h2>
                        <ul className="space-y-2">
                            {formData.team.map((char, index) => (
                                <li
                                    key={index}
                                    className="flex justify-between items-center bg-gray-100 px-3 py-2 rounded"
                                >
                                    <span>{char.Character} ({char.DraftValue})</span>
                                    <button
                                        onClick={() => handleRemoveCharacter(char)}
                                        className="text-sm text-ThemeA1 hover:underline"
                                    >
                                        Remove
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {formData.teamValue > 15 ?
                    <p className="text-md mt-2 text-MarvelRed animate-pulse">Total Team Value: {formData.teamValue} / 15</p>
                    :
                    formData.teamValue < 15 ?
                        <p className="text-md mt-2 text-ThemeA5">Total Team Value: {formData.teamValue} / 15</p>
                        :
                        <p className="text-md mt-2 text-ThemeA5">Total Team Draft Value: {formData.teamValue} / 15 Max</p>
                }
            </div>

            <button
                type="submit"
                className="w-full bg-ThemeB2 hover:bg-ThemeB2/70 text-white py-2 px-4 rounded mt-4"
            >
                Save Team
            </button>
        </form>
    );
};

export default TeamBForm;
