import { isBrowser } from "@/app/utils/storage";

export const useSafeFetch = () => {
  let controller
  let signal

  if (isBrowser) {
    controller = new AbortController();
    signal = controller.signal;
  }

  return {
    safeFetch: fetch,
    signal,
    controller
  }
}