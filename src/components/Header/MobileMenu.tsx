"use client";
import React, { useState } from "react";
import "./header.css";
import { routes } from "@/lib/routes";
import { IoIosHome } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { Link } from "react-scroll";
import { CiMenuBurger } from "react-icons/ci";
import { ContainerMobile } from "./ContainerMobile";

// Definimos la interfaz para las props

export const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(!open);
  }

  return (
    <div className="relative lg:hidden">
      <ContainerMobile open={open} />
      <div className="w-full  menu">
        <div className="card ">
          {routes.map((route, i) => {
            return (
              <Link
                key={i}
                className="socialContainer containerOne"
                to={route.url}
              >
                {i === 0 ? (
                  <IoIosHome className="text-3xl text-white " />
                ) : i === 1 ? (
                  <IoPersonSharp className="text-3xl text-white" />
                ) : (
                  <HiOutlineRocketLaunch className="text-3xl text-white" />
                )}
              </Link>
            );
          })}
          <button
            onClick={handleClick}
            className="socialContainer containerOne"
          >
            <CiMenuBurger className="text-3xl text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};
