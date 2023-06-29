import { useQuery } from "@apollo/client";
import { GET_PERSON_WITH_CARS } from "../../queries/carQueries";
import { List } from "antd";
import Car from "../listItems/Car";

const getStyles = () => ({
  list: {
    display: "flex",
    justifyContent: "center",
  },
});

const PersonWithCars = ({ personId }) => {
  const styles = getStyles();
  const { loading, error, data } = useQuery(GET_PERSON_WITH_CARS, {
    variables: { personId: personId },
  });

  console.log("PersonWithCars", data);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <List grid={{ gutter: 20, column: 1 }} style={styles.list}>
      {data.personWithCars.map(({ id, year, make, model, price, personId }) => (
        <List.Item key={id}>
          <Car
            id={id}
            year={year}
            make={make}
            model={model}
            price={price}
            personId={personId}
          />
        </List.Item>
      ))}
    </List>
  );
};

export default PersonWithCars;
