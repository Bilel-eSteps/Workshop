import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { PokemonData } from 'src/app/model/pokemon-data';
import { TestPokeapiService } from 'src/app/services/test-pokeapi.service';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.page.html',
  styleUrls: ['./first-page.page.scss'],
})
export class FirstPagePage implements OnInit {
  constructor(private pokeServ: TestPokeapiService, private nav:NavController) {}
  Pokemon: PokemonData = {
    base_experience: 0,
    height: 0,
    name: '',
    sprites: {
      front_default: '',
    },
    weight: 0,
  };
  async ngOnInit() {
    //@ts-ignore
    let pokeStorage: string =
      localStorage.getItem('pokemon') == null
        ? ''
        : localStorage.getItem('pokemon');
     this.pokeServ.getPokemon(pokeStorage).subscribe(value=>{
      this.Pokemon=value;
      console.log(value);

    });
  }
  goBack(){
  this.nav.navigateRoot("/")
  }
}
