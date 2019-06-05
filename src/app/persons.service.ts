import {PersonModel} from './person.model';
import {StoreService} from './store.service';
import {Injectable} from '@angular/core';

@Injectable()
export class PersonsService {
  persons: PersonModel[] = [];

  constructor(public store: StoreService){}

  addPerson(person:PersonModel):void{
    this.store.savePerson(person);
    this.persons.push(person);
  }
}
