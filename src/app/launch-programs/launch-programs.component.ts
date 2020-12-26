import { Component, OnInit, Input } from '@angular/core';
import { ISpaceXData } from 'src/shared/spacex.service';

@Component({
  selector: 'app-launch-programs',
  templateUrl: './launch-programs.component.html',
  styleUrls: ['./launch-programs.component.less']
})
export class LaunchProgramsComponent implements OnInit {
  @Input() spaceXData: ISpaceXData[]

  constructor() { }

  ngOnInit(): void { }

}
