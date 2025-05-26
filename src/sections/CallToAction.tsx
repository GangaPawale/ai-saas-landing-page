"use client";
import { Button } from "@/components/Button";
import { SectionBorder } from "@/components/SectionBorder";
import { SectionContent } from "@/components/SectionContent";
import { Orbit } from "@/components/Orbit";
import underlineImage from "@/assets/images/underline.png";
import { Planet } from "@/components/Planet";
import { useTransform, useSpring, motion } from "framer-motion";
import { useMousePosition } from "./Hero";

export const CallToAction = () => {
    const { xProgress, yProgress } = useMousePosition();

    const translatedLargeX = useTransform(xProgress, [0, 1], ["-25%", "25%"]);
    const translatedLargeY = useTransform(yProgress, [0, 1], ["-25%", "25%"]);
    const springLargeX = useSpring(translatedLargeX);
    const springLargeY = useSpring(translatedLargeY);
    const translatedMediumX = useTransform(xProgress, [0, 1], ["-50%", "50%"]);
    const translatedMediumY = useTransform(yProgress, [0, 1], ["-50%", "50%"]);
    const springMediumX = useSpring(translatedMediumX);
    const springMediumY = useSpring(translatedMediumY);
    const translateSmallX = useTransform(xProgress, [0, 1], ["-200%", "200%"]);
    const translateSmallY = useTransform(yProgress, [0, 1], ["-200%", "200%"]);
    const springSmallX = useSpring(translateSmallX);
    const springSmallY = useSpring(translateSmallY);

    return (
        <section className="" id="calltoaction">
            <div className="container">
                <SectionBorder borderTop>
                    <SectionContent className="relative  isolate [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] ">
                        <div className="absolute -z-10 inset-0 bg-[radial-gradient(circle_farthest-corner,var(--color-fuchsia-900)_50%,var(--color-indigo-900)_75%)] [mask-image:radial-gradient(circle_farthest-side,black,transparent)]"></div>

                        <div className="absolute -z-10 inset-0">
                            <Orbit className="size-[200px] absolute-center" />

                            <Orbit className="size-[350px] absolute-center" />

                            <Orbit className="size-[500px] absolute-center" />

                            <Orbit className="size-[650px] absolute-center" />

                            <Orbit className="size-[800px] absolute-center" />
                        </div>

                        <div className="absolute-center -z-10">
                            <motion.div
                                style={{
                                    x: springLargeX,
                                    y: springLargeY,
                                }}
                            >
                                <Planet
                                    size="lg"
                                    color="violet"
                                    className="translate-y-[200px]  -translate-x-[200px] rotate-45"
                                />
                            </motion.div>
                        </div>

                        <div className="absolute-center -z-10">
                            <motion.div
                                style={{
                                    x: springLargeX,
                                    y: springLargeY,
                                }}
                            >
                                <Planet
                                    size="lg"
                                    color="violet"
                                    className="-translate-y-[200px]  translate-x-[200px] -rotate-135"
                                />
                            </motion.div>
                        </div>
                        <div className="absolute-center -z-10">
                            <motion.div
                                style={{
                                    x: springMediumX,
                                    y: springMediumY,
                                }}
                            >
                                <Planet
                                    size="md"
                                    color="teal"
                                    className="  -translate-x-[500px] rotate-90 "
                                />
                            </motion.div>
                        </div>
                        <div className="absolute-center -z-10">
                            <motion.div
                                style={{
                                    x: springMediumX,
                                    y: springMediumY,
                                }}
                            >
                                <Planet
                                    size="md"
                                    color="teal"
                                    className=" translate-x-[500px] -translate-y-[100px] -rotate-135"
                                />
                            </motion.div>
                        </div>
                        <div className="absolute-center -z-10">
                            <motion.div
                                style={{
                                    x: springSmallX,
                                    y: springSmallY,
                                }}
                            >
                                <Planet
                                    size="sm"
                                    color="fuchsia"
                                    className="-translate-y-[250px]  -translate-x-[400px] rotate-135"
                                />
                            </motion.div>
                        </div>
                        <div className="absolute-center -z-10">
                            <motion.div
                                style={{
                                    x: springSmallX,
                                    y: springSmallY,
                                }}
                            >
                                <Planet
                                    size="sm"
                                    color="fuchsia"
                                    className="translate-y-[150px]  translate-x-[400px] -rotate-45"
                                />
                            </motion.div>
                        </div>

                        <div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl max-w-3xl mx-auto  text-gray-200 font-semibold text-center leading-tight">
                                Join the AI Resolution with
                                <span className="relative isolate inline-block">
                                    <span
                                        className="absolute w-full left-0 top-full -translate-y-1/2 h-4 bg-[linear-gradient(to_right,var(--color-amber-300),var(--color-teal-300),var(--color-violet-400),var(--color-fuchsia-400))]  "
                                        style={{
                                            maskImage: `url(${underlineImage.src})`,
                                            maskSize: "contain",
                                            maskPosition: "top",
                                            maskRepeat: "no-repeat",
                                        }}
                                    ></span>
                                    <span>Sphereal</span>
                                </span>
                            </h2>
                            <p className="text-xl text-center mt-8 max-w-2xl mx-auto">
                                Experiance the transformative power of AI of
                                with Sphereal.Boost your productivity and
                                streamline your workflow with our innovative AI
                                chat Platform.
                            </p>
                            <div className="flex justify-center mt-10 ">
                                <Button variant="secondary">Get Started</Button>
                            </div>
                        </div>
                    </SectionContent>
                </SectionBorder>
            </div>
        </section>
    );
};

export default CallToAction;
