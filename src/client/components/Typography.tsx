import React from "react";

type TypographyProps = React.HtmlHTMLAttributes<HTMLElement> & {
    variant?: 'h1' | 'h2',
    children: React.ReactNode
}

export const Typography = ({ variant, children }: TypographyProps) => {
    return (
        <>
            {
                variant === 'h1' ? <h1>{children}</h1> : <h2>{children}</h2>
            }
        </>
    )
}