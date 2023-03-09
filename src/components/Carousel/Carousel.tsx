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
  const [state, setSate] = useState()
  
  useEffect(() => {
    if (ref.current) {
      setWidth(ref.current?.scrollWidth - ref.current?.offsetWidth);
    }
  }, [ref.current?.offsetWidth, ref.current?.scrollWidth]);

  const resize =() => {
    if (ref.current) {
      setWidth(ref.current?.scrollWidth - ref.current?.offsetWidth);
    }
  }
  return (
    <ContainerCarousel id={title}>
      <h3>{title}</h3>
      <motion.div key={width} className="carrousel" >
        <motion.div
          onDrag={resize}
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
