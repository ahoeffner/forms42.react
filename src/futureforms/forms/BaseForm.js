import { Form } from "futureforms";
import ReactDOMServer from 'react-dom/server';

export class BaseForm extends Form
{
   constructor(element)
   {
      super(ReactDOMServer.renderToStaticMarkup(element));
   }
}