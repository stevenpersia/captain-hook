/**
 * useFocusOutside
 *
 * Watch for events outside of current element and invoke the
 * callback function when triggered.
 *
 * @param outerRef Reference to the element to focus outside of
 * @param callback Function to call when focus is outside
 */
import usePassiveEventListener from './usePassiveEventListener'

const useFocusOutside = (outerRef, callback) => {
  const clickedOrTabbedOutside = e => {
    // Pressing any other key than these does nothing
    // 9 = tab, 27 = esc
    if (e.type === 'keyup' && [9, 27].indexOf(e.keyCode) === -1) {
      return
    }

    // Esc key immediately calls callback
    if (e.type === 'keyup' && [27].indexOf(e.keyCode) !== -1) {
      callback()

      return
    }

    // If target element is inside the component, focus is not outside
    if (e.target instanceof Node && outerRef.current.contains(e.target)) {
      return
    }

    // For blur, only trigger on Window events
    if (e.type === 'blur' && !(e.target instanceof Window)) {
      return
    }

    // Call user defined callback
    callback()
  }

  // Register and deregister events globally
  usePassiveEventListener('contextmenu', clickedOrTabbedOutside)
  usePassiveEventListener('click', clickedOrTabbedOutside)
  usePassiveEventListener('keyup', clickedOrTabbedOutside)
  usePassiveEventListener('blur', clickedOrTabbedOutside)
}

export default useFocusOutside;
