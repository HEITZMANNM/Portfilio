import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';
import { MessageService } from 'primeng/api'; 

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  
  form = { name: '',prenom:'', email: '',sujet:'', description: '' };


  constructor(private contactService: ContactService, private messageService: MessageService) {}

  onSubmit(contactForm: NgForm) {
    if (contactForm.invalid) {
      this.messageService.add({ severity: 'error', summary: 'Erreur', detail: 'Veuillez remplir tous les champs.' });
      return;
    }

    const response = this.contactService.sendMail(this.form.name,this.form.prenom, this.form.email, this.form.sujet, this.form.description);
    
    this.messageService.add({ severity: 'success', summary: 'Succès', detail: 'Votre message '+this.form.name+' a été envoyé avec succès.' });
    contactForm.reset();
  }
}
