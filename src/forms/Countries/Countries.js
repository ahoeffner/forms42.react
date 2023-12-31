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

      this.addEventListener(this.events);
      //this.addEventListener(this.init,{type: EventType.PostViewInit});
      //this.addEventListener(this.preQuery,{type: EventType.PreQuery});
		//this.addEventListener(this.allowInput,{type: EventType.OnRecord});
		//this.addEventListener(this.disAllowInput,{type: EventType.PostRecord});
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

	allowInput()
	{
		let record = this.getBlock("CountryDS").getRecord();
		if (record.inserted) record.setTag("country_name","input");
		return(true);
	}

	disAllowInput()
	{
		let record = this.getBlock("CountryDS").getRecord();
		record.clearProperties();
		return(true);
	}

   async events(event)
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