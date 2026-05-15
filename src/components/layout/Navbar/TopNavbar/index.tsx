import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import Link from "next/link";
import React from "react";
import { NavMenu } from "../navbar.types";
import { MenuList } from "./MenuList";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { MenuItem } from "./MenuItem";
import Image from "next/image";
import InputGroup from "@/components/ui/input-group";
import ResTopNavbar from "./ResTopNavbar";
import CartBtn from "./CartBtn";

const data: NavMenu = [
  {
    id: 1,
    type: "MenuItem",
    label: "Shop",
    url: "/shop",
    children: [],
  },
  {
    id: 2,
    type: "MenuItem",
    label: "About",
    url: "/#about",
    children: [],
  },
  {
    id: 3,
    type: "MenuItem",
    label: "Community",
    url: "/#community",
    children: [],
  },
];

const TopNavbar = () => {
  return (
    <nav className="sticky top-0 bg-white z-20 border-b border-gray-100">
      <div className="flex relative max-w-frame mx-auto items-center justify-between md:justify-start py-4 md:py-5 px-4 xl:px-0">
        <div className="flex items-center">
          <div className="block md:hidden mr-4">
            <ResTopNavbar data={data} />
          </div>
          <Link
            href="/"
            className="flex items-center"
          >
            <Image
              priority
              src="/images/logo.png"
              height={36}
              width={36}
              alt="Kreative Kollector"
              className="mr-2"
            />
            <span className={cn([
              integralCF.className,
              "text-sm lg:text-base",
            ])}>
              KREATIVE KOLLECTOR
            </span>
          </Link>
        </div>
        <NavigationMenu className="hidden md:flex mr-2 lg:mr-7 ml-auto">
          <NavigationMenuList>
            {data.map((item) => (
              <React.Fragment key={item.id}>
                {item.type === "MenuItem" && (
                  <MenuItem label={item.label} url={item.url} />
                )}
                {item.type === "MenuList" && (
                  <MenuList data={item.children} label={item.label} />
                )}
              </React.Fragment>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <InputGroup className="hidden lg:flex bg-[#F0F0F0] mr-3 max-w-[200px]">
          <InputGroup.Text>
            <Image
              priority
              src="/icons/search.svg"
              height={18}
              width={18}
              alt="search"
              className="min-w-4 min-h-4"
            />
          </InputGroup.Text>
          <InputGroup.Input
            type="search"
            name="search"
            placeholder="Search..."
            className="bg-transparent placeholder:text-black/40 text-sm"
          />
        </InputGroup>
        <div className="flex items-center">
          <Link href="/search" className="block lg:hidden mr-[14px] p-1">
            <Image
              priority
              src="/icons/search-black.svg"
              height={100}
              width={100}
              alt="search"
              className="max-w-[20px] max-h-[20px]"
            />
          </Link>
          <CartBtn />
          <Link href="/#signin" className="p-1">
            <Image
              priority
              src="/icons/user.svg"
              height={100}
              width={100}
              alt="user"
              className="max-w-[20px] max-h-[20px]"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;