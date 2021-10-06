import "./index.css";
import { useHistory } from "react-router-dom";

const AddButton = ({ userLogged }) => {
  const history = useHistory();
  return (
    <>
      {!userLogged ? (
        <div>
          <i className="fas fa-plus"></i> SELL
        </div>
      ) : (
        <div id="sellBtn" onClick={() => history.push("/addpost")}>
          <i className="fas fa-plus"></i> SELL
        </div>
      )}
    </>
  );
};

export default AddButton;
