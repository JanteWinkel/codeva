"use client";

import { useRouter } from "next/navigation";
import MenuList from "./menu-list";
import ItemsMenuMobile from "./items-menu-mobile";
import ToggleTheme from "./toggle-theme";

const Navbar = () => {
    const router = useRouter();

    return (
        <div className="fixed top-0 left-0 w-full bg-background shadow-xl z-50 flex items-center justify-between p-4 mx-auto cursor-pointer">
            <h1 className="text-3xl text-primary" onClick={() => router.push("/")}>
                Codeva
                
            </h1>
            <div className="items-center justify-between hidden sm:flex">
                <MenuList />
            </div>
            <div className="flex sm:hidden">
                <ItemsMenuMobile />
            </div>
            <div className="flex items-center justify-between gap-2 sm:gap-7">
                <ToggleTheme />
            </div>
        </div>
    );
};

export default Navbar;
