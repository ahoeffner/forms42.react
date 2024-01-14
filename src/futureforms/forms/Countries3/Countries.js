import { page } from "./CountriesHTML"

import { BaseForm } from "../BaseForm";
import { CountryDS } from "./CountriesDS";
import { EventType, TableSorter } from "futureforms";

const SOURCE = "countryds";

export class Countries extends BaseForm
{
	sorter;

   constructor()
   {
      super(page);
		this.sorter = new TableSorter(this);
      this.setDataSource(SOURCE,new CountryDS());

		this.addEventListener(this.disAllowInput,{type: EventType.PostRecord});
		this.addEventListener(this.allowInput,{type: EventType.OnCreateRecord});
   }

	allowInput()
	{
		let record = this.getBlock(SOURCE).getRecord();
		record.setTag("country_name","input");
		return(true);
	}

	disAllowInput()
	{
		let record = this.getBlock(SOURCE).getRecord();
		record.clearProperties();
		return(true);
	}

	/** Sorting, referenced by labels in html */
	async sort(block, column)
	{
		return(this.sorter.toggle(block,column).sort(block));
	}
}