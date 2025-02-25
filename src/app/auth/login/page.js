import Client from './client';

export default function LoginPage({ setModalLoginIsOpen, setModalSignupIsOpen }) {
    return (
        <div className="">
            <Client
                setModalLoginIsOpen={setModalLoginIsOpen}
                setModalSignupIsOpen={setModalSignupIsOpen}
            />
        </div>
    );
}
