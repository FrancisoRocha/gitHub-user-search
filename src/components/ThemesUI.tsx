import type { ButtonProps } from "../types"
import { SunIcon } from "@heroicons/react/20/solid"

export const ThemesUI = ( { texto } : ButtonProps ) => {

    return (
        <div className="flex items-center gap-2">
            <button className="font-bold text-sm text-right text-[#4B6A9B] tracking-[2.5px] leading-36">
                { texto }
            </button>
            <SunIcon className="size-6 text-[#4B6A9B]" />
        </div>
    )

}
