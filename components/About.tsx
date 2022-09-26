import React from "react";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src="https://m.media-amazon.com/images/M/MV5BMjA3ODA0MDI4OF5BMl5BanBnXkFtZTgwMjEyNzI3MDE@._V1_UY1200_CR585,0,630,1200_AL_.jpg"
        alt=""
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:h-[500px] xl:w-[600px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit
          amet elit quis nisi cursus cursus. Orci varius natoque penatibus et
          magnis dis parturient montes, nascetur ridiculus mus. In fringilla est
          vel arcu vulputate rutrum. Nam viverra ligula arcu, eget porta lorem
          interdum venenatis. Integer id euismod mi, at auctor nunc. Suspendisse
          semper, ipsum sed laoreet vestibulum, erat arcu mattis elit, quis
          placerat sem tortor ultricies felis. Nulla sollicitudin laoreet
          luctus. In hac habitasse platea dictumst. Vivamus id placerat sem.
          Etiam vel arcu a ante consectetur ultricies. Phasellus in aliquam
          dolor, at auctor tellus. Sed suscipit nisl ut dolor porttitor
          pulvinar. Vivamus dictum odio ut nulla condimentum feugiat. Integer
          aliquet pretium eleifend.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
