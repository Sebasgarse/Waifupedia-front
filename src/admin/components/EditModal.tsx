import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startEditingImage } from "../../store/thunks/PictureThunks";
import { selectPicture } from "../../store/slices/PictureSlice";
import { createEmptyPicture, Picture } from "../../interfaces/Pictures";

import "./modal.css";

export const EditModal = () => {
  const dispatch = useDispatch();
  const selected: Picture | null = useSelector(
    (state: any) => state.pictures.selected
  );
  const [state, setState] = React.useState(selected || createEmptyPicture());
  React.useEffect(() => {
    setState(selected || createEmptyPicture());
  }, [selected]);

  const handleExit = () => {
    dispatch(selectPicture(null));
  };

  const handleOnChange = (event) => {
    const value: string = event.target.value;
    setState((state) => ({
      ...state,
      [event.target.name]: value,
    }));
    return;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(startEditingImage(state));
  };
  return (
    <div
      className="mdl-base"
      tabIndex={-1}
      role="dialog"
      id="modalSheet"
      style={{
        display: selected ? "block" : "none",
      }}
    >
      <div className="mdl">
        <div className="row">
          <div className="col-8 mdl-img">
            <img src={state?.url} alt={state?.title} />
          </div>
          <div className="col-4">
            <div className="d-flex justify-content-end">
              <button onClick={handleExit}>X</button>
            </div>
            <form className="mdl-form" onSubmit={handleSubmit}>
              <label>
                Title
                <input
                  type="text"
                  value={state?.title}
                  name="title"
                  onChange={handleOnChange}
                />
              </label>
              <label>
                Url
                <input
                  type="text"
                  value={state?.url}
                  name="url"
                  onChange={handleOnChange}
                />
              </label>
              <label>
                Tags
                <input
                  type="text"
                  value={state?.tags || ""}
                  name="tags"
                  onChange={handleOnChange}
                />
              </label>
              <input type="submit" value="Submit Changes" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
