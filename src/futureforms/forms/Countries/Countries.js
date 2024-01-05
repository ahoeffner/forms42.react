import { page } from "./CountriesHTML"

import { BaseForm } from "../BaseForm";
import { CountryDS } from "./CountriesDS";
import { Equals, EventType, Messages } from "futureforms";

const PARAM = "country";
const COUNTRIES = "CountryDS";
const SHORTNAME = "country_id";

export class Countries extends BaseForm
{
   constructor()
   {
      super(page);
      this.setDataSource(COUNTRIES,new CountryDS());

      //this.addEventListener(this.events);
      this.addEventListener(this.preQuery,{type: EventType.PreQuery});
      //this.addEventListener(this.setCreated,{type: EventType.OnFetch});
		//this.addEventListener(this.allowInput,{type: EventType.OnNewRecord});
		//this.addEventListener(this.disAllowInput,{type: EventType.PostRecord});
      //this.addEventListener(this.validateCountryID,{type: EventType.WhenValidateField, block: COUNTRIES, field: SHORTNAME});
   }

	callReact()
	{
		this.parameters.get("react").someMethod("Hello");
	}

   async showCurrentCountry()
   {
		let country = this.parameters.get(PARAM);
		if (country) await this.executeQuery();
      return(true);
   }

   async preQuery()
   {
      let country = this.parameters.get(PARAM);

      if (country)
      {
			this.parameters.delete(PARAM);
         let filter = new Equals(SHORTNAME);
         this.getBlock(COUNTRIES).filter.and(filter.setConstraint(country));
      }

      return(true);
   }

	allowInput()
	{
		let record = this.getBlock("CountryDS").getRecord();
		record.setTag("country_name","input");
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

	setCreated()
	{
		this.setValue(COUNTRIES,"created",new Date());
		return(true);
	}

	validateCountryID()
	{
		let id = this.getValue(COUNTRIES,SHORTNAME);

		if (id === "XX")
		{
			Messages.warn(20000,0,id);
			return(false);
		}

		return(true);
	}
}