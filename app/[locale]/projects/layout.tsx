import React from "react";

function layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <div className="min-h-[calc(100vh-4rem)]">{children}</div>;
}

export default layout;
