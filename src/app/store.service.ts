import {PersonModel} from './person.model';

export class StoreService {

  savePerson(person: PersonModel){
    localStorage.setItem(person.id+'',JSON.stringify(person));
  }
}
