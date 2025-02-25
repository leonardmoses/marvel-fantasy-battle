'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '../../utils/supabase/server'

export async function login(formData) {
    const supabase = await createClient()

    const data = {
        email: formData.get('email'),
        password: formData.get('password'),
    }

    const { error } = await supabase.auth.signInWithPassword(data)

    if (error) {
        return { error: error.message } // Return error instead of redirecting
    }

    revalidatePath('/', 'layout')
    redirect('/gameboard')
}

export async function signup(formData) {
    const supabase = await createClient()

    const data = {
        email: formData.get('email'),
        password: formData.get('password'),
    }

    const { data: user, error } = await supabase.auth.signUp(data)

    if (error) {
        console.error("Signup Error:", error.message);
        return; // Prevents execution from continuing
    }

    revalidatePath('/', 'layout')

    return { success: true }; // Return success instead of redirecting
}
