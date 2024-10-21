"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { routes } from "@/lib/routes";
import { Link } from "react-scroll";
import { IRoutes } from "@/interfaces/IRoutes";

export const ButtonNavigate = () => {
  return (
    <>
      {routes &&
        routes.map((route: IRoutes, i: number) => (
          <Link key={i} to={route.url} smooth={true} duration={1000}>
            <Button variant="buttonNavigate" className="text-sm font-normal">
              {route.name}
            </Button>
          </Link>
        ))}
    </>
  );
};
