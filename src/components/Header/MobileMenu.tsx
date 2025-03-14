"use client";
import React, { useState } from "react";
import "./header.css";
import { routes } from "@/lib/routes";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { Link } from "react-scroll";
import { CiMenuBurger } from "react-icons/ci";
import { ContainerMobile } from "./ContainerMobile";
import { PiPaintBrushDuotone } from "react-icons/pi";
import { HiOutlineHome } from "react-icons/hi";
import { MdOutlinePersonOutline } from "react-icons/md";

import { ButtonThemeMobile } from "./buttonThemeMobile";
// Definimos la interfaz para las props

export const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(!open);
  }

  return (
    <div className="relative md:hidden bg-primaryDark dark:bg-background  ">
      <ContainerMobile open={open} />
      <div className="w-full  menu z-50 bg-primaryDark dark:bg-background ">
        <div className="card gap-5 bg-primaryDark dark:bg-background">
          {routes.map((route, i) => {
            return (
              <Link
                key={i}
                smooth={true}
                duration={1000}
                className="socialContainer containerOne"
                to={route.url}
              >
                {i === 0 ? (
                  <HiOutlineHome className="text-xl text-title dark:text-white hover:text-primaryDark" />
                ) : i === 1 ? (
                  <MdOutlinePersonOutline className="text-xl text-title dark:text-white hover:text-primaryDark" />
                ) : i === 2 ? (
                  <HiOutlineRocketLaunch className="text-xl text-title dark:text-white hover:text-primaryDark" />
                ) : (
                  <PiPaintBrushDuotone className="text-xl text-title dark:text-white hover:text-primaryDark" />
                )}
              </Link>
            );
          })}

          <ButtonThemeMobile />
          <button
            onClick={handleClick}
            className="socialContainer containerOne"
          >
            <CiMenuBurger className="text-xl text-title dark:text-white hover:text-primaryDark" />
          </button>
        </div>
      </div>
    </div>
  );
};
