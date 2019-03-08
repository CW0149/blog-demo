const api = process.env.REACT_API_URL || '/mock'

let token = localStorage.token

if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

export const getMenu = () =>
  fetch(`${api}/menu.json`, { headers })
    .then(res => res.json())

export const getArticalCate = () =>
  fetch(`${api}/menu/article/index.json`, { headers })
    .then(res => res.json())

export const getData = (url) =>
  fetch(`${api}/menu${url}.json`, { headers })
  .then(res =>  res.json())

