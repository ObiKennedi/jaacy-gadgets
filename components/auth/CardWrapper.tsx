"use client"

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { FormHeader } from "./FormHeader";
import { GoogleAuthButton } from "./GoogleAuthButton";

import "@/style/auth/CarWrapper.scss"

interface CardWrapperProps {
    children: React.ReactNode;
    headerLabel: string;
    headerWriteUp: string;
    showBackLink?: boolean;
    backLinkHref?: string;
    backLinkWriteUp?: string;
    backLinkLabel?: string;
    showSocial?: boolean;
}

export const CardWrapper = ({
    children,
    headerLabel,
    headerWriteUp,
    showBackLink,
    backLinkHref,
    backLinkWriteUp,
    backLinkLabel,
    showSocial
}: CardWrapperProps) => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <div className="card-wrapper glass" data-aos="fade-top">
            <FormHeader
                headerLabel={headerLabel}
                headerWriteUp={headerWriteUp}
            />
            {showSocial && (
                <GoogleAuthButton />
            )}
            <div>{children}</div>
            {showBackLink && (
                <footer>{backLinkWriteUp} <a href={backLinkHref}>{backLinkLabel}</a></footer>
            )}
        </div>
    )
}