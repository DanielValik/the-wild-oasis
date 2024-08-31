import { useEffect, useRef } from "react";

function useOutsideClick(handler, listenCapturing = true) {
  const ref = useRef();

  useEffect(
    function () {
      function handleEvent(e) {
        if (ref.current && !ref.current.contains(e.target)) handler();
      }

      document.addEventListener("click", handleEvent, listenCapturing);

      return () =>
        document.removeEventListener("click", handleEvent, listenCapturing);
    },
    [handler, listenCapturing]
  );

  return ref;
}

export default useOutsideClick;
