const ModalBackdrop = ({ setShowPowerGrid, setShowRules, setShowCalibration }) => {
    return (
        <div
            className="fixed bg-black/50 w-screen h-screen top-0"
            onClick={() => {
                if (setShowPowerGrid) setShowPowerGrid(false)
                if (setShowRules) setShowRules(false)
                if (setShowCalibration) setShowCalibration(false)
            }}
        ></div>
    );
}

export default ModalBackdrop;