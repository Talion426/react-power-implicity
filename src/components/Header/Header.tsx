import "./header.scss";
import { ReactComponent as LogoIcon } from "../../assets/icons/logo.svg";
import { BurgerMenu } from "./BurgerMenu/BurgerMenu";

interface INavigation {
    id: number;
    text: string;
    href: string;
}

export const Header = () => {
    const headerLinks: INavigation[] = [
        {
            id: 1,
            text: "Features",
            href: "#",
        },
        {
            id: 2,
            text: "Partners",
            href: "#",
        },
        {
            id: 3,
            text: "Stories",
            href: "#",
        },
    ];

    return (
        <header className="header">
            <LogoIcon />
            <div className="header__links">
                {headerLinks.map(({ id, text, href }) => (
                    <a key={id} href={href} className="header__link">
                        {text}
                    </a>
                ))}
            </div>
            <BurgerMenu />
            <button className="header__button">Download for free</button>
        </header>
    );
};
