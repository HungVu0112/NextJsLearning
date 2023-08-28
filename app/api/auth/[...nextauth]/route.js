import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDB } from "@/utils/database";
import User from "@/models/user";
import { compare } from "bcrypt";

const handler = NextAuth ({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        CredentialsProvider({
            name : "Credentials",
            async authorize(credentials, req){
                await connectToDB()

                // check user existance
                const result = await User.findOne({ email : credentials.email })
                
                if(!result){
                    throw new Error("No user Found with Email Please Sign Up...!")
                }
        
                // incorrect password
                if(result.password !== credentials.password || result.email !== credentials.email){
                    throw new Error("Username or Password doesn't match");
                }

                return result;
            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: 'jwt',
    }
})

export { handler as GET, handler as POST }