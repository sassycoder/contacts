import angular from 'angular';

import ContactsService from './contacts.service';
import MainController from './app.controller';
import ContactsAppComponent from './contacts-app.component';
import ContactFormComponent from './contact-form.component';
import ContactsListComponent from './contacts-list.component';

export default angular.module('contacts', [])
  .controller('MainController', MainController)
  .factory('ContactsService', ContactsService)  
  .component('contactsApp', ContactsAppComponent)
  .component('contactForm', ContactFormComponent)
  .component('contactsList', ContactsListComponent);
