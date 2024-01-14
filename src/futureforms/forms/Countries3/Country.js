import React, {Component} from "react";
import { Countries } from "./Countries";
import { FormsModule } from "futureforms";

const FORM = "countries";
const PARENT = "component";

export class Country extends Component
{
	fform = null;
   parameters = new Map();

   constructor(props)
   {
      super(props);
		this.parameters.set(PARENT,this);
      for(var key in props) this.parameters.set(key,props[key]);
   }

   render()
   {
      return(
         <>
            <form name={FORM}></form>
         </>
      );
   }

   loaded = false;
   async componentDidMount()
   {
      if (!this.loaded)
      {
         this.loaded = true;
			let elem = document.querySelector("form[name='"+FORM+"']");
         this.fform = await FormsModule.showform(Countries,this.parameters,elem);
      }
   }
}