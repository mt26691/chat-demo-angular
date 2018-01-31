import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { FormBase } from '../../shared/models/form-base';
import { Validators, FormBuilder } from '@angular/forms';
import { HomeModel } from '../../shared/models/home.model';
import { IMyDpOptions } from 'mydatepicker';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  constructor(protected fb: FormBuilder) {
  }

  ngOnInit(): void {
  }



}
