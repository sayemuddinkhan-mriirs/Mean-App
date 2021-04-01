import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Contact } from '../contact'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {

  contacts: any;
  isEdit : boolean
  contactObject: any = {
    firstname: '',
    lastname: '',
    phone: ''
  }
 
  constructor(private contactService : ContactService) { }

  ngOnInit(): void {
    console.log("hello");
    console.log(this.contactService.hello);
    this.contactService.getContacts().subscribe((res:any)=>{
      this.contacts = res;
    });      
  }

  onSubmit(form : NgForm){
    console.log(form);
    this.contactService.createContacts(form).subscribe((res : any)=>{
      console.log(res);
      this.getAllContacts();
    })
  }

  getAllContacts(){
    this.contactService.getContacts().subscribe(res=>{
      this.contacts = res;
    })
  }

  delete(contact:any){
    console.log(contact)
    this.contactService.deleteContacts(contact._id).subscribe(res=>{
      this.getAllContacts();
    })
  }

  edit(contact:Object){
   this.contactObject = contact;
   this.isEdit = true;
  }

  onUpdate(){
    this.isEdit = !this.isEdit
    this.contactService.updateContacts(this.contactObject).subscribe((res)=>{
      console.log(res)
     this.getAllContacts();
    })
  }
}
