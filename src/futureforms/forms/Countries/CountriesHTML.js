export const page =

<form style={{marginLeft: "20px", marginTop: "20px"}}>
	<table>
		<thead>
			<tr style={{height: "100px"}}>
				<td colSpan={3}>
					<button type="button" ff-onclick="this.enterQuery()">QBE</button>
					<button type="button" ff-onclick="this.executeQuery()">Query</button>
					<button type="button" ff-onclick="this.callReact()">React</button>
				</td>
			</tr>
			<tr>
				<th></th>
				<th>Code</th>
				<th>Country</th>
				<th hidden>Created</th>
			</tr>
		</thead>
		<tbody>
			<tr foreach="row in 1..5">
				<td from="CountryDS" row="$row" type="row-indicator"></td>
				<td><input name="country_id" from="CountryDS" row="$row" size="4" maxLength="3" trim="false" upper="true" required autoComplete="off" lov="countrylist"></input></td>
				<td><input name="country_name" from="CountryDS" row="$row" initcap="true" required advquery="false" autoComplete="off" lov="countrylist"></input></td>
				<td hidden><input name="created" from="CountryDS" row="$row" date="true" query="false" autoComplete="off" derived="true"></input></td>
			</tr>
		</tbody>
	</table>
</form>
