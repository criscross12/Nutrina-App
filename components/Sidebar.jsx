import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useMemo } from "react";
import {
  ArticleIcon,
  CollapsIcon,
  CalendarIcon,
  LogoIcon,
  LogoutIcon,
  UsersIcon,
  HelpIcon,
  Report,
  Dashbord,
} from "./icons";

const menuItems = [
  { id: 1, label: "Paciente", icon: UsersIcon, link: "/admin/patients" },
  { id: 2, label: "Agenda", icon: CalendarIcon, link: "/admin/consultation" },
  { id: 3, label: "Reportes", icon: Report, link: "/admin/users" },
  { id: 4, label: "Dashbord", icon: Dashbord, link: "/admin/dashbord" },
  { id: 5, label: "Perfil", icon: LogoutIcon, link: "/admin/profile" },
  { id: 5, label: "Ayuda", icon: HelpIcon, link: "/" },
];

const Sidebar = () => {
  const [toggleCollapse, setToggleCollapse] = useState(false);
  const [isCollapsible, setIsCollapsible] = useState(false);

  const router = useRouter();

  const activeMenu = useMemo(
    () => menuItems.find((menu) => menu.link === router.pathname),
    [router.pathname]
  );

  const wrapperClasses = classNames(
    "h-screen fixed sticky top-0 px-4 pt-8 pb-4 bg-teal-500 justify-between flex flex-col",
    {
      ["w-60"]: !toggleCollapse,
      ["w-20"]: toggleCollapse,
    }
  );

  const collapseIconClasses = classNames(
    "p-4 rounded bg-light-lighter absolute right-0",
    {
      "rotate-180": toggleCollapse,
    }
  );

  const getNavItemClasses = (menu) => {
    return classNames(
      "flex items-center cursor-pointer hover:bg-teal-300 rounded w-full overflow-hidden whitespace-nowrap"
    );
  };

  const onMouseOver = () => {
    setIsCollapsible(!isCollapsible);
  };

  const handleSidebarToggle = () => {
    setToggleCollapse(!toggleCollapse);
  };

  return (
    <div class="flex">
      <aside class="h-screen sticky top-0">
        <div className="hidden md:block">
          <div
            className={wrapperClasses}
            onMouseEnter={onMouseOver}
            onMouseLeave={onMouseOver}
            style={{ transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s" }}
          >
            <div className="flex flex-col">
              <div className="flex items-center justify-between relative">
                <div className="flex items-center pl-1 gap-4">
                  <LogoIcon />
                  <span
                    className={classNames(
                      "mt-2 text-lg font-medium text-text",
                      {
                        hidden: toggleCollapse,
                      }
                    )}
                  >
                    <h1 className="font-bold">Nutriña</h1>
                  </span>
                </div>
                {isCollapsible && (
                  <button
                    className={collapseIconClasses}
                    onClick={handleSidebarToggle}
                  >
                    <CollapsIcon />
                  </button>
                )}
              </div>

              <div className="flex flex-col items-start mt-24">
                {menuItems.map(({ icon: Icon, ...menu }) => {
                  const classes = getNavItemClasses(menu);
                  return (
                    <div className={classes}>
                      <Link href={menu.link}>
                        <a className="flex py-4 px-3 items-center w-full h-full">
                          <div style={{ width: "2.5rem" }}>
                            <Icon />
                          </div>
                          {!toggleCollapse && (
                            <span
                              className={classNames(
                                "text-md font-medium text-text-light"
                              )}
                            >
                              {menu.label}
                            </span>
                          )}
                        </a>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className={`${getNavItemClasses({})} px-3 py-4 `}>
              <div style={{ width: "2.5rem" }}>
                <LogoutIcon />
              </div>
              <Link href={"/admin/profile"}>
                <span
                  className={classNames("text-md font-medium text-text-light")}
                >
                  <a>Cerrar sesión</a>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
