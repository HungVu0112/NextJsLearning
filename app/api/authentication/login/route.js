import { connectToDB } from "@/utils/database";
import User from "@/models/user";
import { getSession, signIn } from "next-auth/react";

export const POST = async (req, res) => {
    const { username, password } = await req.json()
    
    try {
        const result = await signIn('credentials', {
            redirect: false,
            username,
            password
        })

        if (result) {
            return new Response("Successfully login!", { status: 201 })
        } else {
            return new Response("Account doesn't exist", { status: 201 })
        }
    } catch (error) {
        return new Response("Failed to login!", { status: 500 })
    }
}