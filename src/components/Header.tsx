import { Logo } from "./Logo";
import { ThemesUI } from "./ThemesUI";


export function Header () {

    return (
        <header className="flex items-center justify-between">
            <Logo
                texto='devfinder'
            />
            <ThemesUI
                texto="Dark"
            />
        </header>
    )

}
