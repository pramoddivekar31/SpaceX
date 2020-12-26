export const LAUNCH_YEARS = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];

export const LAUNCH_LAND_SUCCESS = ['true', 'false']

export const PARAMS_CONFIG = {
  limit: 100,
  launch_success: null,
  land_success: null,
  launch_year: null
}

export const APIURLS = {
  getSpaceXData: 'https://api.spaceXdata.com/v3/launches?limit=100',
  spaceXdataLaunchFilter: 'https://api.spaceXdata.com/v3/launches?limit=100&launch_success=[LAUNCH_SUCCESS]',
  spaceXdataLaunchAndLandFilter: 'https://api.spaceXdata.com/v3/launches?limit=100&launch_success=[LAUNCH_SUCCESS]&land_success=[LAND_SUCCESS]',
  spaceXAllData: 'https://api.spaceXdata.com/v3/launches?limit=100&launch_success=[LAUNCH_SUCCESS]&land_success=[LAND_SUCCESS]&launch_year=[LAUNCH_YEAR]'
}
