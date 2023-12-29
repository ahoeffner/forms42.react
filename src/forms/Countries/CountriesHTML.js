export const page =

<form style={{marginLeft: "50px", marginTop: "50px"}}>
	<button style={{marginBottom: 20 + "px"}} type="button" ff-onclick="this.enterQuery()">Enter Query</button>
	<button style={{marginBottom: 20 + "px"}} type="button" ff-onclick="this.executeQuery()">Execute Query</button>
	<table>
		<thead>
			<tr>
				<th></th>
				<th>Code</th>
				<th>Country</th>
			</tr>
		</thead>
		<tbody>
			<tr foreach="row in 1..5">
				<td from="CountryDS" row="$row" type="row-indicator" className="indicator"></td>
				<td><input name="country_id" from="CountryDS" row="$row" size="4" maxLength="3" upper="true" required autoComplete="off" lov="countrylist"></input></td>
				<td><input name="country_name" from="CountryDS" row="$row" initcap="true" required advquery="false" autoComplete="off" lov="countrylist"></input></td>
			</tr>
		</tbody>
	</table>
</form>
