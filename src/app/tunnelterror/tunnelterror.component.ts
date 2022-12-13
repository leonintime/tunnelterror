import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tunnelterror',
  templateUrl: './tunnelterror.component.html',
  styleUrls: ['./tunnelterror.component.scss']
})
export class TunnelterrorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  maxTelephoneUnits : number =  1000;
  maxTunnelSections : number = 500000;

  



}
