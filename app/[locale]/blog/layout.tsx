import React from "react";

function layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="container min-h-[calc(100vh-9.5rem)]">
            <div className="">{children}</div>
        </div>
    );
}

export default layout;
