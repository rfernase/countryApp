import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../sevices/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: [

  ]
})
export class CountryPageComponent implements OnInit{

public country?: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private countriesService: CountriesService,
  private router:Router,
) {}

  ngOnInit(): void {
   this.activatedRoute.params
   .subscribe(({id}) =>{
    this.countriesService.searchCountryByAlphaCode(id)
    .subscribe(country => {
      if(!country){
        return this.router.navigateByUrl('');
      }
      // console.log('TENEMOS PAIS');
       return this.country = country;


    });


  });
}


}