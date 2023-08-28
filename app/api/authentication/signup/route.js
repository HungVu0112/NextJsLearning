import { connectToDB } from "@/utils/database";
import User from "@/models/user";
import { hash } from "bcrypt";

export const POST = async (req) => {
    const { username, email, password } = await req.json()

    try {
        await connectToDB()

        const checkUser = await User.findOne({ email })

        if(checkUser) {
            return new Response("Account already exists!", { status: 201 })
        } else {
            await User.create({
                username,
                email,
                password
            })
            return new Response("Successfully created!", { status: 201 })
        }
    } catch (error) {
        return new Response("Failed to create a new account!", { status: 500 })
    }
}