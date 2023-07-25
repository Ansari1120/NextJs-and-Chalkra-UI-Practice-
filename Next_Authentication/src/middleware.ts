// //below this one line applies next-auth to the entire next js app.
// export { default } from "next-auth/middleware";

// //apply next js auth to specific pages or routes

// export const config  = {matcher:['/extra']}

// Import the NextAuth.js middleware
export { default } from "next-auth/middleware";

//Apply NextAuth.js auth to specific pages or routes
export const config = { matchers: ["/server"] };
