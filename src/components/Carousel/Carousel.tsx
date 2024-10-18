import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Modal } from "@/components/Modal/Modal";
import { proyectos } from "@/lib/projectsArray";

export function CarouselOrientation() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      orientation="vertical"
      className="w-full h-full bg-transparent "
    >
      <CarouselContent className="-mt-1 h-[350px] bg-transparent">
        {proyectos.map((items, index) => (
          <CarouselItem key={index}>
            <div className="p-2">
              <Card className="h-[350px] overflow-hidden border-none shadow-none bg-transparent">
                <CardContent className="  ">
                  <div className=" h-[350px] flex justify-center items-center  ">
                    <Modal img={items.link} />
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
