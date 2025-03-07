import LayoutGeneral from "../components/LayoutGeneral";
import Client from "./client"

const GameBoard = () => {
    return (
        <main>
            <LayoutGeneral>
                <Client />
            </LayoutGeneral>
        </main>
    );
}

export default GameBoard;