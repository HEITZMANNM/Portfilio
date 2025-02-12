import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  sendMail(name: string, prenom:string, email: string, sujet:string, description: string): string {
    console.log('Message envoyé :', { name, prenom, email, sujet, description });
    return 'Votre message {{name}}, a bien été envoyé';
  }
}
