import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  data = ""
  names = ""

  constructor() { }

  ngOnInit(): void {
  }

  create(){}

}
