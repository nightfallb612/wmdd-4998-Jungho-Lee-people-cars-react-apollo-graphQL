import { useMutation } from "@apollo/client";
import { GET_PERSON_WITH_CARS, REMOVE_CAR } from "../../queries/carQueries";
import { DeleteOutlined } from "@ant-design/icons";
import filter from "lodash.filter";

const RemoveCar = ({ id, personId }) => {
  const [removeCar] = useMutation(REMOVE_CAR, {
    update(cache, { data: { removeCar } }) {
      const { personWithCars } = cache.readQuery({
        query: GET_PERSON_WITH_CARS,
        variables: { personId: personId },
      });
      cache.writeQuery({
        query: GET_PERSON_WITH_CARS,
        variables: { personId: personId },
        data: {
          personWithCars: filter(personWithCars, (c) => {
            return c.id !== removeCar.id;
          }),
        },
      });
    },
  });

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
