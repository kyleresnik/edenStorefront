import { Component, OnInit } from '@angular/core';
import {DataService } from '../data.service';
import { Admin } from '../models/admin.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  loginForm: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
