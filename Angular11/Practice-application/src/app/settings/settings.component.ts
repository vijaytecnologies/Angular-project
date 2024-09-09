import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, from, interval, of, range } from 'rxjs';
import {map} from 'rxjs/operators';
import { MyFirstServiceService } from '../my-first-service.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private service: MyFirstServiceService) { }
  // @ViewChild('content') content:ElementRef
  content = 'hellooo'

  ngOnInit(): void {
   

  }

}

