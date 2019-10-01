import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-observation-water',
  templateUrl: './observation-water.component.html',
  styleUrls: ['./observation-water.component.scss']
})
export class ObservationWaterComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  toNextPage() {}
}
