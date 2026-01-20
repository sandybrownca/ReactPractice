import { useEffect, useRef } from "react";

export function useClickAnywhere(handler) {

    const handlerRef = useRef(handler);

    useEffect(() => {
        handlerRef.current = handler;
    }, [handler]);

    useEffect(() => {
        function handleClick(event) {
            handlerRef.current(event);
        }

        document.addEventListener("click", handleClick);

        return () => {
            document.removeEventListener("click", handleClick);
        };
    }, []);
} 