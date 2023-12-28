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
         <div>
            <div style={{position: "relative"}} form={this.props.form}></div>
            <button style={{marginLeft: "100px", marginTop: "16px"}} onClick={() => this.executeQuery()}>React query</button>
         </div>
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

			this.ffelem.style.width = this.fform.getView().offsetWidth+"px";
			this.ffelem.style.height = this.fform.getView().offsetHeight+"px";
      }
   }

   formelement()
   {
      return(document.querySelector("[form='"+this.props.form+"']"));
   }
}