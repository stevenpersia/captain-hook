const useSlug = string => {
	const from = "àáäâãåăæçèéëêǵḧìíïîḿńǹñòóöôœøṕŕßśșțùúüûǘẃẍÿź·/_,:;";
	const to = "aaaaaaaaceeeeghiiiimnnnooooooprssstuuuuuwxyz------";
	const regex = new RegExp(from.split("").join("|"), "g");

	return string
		.toString()
		.toLowerCase()
		.replace(/\s+/g, "-") // Replace spaces with -
		.replace(regex, character => to.charAt(from.indexOf(character))) // Replace special characters
		.replace(/&/g, "-and-") // Replace & with ‘and’
		.replace(/[^\w\-]+/g, "") // Remove all non-word characters
		.replace(/\-\-+/g, "-") // Replace multiple - with single -
		.replace(/^-+/, "") // Trim - from start of text
		.replace(/-+$/, ""); // Trim - from end of text
};

export default useSlug;
