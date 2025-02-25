import { createClient } from "/utils/supabase/server";
import Link from "next/link";
import Image from "next/image";
import { redirect } from "next/navigation";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'; // Use Heroicons v2
import Topbar from "../../internal/components/TopbarInternal";

export default async function AuthButton() {
  // Get the logged in user. console.log(user)
  const supabase = createClient();
  const { data: { user }, } = await supabase.auth.getUser();

  // Get the logged in user's profile data on supabase. console.log(profile)
  const { data: profile, profileError } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user?.id)
    .single()
  // console.log(profile)

  const signOut = async () => {
    "use server";

    const supabase = createClient();
    await supabase.auth.signOut();
    return redirect("/login");
  };

  return user ? (
    <div className="flex items-center gap-2 text-psscPrimaryText w-screen ml-auto justify-between pt-5 zero:pt-1 sm:pt-5 px-0 zero:px-2 sm:px-0 fixed z-20">
      <button className="flex w-fit">
        {/* <div className="w-2/12 zero:w-4/12 sm:w-2/12 mr-2">
          <Image src="/logos/corporate-user-icon.webp" alt="user icon" width={100} height={100} style={{ height: 'auto', width: '100%' }} priority />
        </div> */}
        <div className="flex justify-between mt-1">
          <Bars3Icon className="w-10 h-10 border border-psscPrimary/50 rounded-sm bg-white p-1" />
          {/* <Image src="/logos/pssc-icon-100x100.png" alt="pssc icon" width={35} height={35} style={{ height: 'auto', width: '100%' }} priority /> */}
        </div>

        <div>

        </div>
        {/* <Topbar/> */}
        <div className="self-center flex zero:hidden sm:flex">
          Welcome {profile.full_name}
        </div>

      </button>
      <form action={signOut}>
        <button className="py-1 px-8 zero:px-2 sm:px-8 rounded-sm no-underline bg-btn-background bg-psscAccent focus:outline-none focus:ring text-psscAccentText hover:text-psscBackgroundDark">
          Logout
        </button>
      </form>
    </div>
  ) : (
    <div className="flex items-center gap-2 text-violet-100 w-full justify-end">
      <Link
        href="/login"
        className="py-2 px-3 flex rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
      >
        <button className="py-1 px-8 rounded-sm no-underline bg-btn-background bg-psscAccent focus:outline-none focus:ring text-psscAccentText hover:text-psscBackgroundDark">
          Login
        </button>
      </Link>
    </div>
  );
}
