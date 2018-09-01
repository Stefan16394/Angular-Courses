import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'

const appKey = 'kid_r1bG4BgIm'; // APP KEY HERE;
const appSecret = "879a84d9729a4b82a2c01835f38b6bba"; // APP SECRET HERE;
const masterSecret="42ffcd2b23804f3d9afa04bcc2a14be8"
const registerUrl = `https://baas.kinvey.com/user/${appKey}`;
const getHotels = `https://baas.kinvey.com/user/${appKey}/login`;
const logoutUrl = `https://baas.kinvey.com/user/${appKey}/_logout`;

@Injectable({
    providedIn:'root'
})
export class RoomService {


    constructor(private http: HttpClient) {
        
    }

    getHotelById(id){
       return this.http.get(`https://baas.kinvey.com/appdata/kid_r1bG4BgIm/hotels/${id}`)
    }

    getRoomByHotelId(id){
        return this.http.get(`https://baas.kinvey.com/appdata/kid_r1bG4BgIm/room?query={"hotel_id":"${id}"}`)
    }

    getAvailableRoomsInHotel(id,from_date,to_date){
        const query = `https://baas.kinvey.com/appdata/kid_r1bG4BgIm/reserved?query={"hotel_id":"${id}","$or":[{"$and":[{"from_date":{"$lte": "${from_date}"}}, {"to_date":{"$gte": "${from_date}"}}]}, {"$and":[{"from_date":{"$gte": "${from_date}"}}, {"from_date":{"$lte": "${to_date}"}}]}]}`
        return this.http.get(query)
    }

    getHotelRating(id){
        return this.http.get(`https://baas.kinvey.com/appdata/kid_r1bG4BgIm/ratings?query={"hotel_id":"${id}"}`)
    }

    rateHotel(body){
      return this.http.post(`https://baas.kinvey.com/appdata/kid_r1bG4BgIm/ratings`, JSON.stringify(body))
    }

    bookRoom(body){
     return this.http.post(`https://baas.kinvey.com/appdata/kid_r1bG4BgIm/reserved`, JSON.stringify(body))
    }

    deleteRoom(id){
      return this.http.delete(`https://baas.kinvey.com/appdata/kid_r1bG4BgIm/room/${id}`)
    }

    createHotel(body){
       return this.http.post(`https://baas.kinvey.com/appdata/kid_r1bG4BgIm/hotels`,JSON.stringify(body))
    }

    createRoom(body){
        return this.http.post(`https://baas.kinvey.com/appdata/kid_r1bG4BgIm/room`,JSON.stringify(body))
    }

    editRoom(roomId,body){
        return this.http.put(`https://baas.kinvey.com/appdata/kid_r1bG4BgIm/room/${roomId}`,JSON.stringify(body))
    }

    getRoomById(roomId){
        return this.http.get(`https://baas.kinvey.com/appdata/kid_r1bG4BgIm/room/${roomId}`)
    }

    getUserBookings(userId){
        return this.http.get(`https://baas.kinvey.com/appdata/kid_r1bG4BgIm/reserved?query={"by_personId":"${userId}"}`)
    }
}