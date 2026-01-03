import { useTheme } from "../hooks/useTheme"
import { SunIcon, MoonIcon } from "@heroicons/react/20/solid"

export const ThemesUI = () => {

    const { theme, handleTheme } = useTheme();

    return (
        <div className="flex items-center gap-2">
            <button
                className="font-bold text-sm text-right text-[#4B6A9B] tracking-[2.5px] leading-36 cursor-pointer
                    dark:text-[#90A4D4]"
                onClick={handleTheme}
            >
                { theme === 'dark' ? 'LIGHT' : 'DARK' }
            </button>
            { theme === 'dark' ? <SunIcon className="size-6 text-[#4B6A9B] dark:text-[#90A4D4]" /> : <MoonIcon className="size-6 text-[#4B6A9B] dark:text-[#90A4D4]" />  }
        </div>
    )

}
