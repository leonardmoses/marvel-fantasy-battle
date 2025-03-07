import Image from "next/image";

const GameboardClient = () => {
    return (
        <main className="">
            <div className="w-fit ml-auto mr-20">
                <Image src="/images/Dice.png" alt="alt" width={200} height={200} />
            </div>

        </main>
    );
}

export default GameboardClient;