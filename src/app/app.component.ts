import { Component } from '@angular/core';
import { Product } from './product.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  widthImg: number = 10;
  name: string = 'Nicolas';
  age: number = 18;
  img: string = 'https://www.w3schools.com/howto/img_avatar.png';
  btnDisabled: boolean = true;
  register = {
    name: "",
    email: "",
    password: ""
  }
  person = {
    name: 'Nicolas',
    age: 18,
    avatar: 'https://www.w3schools.com/howto/img_avatar.png',
  };
  names: string[] = ['Jesus', 'Jose', 'Amalia'];
  newName = '';
  products: Product[] = [
    {
      name: 'El mejor juguete',
      price: 500,
      image: '../assets/img/toy.jpg',
      category: 'sssa',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 400,
      image: '../assets/img/bike.jpg',
    },
    {
      name: 'Colección de albumes',
      price: 500,
      image: '../assets/img/album.jpg',
    },
    {
      name: 'El mejor juguete',
      price: 500,
      image: '../assets/img/toy.jpg',
      category: 'sssa',
    },
    {
      name: 'El mejor juguete',
      price: 500,
      image: '../assets/img/toy.jpg',
      category: 'sssa',
    }
  ];
  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge() {
    this.person.age++;
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

  deleteName(index: number) {
    this.names.splice(index, 1);
  }

  onRegister() {
    console.log(this.register);
    
  }
}
