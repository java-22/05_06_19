import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {PersonModel} from '../person.model';
import {PersonsService} from '../persons.service';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css'],
  providers:[/*PersonsService*/]
})
export class PersonFormComponent implements OnInit,OnDestroy{
  @Output('addPerson') addPersonEmitter: EventEmitter<PersonModel> = new EventEmitter();
  id: number = 0;
  name: string = "";
  age: number = 0;
  constructor(public service: PersonsService) { }

  addPerson(){
    let person:PersonModel = new PersonModel(this.id,this.name,this.age);
    // this.addPersonEmitter.emit(person);
    this.service.addPerson(person);
    this.id = 0;
    this.name = "";
    this.age = 0;
  }

  ngOnDestroy(): void {
    console.log("PersonForm OnDestroy");
  }

  ngOnInit(): void {
    console.log("PersonForm OnInit");
  }
}
