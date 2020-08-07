import { useEffect, useRef, useState } from "react";

const useHover = () => {
	const [value, setValue] = useState({hover: false, event: null});
	const ref = useRef();

	const handleMouseOver = (e) => setValue({hover: true, event: e});
	const handleMouseOut = () => setValue({hover: false, event: null});

	useEffect(() => {
		const node = ref.current;

		if (node) {
			node.addEventListener("mouseover", handleMouseOver);
			node.addEventListener("mouseout", handleMouseOut);

			return () => {
				node.removeEventListener("mouseover", handleMouseOver);
				node.removeEventListener("mouseout", handleMouseOut);
			};
		}
	}, [ref.current]);

	return [ref, value.hover, value.event];
};

export default useHover;
