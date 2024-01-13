import { AppMessages } from "./AppMessages";
import { Countries } from "./forms/Countries/Countries";
import { Countries as CountryList } from "./listofvalues/Countries";
import { FormsModule as BaseModule, InternalFormsConfig, ConnectionScope, DatabaseConnection, FlushStrategy, FormProperties, KeyMap, Messages } from "futureforms";


export class FormsModule extends BaseModule
{
	static whenloggedon = new Set();
   static DATABASE = new DatabaseConnection("http://localhost:9002");

   constructor()
   {
      super();

		Messages.language = "SE";
		Messages.addBundle(AppMessages);
		Messages.MessageHandler = this;

		// Close button for internal forms
		InternalFormsConfig.OKButtonText = "Ok";
		InternalFormsConfig.CloseButtonText = "&#215;";
		InternalFormsConfig.CancelButtonText = "Cancel";

      // Allow form events to bypass React
      FormProperties.AttributePrefix = "ff-";

      // Typically setup for internet apps
      FormsModule.defaultFlushStrategy = FlushStrategy.Row;
      FormsModule.DATABASE.scope = ConnectionScope.stateless;

      // Show default key-mapping
      KeyMap.list().forEach((map) => console.log(map[0]+" "+map[1]))

      // Map components
      FormsModule.mapComponent(Countries,"countries");
      FormsModule.mapComponent(CountryList,"countrylist");
   }


	async connect()
	{
		await FormsModule.DATABASE.connect("hr","hr");

		if (FormsModule.onlogon)
		{
			FormsModule.onlogon.forEach((action) => action());
			FormsModule.onlogon = null;
		}
	}


	runWhenLoggedOn(object,func)
	{
		if (!FormsModule.onlogon) object[func]();
		else FormsModule.onlogon.add(object[func]);
	}


	handle(msg, _level)
	{
		//alert(msg.message);
		console.log(msg.message)
		return(true);
	}
}