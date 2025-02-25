import Client from "./client"

const Signup = ({ setModalSignupIsOpen, setModalLoginIsOpen }) => {
    return (
        <div className="">
            <Client
                setModalSignupIsOpen={setModalSignupIsOpen}
                setModalLoginIsOpen={setModalLoginIsOpen}
            />
        </div>
    );
}

export default Signup;