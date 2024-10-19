/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { proyectos } from "@/lib/projectsArray";
import React from "react";
import ReactPlayer from "react-player";

interface ImgModalProps {
  img: string;
  isOpen: boolean;
  onClose: () => void;
}

// Render a YouTube video player
export function Modal({ img, isOpen, onClose }: ImgModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:w-[70%] h-[90%]  overflow-hidden">
        {proyectos.map((item, i) => {
          return (
            <div
              key={i}
              className="flex flex-col h-full justify-center items-center"
            >
              {img === item.link && (
                <div className="w-full">
                  <DialogHeader className="text-center mb-4">
                    <DialogTitle className="text-primary text-2xl">
                      {item.title}
                    </DialogTitle>
                    <DialogDescription className="text-secondary text-base">
                      {item.description}
                    </DialogDescription>
                  </DialogHeader>

                  <div className="w-full h-auto mb-6"></div>

                  <DialogFooter className="flex justify-center items-center gap-4">
                    <a
                      href={item.vercel}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="buttonNavigate"
                        onClick={onClose}
                        className="bg-transparent"
                      >
                        Ir Web
                      </Button>
                    </a>
                    <Button variant="buttonNavigate" onClick={onClose}>
                      Cerrar
                    </Button>
                  </DialogFooter>
                </div>
              )}
            </div>
          );
        })}
      </DialogContent>
    </Dialog>
  );
}
