import React from 'react'
import GoogleMapReact from 'google-map-react'
import LocationPin from './LocationPin'
import '../styles/map.css'

const key = 'AIzaSyDI2H0QaWV5My47SZBXxSoEREr4mKynMfg'

const Map = ({ location, zoomLevel }) => (
	<div className="map">
		 <div className="google-map">
			<GoogleMapReact
				bootstrapURLKeys={{ key }}
				center={[Number(location.lat), Number(location.lng)]}
				zoom={zoomLevel}
				yesIWantToUseGoogleMapApiInternals
				options={{ gestureHandling: "greedy" }}
			>
				<LocationPin
					lat={location.lat}
					lng={location.lng}
					text={location.address}
				/>
			</GoogleMapReact>
		</div>

	</div>
)

export default Map