import { Card } from "antd";
import { useState } from "react";
import UpdateCar from "../forms/UpdateCar";
import { EditOutlined } from "@ant-design/icons";
import RemoveCar from "../buttons/RemoveCar";

const getStyles = () => ({
  card: {
    width: "1000px",
    border: "1px solid lightgray",
  },
});

const Car = (props) => {
  const { id, year, make, model, price, personId } = props;
  const styles = getStyles();
  const [editMode, setEditMode] = useState(false);

  const handleButtonClick = () => {
    setEditMode(!editMode);
  };

  return (
    <div style={styles.card}>
      {editMode ? (
        <UpdateCar
          id={id}
          year={year}
          make={make}
          model={model}
          price={price}
          personId={personId}
          onButtonClick={handleButtonClick}
        />
      ) : (
        <Card
          actions={[
            <EditOutlined key="edit" onClick={handleButtonClick} />,
            <RemoveCar id={id} personId={personId} />,
          ]}
        >
          {year} {make} {model} -&gt; ${price}
        </Card>
      )}
    </div>
  );
};

export default Car;
