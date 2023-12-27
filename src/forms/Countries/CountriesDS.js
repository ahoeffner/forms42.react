import { DatabaseTable } from "futureforms";
import { FormsModule } from "../FormsModule";

export class CountryDS extends DatabaseTable
{
	constructor()
	{
		super(FormsModule.DATABASE,"countries");

		this.sorting = "country_id";
		this.primaryKey = "country_id";
	}
}