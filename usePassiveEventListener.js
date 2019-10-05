/**
 * Passive event listener
 *
 * Improve performance by telling the event handler that event.preventDefault()
 * will never be called.
 *
 * If a passive listener does call preventDefault(), the user agent will do
 * nothing other than generate a console warning.
 */

import useEventListener from './useEventListener'

const usePassiveEventListener = props => {
  const { eventName, handler, element = global, options = {} } = props

  Object.assign(options, { passive: true })

  useEventListener(eventName, handler, element, options)
}

export default usePassiveEventListener;
