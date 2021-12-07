import React from "react";
import { MDBCol, MDBIcon } from "mdbreact";
import "../styles/custom.css";
import "../styles/home.css";
const SearchBar = () => {
  return (
    <MDBCol md="8">
      <form className="form-inline mt-4 mb-4">
        <div className="input-search offset-md-5">
          <input
            className="form-control form-control-lg ml-5 w-100"
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
        </div>
      </form>
    </MDBCol>
  );
};

export default SearchBar;
