'use client'

import React from "react";
import {
    faYoutube,
    faXTwitter,
    faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const navItems = [
    {
        name: "Features",
        href: "#features",
    },
    {
        name: "Pricing",
        href: "#pricing",
    },
    {
        name: "Testimonials",
        href: "#testimonials",
    },
    {
        name: "Login",
        href: "#header",
    },
];

export const socialLinks = [
    {
        name: "Youtube",
        icon: faYoutube,
        href: "#",
    },
    {
        name: "X",
        icon: faXTwitter,
        href: "#",
    },
    {
        name: "Discord",
        icon: faDiscord,
        href: "#",
    },
];

export const Footer = () => {
    return (
        <footer className=" border-t border-[var(--color-border)]" id="footer">
            <div className="container py-8">
                <div className="flex flex-col lg:flex-row lg:justify-between  items-center gap-8 ">
                    <div className="font-extrabold text-2xl">Spherial.ai</div>
                    <nav className="flex flex-col md:flex-row  items-center gap-8 md:gap-16">
                        {navItems.map(({ name, href }) => (
                            <a
                                key={href}
                                href={href}
                                className="uppercase text-xs tracking-wide font-bold text-gray-400"
                                onClick={(e)=>{
                                    e.preventDefault();
                                    const element =document.querySelector(href);
                                    if(element){
                                        element.scrollIntoView({
                                            behavior:'smooth'
                                        })
                                    }
                                }}
                            >
                                {name}
                            </a>
                        ))}
                    </nav>
                </div>
                <div className="mt-16 flex  flex-col md:flex-row-reverse md:justify-between  items-center gap-8">
                    <div className="flex items-center gap-6 ">
                        {socialLinks.map(({ name, icon, href }) => (
                            <a key={name} href={href}>
                                <div
                                    
                                    className="size-10 rounded-full bg-gray-900 inline-flex items-center justify-center"
                                >
                                    <FontAwesomeIcon
                                        icon={icon}
                                        className="size-4 text-gray-300"
                                    />
                                </div>
                            </a>
                        ))}
                    </div>
                    <p className="text-sm text-gray-500">
                        &copy;Frontend Tribe. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
