import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.page.html',
  styleUrls: ['./result.page.scss'],
})

export class ResultPage implements OnInit {

  nomePessoa: String;
  idadePessoa: Number;
  alturaPessoa: number;
  pesoPessoa: number;
  sexoPessoa: String;
  c: String;
  s: String;
  imc: number;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params=> {
      let state=this.router.getCurrentNavigation().extras.state;
      if(state){
        this.nomePessoa=state.nomePessoa;
        this.idadePessoa=state.idadePessoa;
        this.s=state.sexoPessoa;
        if(this.s=="m"){
          this.sexoPessoa="Masculino";
        }else{this.sexoPessoa="Feminino";
      }

      this.pesoPessoa = state.pesoPessoa;
      this.alturaPessoa = state.alturaPessoa;
      this.imc = this.pesoPessoa / (this.alturaPessoa ** 2);

      if(this.sexoPessoa = "Masculino"){
        if(this.imc < 20){
          this.c = "Abaixo do Peso";
        }
        else if(this.imc > 20 && this.imc < 24.9){
          this.c = "Normal";
        }
        else if(this.imc > 25 && this.imc < 29.9){
          this.c = "Obesidade Leve";
        }
        else if(this.imc > 30 && this.imc < 39.9){
          this.c = "Obesidade Moderada";
        }
        else if(this.imc > 40){
          this.c = "Obesidade Mórbida";
        }
      else if(this.sexoPessoa = "Feminino"){
        if(this.imc < 19){
          this.c = "Abaixo do Peso";
        }
        else if(this.imc > 19 && this.imc < 23.9){
          this.c = "Normal";
        }
        else if(this.imc > 24 && this.imc < 28.9){
          this.c = "Obesidade Leve";
        }
        else if(this.imc > 29 && this.imc < 38.9){
          this.c = "Obesidade Moderada";
        }
        else if(this.imc > 39){
          this.c = "Obesidade Mórbida";
        }
      }
      }
    }
  });
  }

  ngOnInit() {
  }

}
