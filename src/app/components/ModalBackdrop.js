const ModalBackdrop = ({ setShowPowerGrid, setShowRules }) => {
    return (
        <div
            className="fixed bg-black/50 w-screen h-screen top-0"
            onClick={() => {
                if (setShowPowerGrid) setShowPowerGrid(false)
                if (setShowRules) setShowRules(false)
            }}
        ></div>
    );
}

export default ModalBackdrop;