import React, {Component} from "react";
import { FormsModule } from "futureforms";

export class FutureForm extends Component
{
   fform = null;
	ffelem = null;
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
         <>
            <div form={this.props.form}></div>
            <button style={{marginLeft: "100px", marginTop: "16px"}} onClick={() => this.executeQuery()}>React query</button>
         </>
      );
   }

   loaded = false;
   async componentDidMount()
   {
      if (!this.loaded)
      {
         this.loaded = true;
			this.ffelem = this.formelement();
         this.fform = await FormsModule.showform(this.props.form,this.ffpars,this.ffelem);
      }
   }

   formelement()
   {
      return(document.querySelector("[form='"+this.props.form+"']"));
   }
}