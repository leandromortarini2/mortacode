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
      <DialogContent className="sm:max-w-[70%] h-[80%]">
        {proyectos.map((item, i) => {
          return (
            <div key={i}>
              {img === item.link && (
                <div>
                  <DialogHeader>
                    <DialogTitle className="text-primary text-2xl">
                      {item.title}
                    </DialogTitle>
                    <DialogDescription className="text-secondary text-base">
                      {item.description}
                    </DialogDescription>
                    <ReactPlayer
                      width={"100%"}
                      url="https://www.youtube.com/watch?v=y9LlnLTH87U"
                    />
                  </DialogHeader>

                  <DialogFooter className="h-20 flex justify-center items-center">
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
