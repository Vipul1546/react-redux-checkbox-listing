import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { elementChecked } from "../actions";

const CheckedList = () => {
  const myList = useSelector((state) => state.list);
  const dispatch = useDispatch();
  return (
    <div className="col-md-6 checkedList">
      <ul>
        {myList.map((ele) =>
          ele.isSelected ? (
            <li key={ele.id}>
              {ele.name}
              <span
                className="close"
                onClick={() => dispatch(elementChecked(ele.id))}
              >
                x
              </span>
            </li>
          ) : (
            ""
          )
        )}
      </ul>
    </div>
  );
};

export default CheckedList;
