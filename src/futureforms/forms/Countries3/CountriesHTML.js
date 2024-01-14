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
				<label className="above" htmlFor="cc-cn-0-0" tabIndex={0} ff-onclick="this.sort(CountryDS,country_name)" draggable="true" ff-ondragstart="this.startFieldDragging()">Country</label>
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
				<span type="text" name="country_name" from="CountryDS" size={40} initcap="true" id="cc-cn-0-$row" row="$row" />
			</td>
			</tr>
		</tbody>
	</table>
	</fieldset>
</fieldset>
;