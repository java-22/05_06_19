export class PersonModel {
  name: string;
  age: number;
  id: number;

  constructor(id: number,name: string, age: number) {
    this.id = id;
    this.name = name;
    this.age = age;
  }
}
