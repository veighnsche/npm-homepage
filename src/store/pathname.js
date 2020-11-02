import { writable } from 'svelte/store';

function createPathname() {
  const { subscribe, set } = writable(window.location.pathname);

  return {
    subscribe,
    set: pathname => () => {
      window.history.pushState(undefined, undefined, pathname)
      set(pathname)
    }
  };
}

export const pathname = createPathname();
