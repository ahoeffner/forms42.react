export const page =
<fieldset className="container">
<fieldset className="section left">
  <legend>multirow</legend>
  <table>
	 <thead>
		<tr>
		  <th />
		  <th>
			 <label className="above" htmlFor="cc-cid-0-0" tabIndex={0} ff-onclick="this.sort(CountryDS,country_id)" draggable="true" ff-ondragstart="this.startFieldDragging()">Id</label>
		  </th>
		  <th>
			 <label className="above" htmlFor="cc-cn-0-0" tabIndex={0} ff-onclick="this.sort(CountryDS,country_name)" draggable="true" ff-ondragstart="this.startFieldDragging()">Country Name</label>
		  </th>
		</tr>
	 </thead>
	 <tbody>
		<tr foreach="row in 0..5" type="row-indicator" from="CountryDS" row="$row" className="row">
		  <td type="row-indicator" from="CountryDS" row="$row" className="pointer" />
		  <td>
			 <input type="text" name="country_id" from="CountryDS" size={2} upper="true" id="cc-cid-0-$row" row="$row" lov="countrylist"/>
		  </td>
		  <td>
			 <input type="text" name="country_name" from="CountryDS" size={40} initcap="true" id="cc-cn-0-$row" row="$row" />
		  </td>
		</tr>
	 </tbody>
  </table>
</fieldset>
<fieldset className="section below left">
  <legend>details</legend>
  <table>
	 <tbody>
		<tr>
		  <td>
			 <label className="left" htmlFor="cc-cid-1-0">Id</label>
		  </td>
		  <td>:</td>
		  <td>
			 <input type="text" name="country_id" from="CountryDS" size={2} upper="true" id="cc-cid-1-0" />
		  </td>
		</tr>
		<tr>
		  <td>
			 <label className="left" htmlFor="cc-cn-1-0">Country Name</label>
		  </td>
		  <td>:</td>
		  <td>
			 <input type="text" name="country_name" from="CountryDS" size={40} initcap="true" id="cc-cn-1-0" />
		  </td>
		</tr>
	 </tbody>
  </table>
</fieldset>
<div className="container flex">
  <fieldset className="group0 section">
	 <legend>group 0</legend>
	 <table className="table">
		<tbody>
		  <tr>
			 <td>
				<label className="left group0" htmlFor="cc-cid-2-0">Id</label>
			 </td>
			 <td>:</td>
			 <td>
				<input type="text" name="country_id" from="CountryDS" size={2} upper="true" id="cc-cid-2-0" className="group0" />
			 </td>
		  </tr>
		  <tr>
			 <td>
				<label className="left group0" htmlFor="cc-cn-2-0">Country Name</label>
			 </td>
			 <td>:</td>
			 <td>
				<input type="text" name="country_name" from="CountryDS" size={40} initcap="true" id="cc-cn-2-0" className="group0" />
			 </td>
		  </tr>
		</tbody>
	 </table>
  </fieldset>
</div>
</fieldset>
;