import { useContext, useEffect, useState } from "react";
import Image from "../TypeList/Entertainment Image.png";
import "../TypeList/TypeList.css";

function Typelistcontent({ image, name, getvalueeimagefun, getvaluenamefun }) {
  // passing a value to the parent component
  function getvaluefromlist(image, name) {
    getvalueeimagefun(image);
    getvaluenamefun(name);
  }

  return (
    <>
      <div
        className="whole_type_list"
        onClick={() => getvaluefromlist(image, name)}
      >
        <img src={image} alt="" className="Image_in_typelist" />
        <h2 className="Type_name">{name}</h2>
      </div>
    </>
  );
}
export default Typelistcontent;

import { Datacontext } from "../../../Data/Context";
import { ExpanseImage } from "../../../Data/IncExpdata";
export function Typelist({ getvalueimage, getvaluename }) {
  const dropdown_listandImage = ExpanseImage;

  return (
    <>
      <div className="fullcontent_component_list">
        {dropdown_listandImage.map((item, index) => (
          <div key={index} className="typelistcontent_component">
            <Typelistcontent
              image={item.image}
              name={item.name}
              getvalueeimagefun={getvalueimage}
              getvaluenamefun={getvaluename}
            />
          </div>
        ))}
      </div>
    </>
  );
}
