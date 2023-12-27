import { page } from "./CountriesHTML"

import { BaseForm } from "../BaseForm";
import { CountryDS } from "./CountriesDS";
import { Equals, EventType } from "futureforms";


const PARAM = "country";
const COUNTRIES = "CountryDS";
const SHORTNAME = "country_id";

export class Countries extends BaseForm
{
   constructor()
   {
      super(page);
      this.setDataSource(COUNTRIES,new CountryDS());

      //this.addEventListener(this.test);
      //this.addEventListener(this.init,{type: EventType.PostViewInit});
      //this.addEventListener(this.preQuery,{type: EventType.PreQuery});
   }

   async init()
   {
      let country = this.parameters.get(PARAM);
      if (country) setTimeout(() => {this.executeQuery()},100); // Wait until connected
      return(true);
   }

   async preQuery()
   {
      let country = this.parameters.get(PARAM);

      if (country)
      {
         let filter = new Equals(SHORTNAME);
         this.getBlock(COUNTRIES).filter.and(filter.setConstraint(country));
      }

      return(true);
   }

   async test(event)
   {
      console.log(EventType[event.type]);
      return(true);
   }

   async enterQuery()
   {
      super.enterQueryMode(COUNTRIES)
      return(true);
   }

   async executeQuery()
   {
      super.executeQuery(COUNTRIES);
      return(true);
   }
}