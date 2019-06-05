import {Component, OnDestroy, OnInit} from '@angular/core';
import {PersonModel} from '../person.model';
import {PersonsService} from '../persons.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css'],
  providers:[/*PersonsService*/]
})
export class PersonListComponent implements OnInit, OnDestroy{
  persons: PersonModel[] = [];

  constructor(public service: PersonsService) { }

  addNewPerson(person: PersonModel){
    this.persons.push(person);
  }

  ngOnDestroy(): void {
    console.log("PersonList OnDestroy");
  }

  ngOnInit(): void {
    console.log("PersonList OnInit");
  }

}
