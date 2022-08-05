import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name:string = 'Nicolas';
  age:number = 18;
  img:string = 'https://www.w3schools.com/howto/img_avatar.png';
  btnDisabled:boolean = true;
  person = {
    name: 'Nicolas',
    age: 18,
    avatar: 'https://www.w3schools.com/howto/img_avatar.png'
  }
  names: string[] = ['Jesus', 'Jose', 'Amalia'];
  newName = '';
  products: any[] = [
    {
      name: 'El mejor juguete',
      price: 500,
      image: '../assets/img/toy.jpg'
    },
    {
      name: 'Bicicleta casi nueva',
      price: 400,
      image: '../assets/img/bike.jpg'
    },
    {
      name: 'Colección de albumes',
      price: 500,
      image: '../assets/img/album.jpg'
    }
  ];
  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge() {
    this.person.age ++;
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }
  
  addName() {
    this.names.push(this.newName);
    this.newName = '';
  }
  
  deleteName(index:number) {
    this.names.splice(index, 1);
  }
}
