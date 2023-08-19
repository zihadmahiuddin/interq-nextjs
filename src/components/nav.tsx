"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { HTMLAttributes, useCallback, useState } from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/lib/hooks";

export type NavProps = HTMLAttributes<HTMLDivElement>;

type NavItem = {
  title: string;
  link: string;
  nested?: NavItem[];
};

const NAV_ITEMS: NavItem[] = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About Us",
    link: "/about",
  },
  {
    title: "Portfolio",
    link: "/portfolio",
  },
  {
    title: "Services",
    link: "/services",
  },
  {
    title: "Pages",
    link: "#",
    nested: [
      {
        title: "Blog",
        link: "/blogs",
      },
      {
        title: "Blog Detail",
        link: "/blog/1",
      },
      {
        title: "404",
        link: "/404",
      },
      {
        title: "Pricing",
        link: "/pricing",
      },
    ],
  },
];

export type NavMenuDropdownProps = HTMLAttributes<HTMLUListElement> & {
  items: NavItem[];
};

const NavMenuDropdown: React.FC<NavMenuDropdownProps> = ({
  className,
  items,
  ...rest
}) => {
  return (
    <ul
      className={cn(
        "flex flex-col gap-4 absolute top-5 pt-4 w-lg lg:gap-2 lg:pt-2",
        className
      )}
      {...rest}
    >
      {items.map((item) => {
        return <NavMenuItem key={`${item.title}-${item.link}`} item={item} />;
      })}
    </ul>
  );
};

export type NavMenuItemProps = HTMLAttributes<HTMLLIElement> & {
  item: NavItem;
};

const NavMenuItem: React.FC<NavMenuItemProps> = ({ item }) => {
  const isDesktopLayout = useMediaQuery("(min-width: 1024px)");

  const [dropdownShown, setDropdownShown] = useState(false);

  const onMouseEnter = useCallback(() => {
    if (isDesktopLayout) {
      setDropdownShown(true);
    }
  }, [isDesktopLayout]);

  const onMouseLeave = useCallback(() => {
    if (isDesktopLayout) {
      setDropdownShown(false);
    }
  }, [isDesktopLayout]);

  const onClick = useCallback(() => {
    setDropdownShown((dropdownShown) => !dropdownShown);
  }, []);

  if (item.nested?.length) {
    return (
      <li
        className="relative flex justify-center items-center gap-1 cursor-pointer hover:text-main-secondary"
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <button type="button">{item.title}</button>
        <FontAwesomeIcon className="text-xs" icon={faAngleDown} />
        <NavMenuDropdown
          className={cn("text-gray-100", { hidden: !dropdownShown })}
          items={item.nested}
        />
      </li>
    );
  } else {
    return (
      <li>
        <Link className="hover:text-main-secondary" href={item.link}>
          {item.title}
        </Link>
      </li>
    );
  }
};

const Nav: React.FC<NavProps> = ({ className, ...rest }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex justify-center items-center">
      <ul
        className={cn(
          "justify-center items-center gap-12 text-sm text-gray-100 flex flex-col absolute right-6 top-16 lg:top-0 lg:right-0 lg:relative lg:flex-row lg:flex",
          {
            hidden: !menuOpen,
            flex: menuOpen,
          },
          className
        )}
      >
        {NAV_ITEMS.map((item) => {
          return <NavMenuItem key={`${item.title}-${item.link}`} item={item} />;
        })}
      </ul>
      <div
        className="bg-white flex justify-center items-center rounded-full h-8 w-8 lg:hidden"
        {...rest}
        onClick={() => setMenuOpen((menuOpen) => !menuOpen)}
      >
        <FontAwesomeIcon icon={faBars} />
      </div>
    </nav>
  );
};

export default Nav;
