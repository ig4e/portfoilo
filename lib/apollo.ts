import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

const httpLink = new HttpLink({
    uri: process.env.NEXT_PUBLIC_STRAPI_API_URL,
    headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_KEY}`,
    },
});

export const { getClient } = registerApolloClient(() => {
    return new ApolloClient({
        cache: new InMemoryCache(),
        link: httpLink,
    });
});
