import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from './contact';
//import axios from 'axios'
// import { Contact } from './contact'

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  public hello = "sayem";

  constructor(private http : HttpClient) { }

  getContacts(){
    return this.http.get('http://localhost:3000/api/contact');
  }

  createContacts(contact: any){
    const headerDict = {
      'Access-Control-Allow-Origin': '*'
    }
    
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict)
    };

    return this.http.post('http://localhost:3000/api/contact',contact,requestOptions);
   
  }

  updateContacts(contact: any){
    return this.http.put('http://localhost:3000/api/contact/' +contact._id,contact);
  }

  deleteContacts(id: any){
    console.log(id)
    return this.http.delete('http://localhost:3000/api/contact/'+id);

  }
}