import React, {Component} from "react";
import { FormsModule } from "futureforms";

export class FutureForm extends Component
{
   name = null;
   loaded = false;
   pars = new Map();

   constructor(props)
   {
      super(props);
      this.name = props.form;
      for(var key in props)
      {
         if (key != "form")
            this.pars.set(key,props[key]);
      }
   }

   render()
   {
      return(<div form={this.name}></div>);
   }

   async componentDidMount()
   {
      if (!this.loaded)
      {
         this.loaded = true;
         await FormsModule.showform(this.name,this.pars,this.findroot());
      }
   }

   findroot()
   {
      return(document.querySelector("[form='"+this.name+"']"));
   }
}