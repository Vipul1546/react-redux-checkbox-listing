import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { elementChecked } from "../actions";

const CheckList = () => {
  const myList = useSelector((state) => state.list);
  const dispatch = useDispatch();

  return (
    <div className="col-md-6 checkList">
      <ul className="list-group list-group-flush">
        {myList.map((ele) => {
          let htmlfor = `check${ele.id}`;
          return (
            <li key={ele.id} className="list-group-item">
              <div className="custom-control custom-checkbox">
                <input
                  data-id={ele.id}
                  type="checkbox"
                  className="custom-control-input"
                  id={htmlfor}
                  onChange={() => dispatch(elementChecked(ele.id))}
                  checked={ele.isSelected}
                />
                <label className="custom-control-label" htmlFor={htmlfor}>
                  {ele.name}
                </label>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CheckList;
