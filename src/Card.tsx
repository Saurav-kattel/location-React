import React, {useEffect, useState} from "react";

const Card = () =>{
interface Locaion{
    place_id: number,
    licence: string,
    osm_type: string,
    osm_id: number,
    lat: number,
    lon: number,
    place_rank: number,
    category: string,
    type: string,
    importance: string,
    addresstype: string,
    name: null | string,
    display_name: string,
    address: {
        city_district: string,
        town: string,
        municipality:string,
        county: string,
        region: string,
        postcode: number,
        country: string,
        country_code:string
    },
    boundingbox: [

    ]

}
  const [locationData, setLocationData]= useState<Locaion>()

useEffect(()=>{
function fechlocationData(){
navigator.geolocation.getCurrentPosition(async pos=>{
const {latitude,longitude} = pos.coords

let data = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`)
let json = await data.json()
setLocationData(json)
})
}

fechlocationData()
},[locationData])
return(
	<>
	<ul>

<li>Name: {locationData?.display_name}</li>
<li>CountryCode: {locationData?.address.country_code}</li>
<li>place Rank: {locationData?.place_rank}</li>
<li>Address type: {locationData?.addresstype}</li>
<li>Category: {locationData?.category}</li>
	</ul>
		</>

	)
}
export default Card
