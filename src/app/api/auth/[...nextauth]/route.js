import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"


export const authOptions = {
  // Configure one or more authentication providers
  providers: [
 
     Credentials({
    // Sign in form
    name: 'Credentials',
 
    credentials: {
      username: { label: "Username", type: "text", placeholder: "jsmith" },
      password: { label: "Password", type: "password" }
    },
    async authorize(credentials, req) {
    
    //    my own loging logic
      return null
    }
  })
  ],
}

export default NextAuth(authOptions)