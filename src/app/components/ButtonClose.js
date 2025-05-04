const ButtonClose = ({ setShowPowerGrid, setShowRules }) => {
    return (
        <button
            onClick={() => {
                if (setShowPowerGrid) setShowPowerGrid(false);
                if (setShowRules) setShowRules(false);
            }}
            className='ml-auto bg-ThemeB1 hover:bg-white text-white hover:text-ThemeB1 px-4 rounded-sm'
        >
            close
        </button>
    );
}

export default ButtonClose;