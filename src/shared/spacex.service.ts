import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { catchError, map, tap } from 'rxjs/operators';
import { throwError } from 'rxjs/internal/observable/throwError';
import { Observable } from 'rxjs';
import { APIURLS } from './constants';

@Injectable({
  providedIn: 'root'
})
export class SpacexService {

  constructor(public http: HttpClient) { }

  getSpaceXData(): Observable<ISpaceXData[]> {
    const url = APIURLS.getSpaceXData

    return this.http.get(url).pipe(
      map((spaceXdata: any) => this.transformData(spaceXdata)),
      catchError((err: HttpErrorResponse) => throwError([]))
    )
  }

  getSpaceXDataWithLaunchFilter(launchSuccess: string) {
    const url = APIURLS.spaceXdataLaunchFilter.replace('[LAUNCH_SUCCESS]', launchSuccess)

    return this.http.get(url).pipe(
      map((spaceXdata: any) => this.transformData(spaceXdata)),
      catchError((err: HttpErrorResponse) => throwError([]))
    )
  }

  getSpaceXDataWithLaunchAndLandFilter(launchSuccess: string, landSuccess: string) {
    const url = APIURLS.spaceXdataLaunchAndLandFilter.replace('[LAUNCH_SUCCESS]', launchSuccess).replace('[LAND_SUCCESS]', landSuccess)

    return this.http.get(url).pipe(
      map((spaceXdata: any) => this.transformData(spaceXdata)),
      catchError((err: HttpErrorResponse) => throwError([]))
    )
  }

  getAllSpaceXData(launchSuccess: string, landSuccess: string, launchYear: number) {
    const url = APIURLS.spaceXAllData.replace('[LAUNCH_SUCCESS]', launchSuccess).replace('[LAND_SUCCESS]', landSuccess).replace('[LAUNCH_YEAR]', launchYear.toString())

    return this.http.get(url).pipe(
      map((spaceXdata: any) => this.transformData(spaceXdata)),
      catchError((err: HttpErrorResponse) => throwError([]))
    )
  }

  transformData(spaceXdata: any): ISpaceXData[] {
    return spaceXdata && spaceXdata.map((data: any) => {
      return {
        missionName: data.mission_name,
        flightNumber: data.flight_number,
        missionIds: data.mission_id,
        launchYear: data.launch_year,
        launchSuccess: data.launch_success,
        landSuccess: true,
        imgPath: data.links && data.links.mission_patch
      }
    }) as ISpaceXData[]
  }

}


export interface ISpaceXData {
  missionName: string,
  flightNumber: number,
  missionIds: string[],
  launchYear: string,
  launchSuccess: string,
  landSuccess: string,
  imgPath: string
}

export interface IParamsConfig {
  limit: number,
  land_success: string | null,
  launch_success: string | null,
  launch_year: number | null
}
