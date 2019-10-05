import { useState, useCallback } from "react";

export const useToggle = initial => {
	const [open, setOpen] = useState(initial);

	return [open, useCallback(() => setOpen(status => !status))];
};
