import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public dataAtual;

  constructor() { }

  ngOnInit(): void {
    this.dataAtual = getCurrentDate();
  }

}
  const getCurrentDate = () => {
    return new Date().getFullYear();
  }

