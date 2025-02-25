import { createClient } from "/utils/supabase/server";
import Link from "next/link";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function AuthButtonIcon() {
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
      {/* <div className="border-b border-psscPrimary h-full mb-5 zero:mb-5 sm:mb-5 mx-0 zero:mx-2 sm:mx-0"> </div> */}
      <Link href="/">

        {/* <div className="zero:w-1/3 mx-auto">
          <Image src="/logos/corporate-user-icon.webp" alt="user icon" width={100} height={100} style={{ height: 'auto', width: '100%' }} priority />
        </div> */}


        <div className="text-center text-base zero:hidden sm:flex flex-col">
          {profile?.username}
        </div>

      </Link>

    </div>
  ) : (
    <div></div>
  );
}
