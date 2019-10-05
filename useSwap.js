// Swap the keys and values of a given object.
 
const useSwap = obj => {
	var swapped = {};
	for (var key in obj) {
	  swapped[obj[key]] = key;
	}
	return swapped;
  };

export default useSwap;
