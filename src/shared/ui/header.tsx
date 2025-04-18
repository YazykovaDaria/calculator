import { NavLink } from "react-router";

type Link = {
    label: string;
    href: string;
};

type HeaderProps = {
    links: Link[];
};

export const Header = ({ links }: HeaderProps) => (
    <header className="max-w-7xl self-center p-3">
        <nav>
            <ul className="flex gap-3.5 justify-center items-center">
                {links.map((link, i) => (
                    <li key={i} className="text-black hover:text-blue-500">
                        <NavLink
                            to={link.href}
                            className={({ isActive }) =>
                                isActive ? "text-blue-700 pointer-none:" : ""
                            }
                        >
                            {link.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    </header>
);
