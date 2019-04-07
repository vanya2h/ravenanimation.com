import React from "react";
import ReactSVG from "react-svg";
import idea from "./idea.svg";
import manager from "./manager.svg";
import group from "./group.svg";
import zap from "./zap.svg";

export function Icon({ icon, ...restProps }) {
	switch (icon) {
	case "idea": {
		return <ReactSVG src={idea} {...restProps} />;
	}
	case "manager": {
		return <ReactSVG src={manager} {...restProps} />;
	}
	case "group": {
		return <ReactSVG src={group} {...restProps} />;
	}
	case "zap": {
		return <ReactSVG src={zap} {...restProps} />;
	}
	default: {
		return null;
	}
	}
}
