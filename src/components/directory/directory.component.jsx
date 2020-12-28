import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directory.selector";
import Menuitem from "../menu-item/menu-item.component";
import "./directory.styles.scss";

const directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...othersectionprops }) => (
        <Menuitem key={id} {...othersectionprops} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(directory);
