import { useState, useEffect, useCallback } from "react";

export function useMedia(queries, values, defaultValue) {
  // Array containing a media query list for each query
  const mediaQueryLists = queries.map((q) => window.matchMedia(q));
  // Function that gets value based on matching media query
  const getValue = () => {
    // Get index of first media query that matches
    const index = mediaQueryLists.findIndex((mql) => mql.matches);
    // Return related value or defaultValue if none
    return typeof values[index] !== "undefined" ? values[index] : defaultValue;
  };
  // State and setter for matched value
  const [value, setValue] = useState(getValue);
  useEffect(
    () => {
      // Event listener callback
      // Note: By defining getValue outside of useEffect we ensure that it has ...
      // ... current values of hook args (as this hook callback is created once on mount).
      const handler = () => setValue(getValue);
      // Set a listener for each media query with above handler as callback.
      mediaQueryLists.forEach((mql) => mql.addListener(handler));
      // Remove listeners on cleanup
      return () =>
        mediaQueryLists.forEach((mql) => mql.removeListener(handler));
    },
    [] // Empty array ensures effect is only run on mount and unmount
  );
  return value;
}

// Parameter is the boolean, with default "false" value
export const useToggle = (initialState = false) => {
  // Initialize the state
  const [state, setState] = useState(initialState);
  
  // Define and memorize toggler function in case we pass down the component,
  // This function change the boolean value to it's opposite value
  const toggle = useCallback(() => setState(state => !state), []);
  
  return [state, toggle]
}

export function useOnClickOutside(ref, handler) {
  useEffect(
    () => {
      const listener = (event) => {
        // Do nothing if clicking ref's element or descendent elements
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    },
    // Add ref and handler to effect dependencies
    // It's worth noting that because passed in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [ref, handler]
  );
}