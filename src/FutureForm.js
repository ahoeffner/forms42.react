import React, {Component} from "react";
import { FormsModule } from "futureforms";

export class FutureForm extends Component
{
   loaded = false;
   pars = new Map();

   constructor(props)
   {
      super(props);

      for(var key in props)
      {
         if (key !== "form")
            this.pars.set(key,props[key]);
      }
   }

   render()
   {
      return(<div form={this.props.form}></div>);
   }

   async componentDidMount()
   {
      if (!this.loaded)
      {
         this.loaded = true;
         await FormsModule.showform(this.props.form,this.pars,this.findroot());
      }
   }

   findroot()
   {
      return(document.querySelector("[form='"+this.name+"']"));
   }
}