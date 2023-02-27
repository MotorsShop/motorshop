import { ContainerCarousel } from "./styles";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ReactNode } from "react";
import React from "react";

interface Iprops {
  title: string;
  children: ReactNode;
}

export default function Carousel({ title, children }: Iprops) {
  const ref = useRef<HTMLInputElement>(null);
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    if (ref.current) {
      console.log(ref.current?.scrollWidth)
      setWidth(ref.current?.scrollWidth - ref.current?.offsetWidth);
    }
  }, []);

  return (
    <ContainerCarousel>
      <h3>{title}</h3>
      <motion.div className="carrousel">
        <motion.div
          className="inner"
          ref={ref}
          drag={"x"}
          dragConstraints={{ right: 0, left: -width }}
          whileTap={{ cursor: "grabbing" }}
        >
          {children}
        </motion.div>
      </motion.div>
    </ContainerCarousel>
  );
}
