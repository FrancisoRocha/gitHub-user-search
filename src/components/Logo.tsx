import type { LogoProps } from "../types"


export function Logo ( { texto } : LogoProps ) {
    return (
        <p className="text-black font-bold text-2xl text-left">
            { texto }
        </p>
    )
}
