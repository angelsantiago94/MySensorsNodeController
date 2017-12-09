import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  text = 'hola';
  options: any = {maxLines: 1000, printMargin: false};
  constructor() { }

  ngOnInit() {
  }

  onChange(code) {
    console.log('new code', code);
    this.text = code;
    console.log(this.text);
  }

  botonPulsado() {
    console.log('boton' + this.text);
  }

}
