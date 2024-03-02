import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";
import { visit } from "unist-util-visit";
import { Pre } from "./mdx/pre";

function RenderMDX({ source }: { source: string }) {
    return (
        <MDXRemote
            source={source}
            options={{
                mdxOptions: {
                    development: process.env.NODE_ENV === "development",
                    remarkPlugins: [remarkGfm],
                    rehypePlugins: [
                        () => (tree) => {
                            visit(tree, (node) => {
                                if (node?.tagName === "pre") {
                                    const [codeEl] = node.children;
                                    if (codeEl.tagName !== "code") return;

                                    node.raw = codeEl.children?.[0].value;
                                }
                            });
                        },
                        [
                            //@ts-expect-error
                            rehypePrettyCode,
                            {
                                theme: {
                                    dark: "one-dark-pro",
                                    light: "github-light",
                                },
                                // The rest of the rehypePrettyCode config
                            },
                        ],
                        () => (tree) => {
                            visit(tree, (node) => {
                                if (
                                    node?.type === "element" &&
                                    node?.tagName === "figure"
                                ) {
                                    if (
                                        !(
                                            "data-rehype-pretty-code-figure" in
                                            node.properties
                                        )
                                    ) {
                                        return;
                                    }

                                    for (const child of node.children) {
                                        if (child.tagName === "pre") {
                                            child.properties["raw"] = node.raw;
                                        }
                                    }
                                }
                            });
                        },
                    ],
                },
            }}
            components={{
                pre: Pre,
            }}
        />
    );
}

export default RenderMDX;
