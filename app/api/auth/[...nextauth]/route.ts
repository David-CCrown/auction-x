import NextAuth from "next-auth";
import supabase from "@/config/supabase";

import GoogleProvider from "next-auth/providers/google";
const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!;
const GOOGLE_CLIENT_SECRET = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET!;
const NEXTAUTH_SECRET = process.env.NEXTAUTH_SECRET!;

export const googleAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: "/auth/signin", // Custom sign-in page
  },
  callbacks: {
    async signIn({ user }: any) {
      const { email, name, image } = user;
      const { error } = await supabase
        .from("user")
        .upsert(
          { username: name, email, profile_image_url: image, role: "user" },
          { onConflict: "email" }
        );
      if (error) {
        console.log({ error });
        return true;
      }
    },
  },

  secret: NEXTAUTH_SECRET,
};

const handler = NextAuth(googleAuthOptions as any);
export { handler as GET, handler as POST };
