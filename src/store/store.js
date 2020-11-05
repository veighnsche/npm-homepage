import { writable } from 'svelte/store'

export const
  home = '/',
  deepmerge = '/deepmerge',
  csv = '/csv',
  pipe = '/pipe'

const jumboClasses = {
  [home]: 'home',
  [deepmerge]: 'deepmerge',
  [csv]: 'csv',
  [pipe]: 'pipe',
}

const brandColors = {
  [home]: '#21212b',
  [deepmerge]: '#11332a',
  [csv]: '#3c3c3c',
  [pipe]: '#10181b',
}

const brandColorsAlt = {
  [home]: '#fcad2c',
  [deepmerge]: '#505157',
  [csv]: '#a9a9a9',
  [pipe]: '#807573',
}

const active = path => name => path === name ? 'active' : ''

function generate(path) {
  const activePath = active(path)
  return {
    name: path,
    brandColor: brandColors[path],
    brandColorAlt: brandColorsAlt[path],
    classes: {
      jumbo: jumboClasses[path],
      arrow: home !== path ? 'active' : '',
      header: {
        [deepmerge]: activePath(deepmerge),
        [csv]: activePath(csv),
        [pipe]: activePath(pipe),
      },
    },
  }
}

function createPathnameStore() {
  const { subscribe, set } = writable(generate(window.location.pathname))

  return {
    subscribe,
    set: path => () => {
      window.history.pushState(undefined, undefined, path)
      set(generate(path))
    },
  }
}

export const store = createPathnameStore()
