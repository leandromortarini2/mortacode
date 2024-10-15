"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-scroll";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";

const DropdownMenuDemo = () => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="buttonNavigate">
            contacto <IoIosArrowDown className="ml-2" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-64  ">
          <DropdownMenuLabel>Mis contactos</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <FaLinkedinIn className="mr-2 h-4 w-4 text-primary" />
            <a
              href="https://www.linkedin.com/in/leandro-mortarini/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Linkedin</span>
            </a>
          </DropdownMenuItem>
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <FaWhatsapp className="mr-2 h-4 w-4 text-primary text-xl" />
              <Link to="about" smooth={true} duration={1000}>
                <span>WhatsApp</span>
              </Link>
            </DropdownMenuItem>

            <DropdownMenuItem>
              <FaGithub className="mr-2 h-4 w-4 text-primary" />
              <span>GitHub</span>
            </DropdownMenuItem>

            <DropdownMenuItem>
              <IoLogoInstagram className="mr-2 h-4 w-4 text-primary" />
              <span> Instagram</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
export default DropdownMenuDemo;
