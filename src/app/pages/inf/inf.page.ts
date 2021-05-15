import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-inf',
  templateUrl: './inf.page.html',
  styleUrls: ['./inf.page.scss'],
})
export class InfPage implements OnInit {

  constructor(private router: Router) { }
  nomePessoa: String;
  idadePessoa: Number;
  alturaPessoa: Number;
  pesoPessoa: Number;
  sexoPessoa: String;

  getValores(){
    console.log(this.nomePessoa);
    console.log(this.idadePessoa);
    console.log(this.alturaPessoa);
    console.log(this.pesoPessoa);
    console.log(this.sexoPessoa);
  }

  enviar(){
    var navigationExtras: NavigationExtras = {
      state: {
        nomePessoa: this.nomePessoa,
        idadePessoa: this.idadePessoa,
        alturaPessoa: this.alturaPessoa,
        pesoPessoa: this.pesoPessoa,
        sexoPessoa: this.sexoPessoa
      }
    }
    this.router.navigate(['/result'], navigationExtras);
  }

  ngOnInit() {
  }

}
