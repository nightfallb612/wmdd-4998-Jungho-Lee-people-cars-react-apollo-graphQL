import { useMutation } from "@apollo/client";
import { REMOVE_CAR } from "../../queries/carQueries";
import { DeleteOutlined } from "@ant-design/icons";

const RemoveCar = ({ id }) => {
  const [removeCar] = useMutation(REMOVE_CAR);

  const handleButtonClick = () => {
    let result = window.confirm("Are you sure you want ot delete this car?");
    if (result) {
      removeCar({ variables: { id } });
    }
  };

  return (
    <DeleteOutlined
      key="delete"
      onClick={handleButtonClick}
      style={{ color: "red" }}
    />
  );
};

export default RemoveCar;
