
import axios, { AxiosPromise } from 'axios';

interface HasId {
  id?: number;
}


export class Sync<T extends HasId> {
  constructor (public rootURL: string) { }
  
  fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootURL}/users/${id}`);
  }

  save(data: T): AxiosPromise {
    const { id } = data;  
    
    if (id) {
      // Put request
      return axios.put(`${this.rootURL}/users/${id}`, data);
    } else {
      // Post Request
      return axios.post(`${this.rootURL}/users`, data); 
    }
  }
}