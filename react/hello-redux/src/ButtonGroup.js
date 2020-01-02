import React from "react";
import * as unique_source from './store';
import {setTechnology} from './actions';

const ButtonGroup = ({ technologies }) => (
    <div className="hello-btns">
    {technologies.map((tech, i) => (
      <button
        data-tech={tech}
        key={`btn-${i}`}
        onClick={dispatchBtnAction}
        className="hello-btn">
        {tech}
      </button>
    ))}
    </div>
);

function dispatchBtnAction(e) {
  const tech = e.target.dataset.tech;
  unique_source.store.dispatch(setTechnology(tech));
}

export default ButtonGroup;
