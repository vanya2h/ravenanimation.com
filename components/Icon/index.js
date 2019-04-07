import React from "react";
import idea from "./idea.svg";
import manager from "./manager.svg";
import group from "./group.svg";
import zap from "./zap.svg";

export function Icon({ icon, ...restProps }) {
	switch (icon) {
	case "idea": {
		return <img src={idea} {...restProps} />;
	}
	case "manager": {
		return <img src={manager} {...restProps} />;
	}
	case "group": {
		return <img src={group} {...restProps} />;
	}
	case "zap": {
		return <img src={zap} {...restProps} />;
	}
	default: {
		return null;
	}
	}
}
