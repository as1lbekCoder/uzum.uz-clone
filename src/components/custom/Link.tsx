import type { FC, ReactNode } from "react"
import { Link } from "react-router-dom"

type LinkProps = {
    to: string,
    className?: string,
    children: ReactNode
}

const Links: FC<LinkProps> = ({ to, className, children }) => {
    return (
        <Link to={to} className={className}>{children}</Link>
    )
}

export default Links