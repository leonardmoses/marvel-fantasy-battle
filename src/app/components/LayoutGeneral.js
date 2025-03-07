import Image from "next/image";

const LayoutGeneral = ({ children }) => {
    return (
        <main className="flex flex-col">
            <div className="flex flex-col mx-auto">
                <Image src="/logos/Marvel_Logo.png" alt="marvel logo" width={200} height={200} style={{ height: 'auto', width: '100%' }} priority />
                <div className="text-center">
                    <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-ThemeB5 via-ThemeB2 to-MarvelRed text-5xl">Fantasy Battle</h1>
                </div>
            </div>

            <div className="w-screen">
                {children}
            </div>
        </main>
    );
}

export default LayoutGeneral;