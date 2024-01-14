import { page } from "./CountriesHTML"

import { BaseForm } from "../BaseForm";
import { CountryDS } from "./CountriesDS";
import { FormsModule } from "../../FormsModule";
import { Equals, EventType, ListOfValues, Messages, TableSorter } from "futureforms";

const QPARAM = "country";
const SOURCE = "CountryDS";
const SHORTNAME = "country_id";

export class Countries extends BaseForm
{
	sorter;

   constructor()
   {
      super(page);
		this.sorter = new TableSorter(this);
      this.setDataSource(SOURCE,new CountryDS());

		this.setListOfValues(ListOfValues,SOURCE,SHORTNAME);

      this.addEventListener(this.init,{type: EventType.PostViewInit});
      this.addEventListener(this.preQuery,{type: EventType.PreQuery});

		this.addEventListener(this.validateCountryID,{type: EventType.WhenValidateField, field: SHORTNAME});
   }

	init()
	{
      let country = this.parameters.get(QPARAM);
		if (country) FormsModule.runWhenLoggedOn(this,"display");
		return(true);
	}

	display()
	{
		this.executeQuery(SOURCE);
	}

   async preQuery()
   {
      let country = this.parameters.get(QPARAM);

      if (country)
      {
			this.parameters.delete(QPARAM);
         let filter = new Equals(SHORTNAME);
         this.getBlock(SOURCE).filter.and(filter.setConstraint(country));
      }

      return(true);
   }

	validateCountryID()
	{
		let id = this.getValue(SOURCE,SHORTNAME);

		if (id === "XX")
		{
			Messages.warn(20000,0,id);
			return(false);
		}

		return(true);
	}

	/** Sorting, referenced by labels in html */
	async sort(block, column)
	{
		return(this.sorter.toggle(block,column).sort(block));
	}
}