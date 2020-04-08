import React from 'react'

function FilterListBadges(props) {
    return (
        <div className="form-group">
            <label>Filter Badges</label>
            <input type="text" className="form-control"
                autoFocus
                value={props.filterValue}
                onChange={e => {
                    props.onChange(e.target.value);
                }}
            />
        </div>
    )
}

export default FilterListBadges
