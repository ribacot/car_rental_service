export const transformPath = (path) =>
	path.split("/").slice(0, 2).join("/").toLowerCase();
