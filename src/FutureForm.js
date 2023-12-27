import React, {Component} from "react";
import { FormsModule } from "futureforms";

export class FutureForm extends Component
{
   fform = null;
   ffpars = new Map();

   constructor(props)
   {
      super(props);

      for(var key in props)
      {
         if (key !== "form")
            this.ffpars.set(key,props[key]);
      }
   }

   executeQuery()
   {
      this.fform.executeQuery();
   }

   render()
   {
      return(
         <div>
            <button onClick={() => this.executeQuery()}>React query</button>
            <div form={this.props.form}></div>
         </div>
      );
   }

   loaded = false;
   async componentDidMount()
   {
      if (!this.loaded)
      {
         this.loaded = true;
         this.fform = await FormsModule.showform(this.props.form,this.ffpars,this.findroot());
      }
   }

   findroot()
   {
      return(document.querySelector("[form='"+this.props.form+"']"));
   }
}