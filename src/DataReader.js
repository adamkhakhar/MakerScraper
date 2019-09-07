import districtData from './data/illinois_high_school_districts.json'
import latLongData from './data/public_school_addresses_and_lat_longs.json'

export default class DataReader {
  constructor() {
    this.cache = {}
  }

  _checkCache(key) {
    return this.cache[key] || null
  }

  _registerInCache(key, value) {
    this.cache[key] = value
  }

  getLatLongs() {
    return latLongData
  }

  getRawDistrictData() {
    return districtData
  }

  getDistrictProperties() {
    const key = 'getDistrictProperties'
    const cacheRes = this._checkCache(key)
    if (cacheRes) return cacheRes

    const data = districtData.features.map(
      ({ properties: { ADDR, CITY, DISTRICT, HIGH_NAME, NAME, PHONE } }) => ({
        addr: ADDR,
        city: CITY,
        district: DISTRICT,
        highName: HIGH_NAME,
        name: NAME,
        phone: PHONE,
      })
    )

    this._registerInCache(key, data)
    return data
  }
}
