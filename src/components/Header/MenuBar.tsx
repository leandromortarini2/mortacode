import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

export const MenuBar = () => {
  return (
    <div>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger className="cursor-pointer capitalize  text-base font-semibold  text-secondary hover:text-primary border-none ">
            Contacto <IoIosArrowDown className="ml-2 z-50" />
          </MenubarTrigger>
          <MenubarContent className="hidden md:flex flex-col z-50 ">
            <MenubarItem>
              <FaLinkedinIn className="mr-2 h-4 w-4 text-primary" />
              <a
                href="https://www.linkedin.com/in/leandro-mortarini/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Linkedin</span>
              </a>
            </MenubarItem>
            <MenubarItem>
              <FaWhatsapp className="mr-2 h-4 w-4 text-primary text-xl" />

              <a
                href="https://wa.me/5401126034427?text=Hola%20Leandro,%20estuve%20viendo%20tu%20portfolio%20y%20quería%20conversar%20con%20vos.
"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>WhatsApp</span>
              </a>
            </MenubarItem>
            <MenubarItem>
              <FaGithub className="mr-2 h-4 w-4 text-primary" />
              <a
                href="https://github.com/leandromortarini2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>GitHub</span>
              </a>
            </MenubarItem>
            <MenubarItem>
              <IoLogoInstagram className="mr-2 h-4 w-4 text-primary" />
              <a
                href="https://www.instagram.com/mortacode/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span> Instagram</span>
              </a>
            </MenubarItem>
            <MenubarSeparator />
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
};
