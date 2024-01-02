export const page =

<form style={{marginLeft: "20px", marginTop: "20px"}}>
	<table>
		<thead>
			<tr style={{height: "100px"}}>
				<td></td>
				<td colSpan={2}>
					<button type="button" ff-onclick="this.enterQuery()">Enter Query</button>
					<button type="button" ff-onclick="this.executeQuery()">Execute Query</button>
				</td>
			</tr>
			<tr>
				<th></th>
				<th>Code</th>
				<th>Country</th>
			</tr>
		</thead>
		<tbody>
			<tr foreach="row in 1..5">
				<td from="CountryDS" row="$row" type="row-indicator"></td>
				<td><input name="country_id" from="CountryDS" row="$row" size="4" maxLength="3" trim="false" upper="true" required autoComplete="off" lov="countrylist"></input></td>
				<td><input name="country_name" from="CountryDS" row="$row" initcap="true" required advquery="false" autoComplete="off" lov="countrylist"></input></td>
			</tr>
		</tbody>
	</table>
</form>
