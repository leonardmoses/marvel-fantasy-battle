import { createClient } from "/src/utils/supabase/server";
import Link from "next/link";
import Image from "next/image";
import { redirect } from "next/navigation";

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
    <div className="w-full">

      <Link href="/internal" className="hidden">

        <div className="zero:w-1/2 lg:w-1/3 mx-auto">
          <Image src="/logos/corporate-user-icon.webp" alt="user icon" width={100} height={100} style={{ height: 'auto', width: '100%' }} priority />
        </div>


        <div className="text-center text-sm zero:hidden lg:flex flex-col">
          Welcome {profile.full_name}
        </div>

      </Link>

      <form action={signOut} className="flex justify-center">
        <button className="zero:hidden iphoneMax:flex w-full zero:h-10 sm:h-auto zero:mr-2 sm:mr-0 py-2 zero:px-3 rounded-sm no-underline bg-btn-background bg-psscButtonGreen focus:outline-none focus:ring text-psscPrimaryText hover:text-white zero:text-xs sm:text-base">
          Logout
        </button>
        <button className="zero:flex iphoneMax:hidden flex-col zero:w-10 sm:w-full h-10 zero:mr-2 mr-0 zero:items-center zero:justify-center rounded-sm no-underline bg-btn-background bg-psscButtonGreen focus:outline-none focus:ring text-psscPrimaryText hover:text-white zero:text-xs sm:text-base">
          <h1 className="">L/O</h1>
        </button>
      </form>

    </div>
  ) : (
    <div className="flex items-center gap-2 text-violet-100 w-full justify-end">
      <Link
        href="/login"
        className="py-2 px-3 flex rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
      >
        <button className="py-1 zero:px-2 lg:px-8 rounded-sm no-underline bg-btn-background bg-psscButtonGreen focus:outline-none focus:ring text-psscAccentText hover:text-psscBackgroundDark">
          Login
        </button>
      </Link>
    </div>
  );
}
