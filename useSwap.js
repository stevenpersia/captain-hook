const useSwap = obj => {
	let swapped = {};
	for (let key in obj) swapped[obj[key]] = key;
	return swapped;
  };

export default useSwap;
