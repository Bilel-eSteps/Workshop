import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';
import { TestPokeapiService } from '../services/test-pokeapi.service';
import { Pokemon } from '../model/pokemon';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit, OnDestroy {
  constructor(
    private loading: LoadingController,
    private nav: NavController,
    private pokeService: TestPokeapiService
  ) {}
  interWatchDog: any;
  listOfPokemons:Pokemon[]=[];
  async ngOnInit() {
    this.pokeService.getPokemons(20).subscribe((value)=>{
    console.log(value);
    this.listOfPokemons=value.results
    })
    console.log('here');
    const load = this.loading.create({});
    //  (await load).present();
    setTimeout(async () => {
      (await load).dismiss();
    }, 8000);
  }
  navigateToFirstPage() {
    this.nav.navigateRoot('/first-page');
  }
  ionViewWillEnter() {
    this.interWatchDog = setInterval(() => {
      console.log('this Page is still Alive');
    }, 2000);
  }
  // ionViewDidEnter(){
  //   console.log('ionViewDidEnter')
  // }
  ionViewDidleave() {
    console.log('ionViewDidleave');
  }
  ionViewWillleave() {
    console.log('ionViewWillleave');
  }
  ngOnDestroy() {
    clearInterval(this.interWatchDog);
    console.log('ngOnDestroy');
  }
  navigateToPokeInfo(pokemon:string){
   localStorage.setItem("pokemon",pokemon);
   this.nav.navigateForward('/first-page');
  }
}
