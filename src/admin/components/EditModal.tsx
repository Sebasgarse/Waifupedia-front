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
  const editSuccess: boolean = useSelector(
    (state: any) => state.pictures.editSuccess
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
  if (!selected) {
    return null;
  }
  return (
    <div
      className="mdl-base animate__animated animate__fadeIn animate__faster"
      tabIndex={-1}
      role="dialog"
      id="modalSheet"
    >
      <div className="mdl animate__animated animate__fadeInDown animate__faster">
        <div className="row">
          <div className="col-8 mdl-img">
            <img src={state?.url} alt={state?.title} />
          </div>
          <div className="col-4">
            <div className="d-flex justify-content-end">
              <button className="mdl-exit" onClick={handleExit}>
                <i className="fas fa-times"></i>
              </button>
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
              {editSuccess && (
                <p className="text-success text-center">Edited Successfully</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
