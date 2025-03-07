'use client'
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import LoginClientForm from "./auth/login/page"
import SignupClientForm from "./auth/signup/page"

const MarvelFantasyBattleHome = () => {
  const [modalLoginIsOpen, setModalLoginIsOpen] = useState(false);
  const [modalSignupIsOpen, setModalSignupIsOpen] = useState(false);


  return (
    <div className="bg-black h-screen flex justify-center items-center">
      <div className="max-w-fit -mt-40">

        <div className="flex flex-col mx-auto">
          <Image src="/logos/Marvel_Logo.png" alt="marvel logo" width={200} height={200} style={{ height: 'auto', width: '100%' }} priority />
          <div className="text-center">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-ThemeB5 via-ThemeB2 to-MarvelRed text-5xl">Fantasy Battle</h1>
          </div>
        </div>

        <div className="mt-2">
          <Link href="./gameboard">
            <h3 className="text-white text-center text-2xl hover:text-MarvelRed active:text-Secondary animate-pulse hover:animate-grow">Enter</h3>
          </Link>
          <h3
            className="text-white w-fit text-center text-2xl mx-auto cursor-pointer hover:text-MarvelRed active:text-Secondary animate-pulse hover:animate-grow"
            onClick={() => { setModalLoginIsOpen(true); }}
          >
            Login
          </h3>


          {modalLoginIsOpen && (
            <div
              className="fixed inset-0 flex items-center justify-center"
              onClick={(e) => {
                // Check if the clicked target is the overlay (not the modal content)
                if (e.target === e.currentTarget) {
                  setModalLoginIsOpen(false);  // Close the modal if clicking outside the modal content
                }
              }}
            >
              <div className="p-6 rounded-md w-1/3">
                <LoginClientForm
                  className=""
                  setModalLoginIsOpen={setModalLoginIsOpen}
                  setModalSignupIsOpen={setModalSignupIsOpen}
                />
              </div>
            </div>
          )}

          {modalSignupIsOpen && (
            <div
              className="fixed inset-0 flex items-center justify-center"
              onClick={(e) => {
                // Check if the clicked target is the overlay (not the modal content)
                if (e.target === e.currentTarget) {
                  setModalSignupIsOpen(false);  // Close the modal if clicking outside the modal content
                }
              }}
            >
              <div className="p-6 rounded-md w-1/3">
                <SignupClientForm
                  className=""
                  setModalSignupIsOpen={setModalSignupIsOpen}
                  setModalLoginIsOpen={setModalLoginIsOpen}
                />
              </div>
            </div>
          )}


        </div>
      </div>
    </div>
  );
}

export default MarvelFantasyBattleHome;