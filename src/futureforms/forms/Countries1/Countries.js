import { page } from "./CountriesHTML"

import { BaseForm } from "../BaseForm";
import { CountryDS } from "./CountriesDS";
import { TableSorter } from "futureforms";

const SOURCE = "CountryDS";

export class Countries extends BaseForm
{
	sorter;

   constructor()
   {
      super(page);
		this.sorter = new TableSorter(this);
      this.setDataSource(SOURCE,new CountryDS());
   }

	/** Sorting, referenced by labels in html */
	async sort(block, column)
	{
		return(this.sorter.toggle(block,column).sort(block));
	}
}