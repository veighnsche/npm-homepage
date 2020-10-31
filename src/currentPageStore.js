import { writable } from 'svelte/store'

function createNav() {
  const { subscribe, set } = writable('home')

  return {
    subscribe,
    set: nav => () => set(nav)
  }
}

export const currentPage = createNav()
