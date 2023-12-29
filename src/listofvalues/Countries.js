//import  { ListOfValues } from "futureforms";
import {Countries as listdata} from "../datasources/Countries";


export class Countries //extends ListOfValues
{
	title = "Countries";
	datasource = new listdata();
	sourcefields = ["country_id","country_name"];
	targetfields = ["country_id","country_name"];
	displayfields = ["country_id","country_name"];
}