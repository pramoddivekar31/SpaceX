import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LAUNCH_LAND_SUCCESS, LAUNCH_YEARS } from 'src/shared/constants';
import { ISpaceXData, SpacexService } from 'src/shared/spacex.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'SpaceX';
  developer = 'Pramod Divekar'
  launchYears: number[] = LAUNCH_YEARS;
  launchLandSuccess: string[] = LAUNCH_LAND_SUCCESS;
  spaceXData: ISpaceXData[];
  loading: boolean = false
  launchSuccess: string;
  landSuccess: string;

  constructor(public spaceXservice: SpacexService) { }

  ngOnInit() {
    this.getSpaceXData()
  }

  getSpaceXData() {
    this.loading = true

    this.spaceXservice.getSpaceXData().subscribe(
      (data: ISpaceXData[]) => this.spaceXData = data,
      (err: HttpErrorResponse) => console.error('Error in Subscription'),
      () => this.loading = false
    )
  }

  _launchyear(launchYear: number) {
    this.loading = true

    this.spaceXservice.getAllSpaceXData(this.launchSuccess, this.landSuccess, launchYear)
      .subscribe(
        (data: ISpaceXData[]) => this.spaceXData = data,
        (err: HttpErrorResponse) => console.error('Error in Subscription'),
        () => this.loading = false
      )
  }

  _successfulLaunch(launchSuccess: string) {
    this.loading = true
    this.launchSuccess = launchSuccess

    this.spaceXservice.getSpaceXDataWithLaunchFilter(launchSuccess)
      .subscribe(
        (data: ISpaceXData[]) => this.spaceXData = data,
        (err: HttpErrorResponse) => console.error('Error in Subscription'),
        () => this.loading = false
      )
  }

  _successfulLand(landSuccess: string) {
    this.loading = true
    this.landSuccess = landSuccess

    this.spaceXservice.getSpaceXDataWithLaunchAndLandFilter(this.launchSuccess, landSuccess)
      .subscribe(
        (data: ISpaceXData[]) => this.spaceXData = data,
        (err: HttpErrorResponse) => console.error('Error in Subscription'),
        () => this.loading = false
      )
  }

}
