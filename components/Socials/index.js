import React from "react";
import { SocialsView } from "./view";

export const Socials = () => (
	<SocialsView socials={typeof window != "undefined" && window.SOCIALS} />
);
