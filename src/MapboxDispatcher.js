import axios from 'axios'

const ROOT = 'https://api.mapbox.com/'
const TOKEN = process.env.REACT_APP_MAPBOX_API_KEY

export default class MapboxDispatcher {
  _getURL(endpoint) {
    return `${this.root}${endpoint}?access_token=${this.token}`
  }

  constructor() {
    if (!TOKEN) {
      throw new Error('"REACT_APP_MAPBOX_API_KEY" must be in your environment')
    }

    this.root = ROOT
    this.token = TOKEN
  }

  geocodeAddress(address) {
    const url = this._getURL(`geocoding/v5/mapbox.places/${address}`)
    return axios
      .get(url)
      .then(console.log)
      .catch(console.log)
  }
}
