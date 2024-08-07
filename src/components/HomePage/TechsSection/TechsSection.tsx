import Image from "next/image"
import { motion } from "framer-motion"
import { WaveSvg } from "@/components/svg/Wave"
import { useRef } from "react"
import { Languages } from "./Languages"
import { Techs } from "./Techs"
import { bgDots } from "@/assets"

export const TechsSection = () => {

    const ref = useRef(null)


    return (
        <section ref={ref} className="w-full relative flex justify-center py-32">

            <Image priority src={bgDots} alt="bg" fill className="object-cover" />
            <div className="px-px relative gap-5">
                <div className="center flex-col gap-5">
                    <motion.h1
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="text-center text-[2rem] md:text-[3rem] max-w-[50rem] font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: .1 }}
                        className="center rounded-full w-full max-w-[50rem] border-2 py-2">
                        <span className="font-bold text-primary-color text-center">Principais tencologias e habilidades</span>

                    </motion.div>

                    <Languages />
                    <Techs />
                    <div className="center">
                        <a href="/" target="_blank" className="center flex-col w-max">
                            <span className="my-2">Acesse o código fonte deste site</span>
                            <div className="w-full border-2 h-[.5rem] bg-primary-color rounded-full"></div>
                        </a>
                    </div>
                </div>
            </div>

            <WaveSvg containerRef={ref} className="absolute left-0 top-0 opacity-15 -rotate-90" width={300} height={300} />
        </section>
    )
}
