export interface FilterClass {
    countries: Array<any>;
    cities: Array<any>;
}

export class City {
    name = ''
    country = ''
    id = 0

}

export class Country {
    name = ''
    id = 0

}
export class HotelObj {
    country = ''
    city = ''
    imgUrl = ''
    name = ''
  }