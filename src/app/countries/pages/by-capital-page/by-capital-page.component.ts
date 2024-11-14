import { Component } from '@angular/core';
import { CountriesService } from '../../sevices/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html'
})
export class ByCapitalPageComponent {

    public countries: Country[] = [];

  constructor( private countriesService: CountriesService ) {}

  searchByCapital(term: string): void{
    this.countriesService.searchCapital(term).subscribe(countries =>{
      this.countries = countries;
    });
    console.log('Desde ByCapitalPage');
    console.log({term});
  }
}
