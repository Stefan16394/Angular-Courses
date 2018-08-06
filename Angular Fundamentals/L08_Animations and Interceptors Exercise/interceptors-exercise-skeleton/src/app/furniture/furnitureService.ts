import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { CreateFurnitureModule } from './models/create.model';
import { FurnitureModel } from './models/furniture.model';

const create = "http://localhost:5000/furniture/create"
const all = "http://localhost:5000/furniture/all"
const details = "http://localhost:5000/furniture/details/"
const my = "http://localhost:5000/furniture/mine"
const remove = "http://localhost:5000/furniture/delete/"

@Injectable({
    providedIn: 'root'
})
export class FurnitureService {
    constructor(private http: HttpClient) {
    }

    createFurniture(body: CreateFurnitureModule) {
        return this.http.post(create, body);
    }

    getAll() {
        return this.http.get<FurnitureModel[]>(all)
    }

    furnitureDetails(id: string) {
        return this.http.get<FurnitureModel>(details + id)
    }

    myFurniture() {
        return this.http.get<FurnitureModel[]>(my)
    }

    remove(id: string) {
        return this.http.delete(remove + id)
    }
}