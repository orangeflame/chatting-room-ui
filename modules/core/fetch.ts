import crossFetch from "cross-fetch";

type fetch = typeof window.fetch;
export const fetch: fetch = crossFetch;
