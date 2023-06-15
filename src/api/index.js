import axios from 'axios'

// const host = window.location.hostname === 'localhost' ? 'https://lagohalttae-api.ml:8080/' : 'api'

// export const apiClient = axios.create({
//   baseURL: host,
// });

export default async function getAsync(url, config) {
  try {
    const res = await axios(url, config)
    // console.log(res)
    return res.data
  } catch (err) {
    // console.log(err)
    throw new Error(err)
  }
}