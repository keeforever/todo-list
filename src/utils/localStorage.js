const localStorage = window.localStorage

const setLocalStorage = ({item,value}) => {
  localStorage.setItem(item, JSON.stringify(value))
}

const getLocalStorage  = ({item}) => {
  return JSON.parse(localStorage.getItem(item))
}

export { setLocalStorage, getLocalStorage }