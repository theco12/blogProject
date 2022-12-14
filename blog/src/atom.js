import { atom } from "react";

const textState = atom({
  key: "textState", // unique ID (with respect to other atoms/selectors)
  default: "mike", // default value (aka initial value)
});

export default textState;
