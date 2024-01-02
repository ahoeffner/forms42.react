import { MemoryTable } from "futureforms";

export class Countries extends MemoryTable
{
	constructor()
	{
		super(["country_id","country_name"]);

		this.setData
		(
			[
				["US","United States"],
				["UK","United Kingdom"],
			]
		);
	}
}