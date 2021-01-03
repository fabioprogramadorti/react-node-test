import axios from 'axios'

const key = 'AIzaSyDI2H0QaWV5My47SZBXxSoEREr4mKynMfg'

async function getLocationByCity( city ) {
	const formatedCity = city.replace(' ', '+')

	var baseUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${formatedCity}&key=${key}`

	const response = await axios.get(baseUrl)

	return response.data.results[0].geometry.location
}

export default getLocationByCity