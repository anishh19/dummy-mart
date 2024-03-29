import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "../../../models/user";
import connnectMongoDB from "../../../libs/mongodb";
// import { isPasswordValid } from '../../../utils/hash';

export default NextAuth({
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      async authorize(credentials) {
        connnectMongoDB();
        const user = await User.findOne({ email: credentials.email });

        // Check if user exists
        if (!user) {
          return null;
        }

        // Validate password
        // const isPasswordMatch = await isPasswordValid(
        //   credentials.password,
        //   user.password
        // );

        // if (!isPasswordMatch) {
        //   return null;
        // }

        return {
          name: user.name,
          email: user.email,
        };
      },
    }),
  ],

  secret: process.env.SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 Days
  },
  pages: {
    signIn: "/signin",
  },
});
