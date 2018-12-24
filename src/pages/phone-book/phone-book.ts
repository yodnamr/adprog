import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-phone-book',
  templateUrl: 'phone-book.html',
})
export class PhoneBookPage {

  contactArray = [{name: 'Nancy', telephone: '0870388294', imageUrl: 'assets/imgs/mypict1.jpg'}
                  ,{name: 'Jenny', telephone: '0870388294', imageUrl: 'assets/imgs/mypict2.jpg'}
                  ,{name: 'John', telephone: '0870388294', imageUrl: 'assets/imgs/mypict3.jpg'}
                  ,{name: 'Nana', telephone: '0870388294', imageUrl: 'assets/imgs/mypict4.jpg'}
                 ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhoneBookPage');
  }

  viewDetail(item){
    this.navCtrl.push("PhoneBookDetailPage", item);
  }

}//end classs
