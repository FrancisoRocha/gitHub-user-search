import type { LogoProps } from "../types"


export function Logo ( { texto } : LogoProps ) {
    return (
        <p className="text-[#141D2F] dark:text-white font-bold text-2xl text-left">
            { texto }
        </p>
    )
}
