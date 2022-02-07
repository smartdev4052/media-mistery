
const SelectBox = (props) =>    {
    return (

        <div className="details-filter-row ">
            <label htmlFor="size">{props.type}:</label>
            <div className="select-custom">
                <select
                    name="size"
                    className="form-control"
                >
                    <option value="">Select a {props.type}</option>
                    <option vlaue="">Random</option>
                </select>
            </div>
        </div>
    )
}

export default SelectBox;