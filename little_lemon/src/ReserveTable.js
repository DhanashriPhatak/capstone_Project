import './ReserveTable.css';

function ReserveTable(){
    return(
        <>
            <div id="reserveTableDiv">
                <h3>Reserve a Table</h3>
                <form>
                    <table>
                        <tr>
                            <td><label for="txtName">Name</label></td>
                            <td><input type="text" id="txtName" name="txtName" required></input></td>
                        </tr>
                        <tr>
                            <td><label for="txtMobile">Mobile Number</label></td>
                            <td><input type="text" id="txtMobile" name="txtMobile" required></input></td>
                        </tr>
                        <tr>
                            <td><label for="txtDate">Date</label></td>
                            <td><input type="date" id="txtDate" name="txtMtxtDateobile" required></input></td>
                        </tr>
                        <tr>
                            <td><label for="txtTime">Time</label></td>
                            <td><input type="text" id="txtTime" name="txtTime" required></input></td>
                        </tr>
                        <tr>
                            <td><label for="txtPeople">Number of People</label></td>
                            <td>
                                <select>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td><button type='submit'>Submit</button></td>
                        </tr>
                    </table>

                </form>
            </div>
        </>
    )
}

export default ReserveTable;