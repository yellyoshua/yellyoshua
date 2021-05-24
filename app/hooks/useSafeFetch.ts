import { isBrowser } from "@/utils/storage";

export const useSafeFetch = () => {
  let controller
  let signal

  if (isBrowser) {
    controller = new AbortController();
    signal = controller.signal;
  }

  return {
    Fetch: fetch,
    signal,
    controller
  }
}