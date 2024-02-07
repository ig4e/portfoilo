"use client";

import { ApolloLink, HttpLink } from "@apollo/client";
import {
    ApolloNextAppProvider,
    NextSSRApolloClient,
    NextSSRInMemoryCache,
    SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support/ssr";

function makeClient() {
    const httpLink = new HttpLink({
        uri: process.env.NEXT_PUBLIC_STRAPI_API_URL,
        headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_KEY}`,
        },
    });

    return new NextSSRApolloClient({
        // use the `NextSSRInMemoryCache`, not the normal `InMemoryCache`
        cache: new NextSSRInMemoryCache(),
        link:
            typeof window === "undefined"
                ? ApolloLink.from([
                      // in a SSR environment, if you use multipart features like
                      // @defer, you need to decide how to handle these.
                      // This strips all interfaces with a `@defer` directive from your queries.
                      new SSRMultipartLink({
                          stripDefer: true,
                      }),
                      httpLink,
                  ])
                : httpLink,
    });
}

export function ApolloWrapper({ children }: React.PropsWithChildren) {
    return (
        <ApolloNextAppProvider makeClient={makeClient}>
            {children}
        </ApolloNextAppProvider>
    );
}
