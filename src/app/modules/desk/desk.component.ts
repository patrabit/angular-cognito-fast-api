import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-desk',
  templateUrl: './desk.component.html',
  styleUrls: ['./desk.component.scss']
})

export class DeskComponent implements OnInit {
  showSidebar = true;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
}