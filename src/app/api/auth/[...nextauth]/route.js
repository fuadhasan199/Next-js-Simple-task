import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import clientPromise from "@/lib/mongodb"; 
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        
        const { email, password } = credentials;

        if (!email || !password) {
          throw new Error("Email and Password are required");
        }

        const client = await clientPromise;
        const db = client.db("Agrox");
        const user = await db.collection("users").findOne({ email });

        if (!user) {
          throw new Error("No user found with this email");
        }

        const isValid = await bcrypt.compare(password, user.password);

        if (!isValid) {
          throw new Error("Invalid password");
        }

        return { id: user._id.toString(), email: user.email };
      }
    }) ,
      GoogleProvider({
    clientId:process.env.Goggle_Client_ID,
    clientSecret:process.env.Goggle_Client_Secret
  }) 
  ],
  session: {
    strategy: "jwt",
  }, 

 


  callbacks: {
  async signIn({ user, account, profile, email, credentials }) { 
    if(account?.providers==="google"){
       const client=await clientPromise 
       const db=client.db("Agrox") 
        const userCollection=db.collection("users")
       const isExistingUser=await userCollection.findOne({email:user.email})
        if(!isExistingUser){
          await userCollection.insertOne({...user,email:user.email})
        } 
    }

    return true
  },
  async redirect({ url, baseUrl }) {
    return baseUrl
  },
  async session({ session, token, user }) {
    return session
  },
  async jwt({ token, user, account, profile, isNewUser }) { 
    if(user){
      token.email=user.email

    }
    return token
  }
},
  secret:process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login", 
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };