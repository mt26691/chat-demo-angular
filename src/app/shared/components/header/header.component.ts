import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../shared/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  displayName = '';
  constructor() {
  }

  ngOnInit() {
  }


}
