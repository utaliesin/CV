export function JSX(name, props) {
	const component = document.createElement(name);
	for (const [key, value] of Object.entries(props)) {
		if (key === "children") {
			if (Array.isArray(value)) {
				for (const child of value) {
					if (typeof child === "string") {
						component.appendChild(document.createTextNode(child));
					} else {
						component.appendChild(child);
					}
				}
			} else if (typeof value === "string") {
				component.appendChild(document.createTextNode(value));
			} else {
				component.appendChild(value);
			}
		} else if (key.startsWith("on")) {
			const eventName = key.toLowerCase().substring(2);
			component.addEventListener(eventName, value);
		} else if (key === "style") {
			for (const [styleKey, styleValue] of Object.entries(value)) {
				component.style[styleKey] = styleValue;
			}
		} else {
			component.setAttribute(key, value);
		}
	}
	return component;
}

