import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Sign In",
            type: "credentials",
            credentials: {},

            async authorize(credentials, req) {
                try {
                    const { id, password } = credentials as {
                        id: string;
                        password: string;
                    };

                    if (id === process.env.NEXT_PUBLIC_ADMIN_EMAIL && password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
                        return ({ id: '1' });
                    } else {
                        return (null);
                    }
                } catch (error) {
                    console.error("Authentication error:", error);
                    return Promise.resolve(null);
                }
            },
        }),
    ],
    pages: {
        signIn: "/admin",
    },
    session: {
        strategy: "jwt",
    },
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };