import { page } from "./CountriesHTML"

import { BaseForm } from "../BaseForm";
import { CountryDS } from "./CountriesDS";
import { TableSorter } from "futureforms";

const SOURCE = "countryds";
const PARENT = "component";

export class Countries extends BaseForm
{
	sorter;

   constructor()
   {
      super(page);
      this.addEventListener(this.events);
		this.sorter = new TableSorter(this);
      this.setDataSource(SOURCE,new CountryDS());
   }

   async events(event)
   {
		this.parameters.get(PARENT).formevents(event);
      return(true);
   }

	/** Sorting, referenced by labels in html */
	async sort(block, column)
	{
		return(this.sorter.toggle(block,column).sort(block));
	}
}