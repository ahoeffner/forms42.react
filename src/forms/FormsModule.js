import { Countries } from "./Countries/Countries";
import { Countries as CountryList } from "../listofvalues/Countries";
import { FormsModule as BaseModule, ConnectionScope, DatabaseConnection, FlushStrategy, FormProperties, KeyMap } from "futureforms";


export class FormsModule extends BaseModule
{
   static DATABASE = new DatabaseConnection("http://localhost:9002");

   constructor()
   {
      super();

      // Allow form events to bypass React
      FormProperties.AttributePrefix = "ff-";

      // Typically setup for internet apps
      FormsModule.defaultFlushStrategy = FlushStrategy.Row;
      FormsModule.DATABASE.scope = ConnectionScope.stateless;

      // Connect to database
      FormsModule.DATABASE.connect("hr","hr");

      // Show default key-mapping
      KeyMap.list().forEach((map) => console.log(map[0]+" "+map[1]))

      // Map components
      FormsModule.mapComponent(Countries,"countries");
      FormsModule.mapComponent(CountryList,"countrylist");
   }
}