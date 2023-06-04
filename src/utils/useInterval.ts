import { useEffect, useLayoutEffect, useRef } from "react"

/**
 *
 * @param callback
 * @param delay
 *
 * Custon useInterval Hook
 */

function useInterval(callback: () => void, delay: number | null) {
  // save callback so it doesnt change every render
  const savedCallback = useRef(callback)
  // set saved callback to after all DOM mutations
  useLayoutEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    // to end interval set delay to zero or null
    if (!delay && delay !== 0) {
      return
    }
    // set interval
    const id = setInterval(() => savedCallback.current(), delay)
    // clean up
    return () => clearInterval(id)
  }, [delay])
}

export default useInterval
