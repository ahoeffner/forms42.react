export const page =
	<fieldset className="container">
      <fieldset className="section left">
        <legend>multirow</legend>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>
                <label className="above" htmlFor="cou-cid-0-0" tabIndex="0" ff-onclick="this.sort(countries,country_id)" draggable="true" ff-ondragstart="this.startFieldDragging()">Country Id</label>
              </th>
              <th>
                <label className="above" htmlFor="cou-cn-0-0" tabIndex="0" ff-onclick="this.sort(countries,country_name)" draggable="true" ff-ondragstart="this.startFieldDragging()">Country Name</label>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr foreach="row in 0..3" type="row-indicator" from="CountryDS" row="$row" className="row">
              <td type="row-indicator" from="CountryDS" row="$row" className="pointer"></td>
              <td>
                <input type="text" name="country_id" from="CountryDS" size="2" id="cou-cid-0-$row" row="$row"></input>
              </td>
              <td>
                <input type="text" name="country_name" from="CountryDS" size="40" id="cou-cn-0-$row" row="$row"></input>
              </td>
            </tr>
          </tbody>
        </table>
		</fieldset>
	</fieldset>
;