import { ITEMS_PER_PAGE } from './constants.js'
import {redirect} from "react-router-dom";

const API = 'https://api.unsplash.com/'
const KEY = 'vx2WvtN3QiudL0b9nUhs7jIl95NjZzTtzftcvyv56ug'


export const apiMethods = {
  get: async ({ request }) => {
    const url = new URL(request.url)
    const page = url.searchParams.get("page") || 1
    const query = url.searchParams.get("query")
    const searchParams = [`page=${page}`, `per_page=${ITEMS_PER_PAGE}`]
    let path = 'photos'

    if (query?.trim()) {
      path = 'search/photos'
      searchParams.push(`query=${query.trim()}`)
    }
    // ${API}search/photos?per_page=${ITEMS_PER_PAGE}&page=${page}&query=${query}
    const response = await fetch(`${API}${path}?${searchParams.join('&')}`, {
      headers: {
        Authorization: `Client-ID ${KEY}`
      }
    })

    if (query?.trim()) {
      const { results, total } = await response.json()

      return {
        data: results,
        count: total,
        page,
        query
      }
    } else {
      const count = response.headers.get('X-total')
      const data = await response.json()

      return {
        count,
        data,
        page,
        query
      }
    }
  },
  getOne: async ({ params }) => {
    const response = await fetch(`${API}photos/${params.id}`, {
      headers: {
        Authorization: `Client-ID ${KEY}`
      }
    })

    const item = await response.json()
    return { item }
  }
}
