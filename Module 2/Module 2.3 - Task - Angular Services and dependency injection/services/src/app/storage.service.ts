import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  storeItem(user : any){

    localStorage.setItem('message' , JSON.stringify(user))
    
  }

  retrieveItem(){
    let data  = localStorage.getItem('message')
    return JSON.parse(data as string)
  }

  removeItem(){

    localStorage.removeItem('message')

  }
}
