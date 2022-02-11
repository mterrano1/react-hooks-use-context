import React, {useContext} from "react";
import { UserContext } from "../context/user";

function ThemedButton({ ...props }) {
  const { theme } = useContext(UserContext);

  return <button className={theme} />;
}

export default ThemedButton;
