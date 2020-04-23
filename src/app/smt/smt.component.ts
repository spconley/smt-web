import { Component, OnInit } from '@angular/core';
import {SMTService} from '../smt.service';

@Component({
  selector: 'app-smt',
  templateUrl: './smt.component.html',
  styleUrls: ['./smt.component.css']
})
export class SMTComponent implements OnInit {

  constructor(private smtService: SMTService) { }

  ngOnInit(): void {
  }
}
