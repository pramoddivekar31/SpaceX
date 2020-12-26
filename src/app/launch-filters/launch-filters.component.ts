import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-launch-filters',
  templateUrl: './launch-filters.component.html',
  styleUrls: ['./launch-filters.component.less']
})
export class LaunchFiltersComponent {
  @Input() launchYears: number[]
  @Input() launchLandSuccess: string[]

  @Output() launchyear = new EventEmitter<number>()
  @Output() successfulLaunch = new EventEmitter<string>()
  @Output() successfulLand = new EventEmitter<string>()

  launchYearClick(year: number) {
    this.launchyear.emit(year)
  }

  successfulLaunchClick(launchSuccess: string) {
    this.successfulLaunch.emit(launchSuccess)
  }

  successfulLandClick(landSuccess: string) {
    this.successfulLand.emit(landSuccess)
  }

}
