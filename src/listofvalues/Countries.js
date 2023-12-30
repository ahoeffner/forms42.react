import { Countries as listdata } from "../datasources/Countries";
import { FilterStructure, ILike, ListOfValues } from "futureforms";


export class Countries extends ListOfValues
{
	title = "Countries";

	filterPrefix = "%";
	filterPostfix = "%";
	datasource = new listdata();

	sourcefields = ["country_id","country_name"];
	targetfields = ["country_id","country_name"];
	displayfields = ["country_id","country_name"];

	constructor()
	{
		super();

		this.filter = [];
		this.filter.push(new ILike("country_id"));
		this.filter.push(new ILike("country_name"));

		this.datasource.addFilter
		(
			new FilterStructure()
			.and(this.filter[0])
			.or(this.filter[1])
		);
	}
}