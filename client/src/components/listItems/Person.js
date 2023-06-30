import { Card } from "antd";
import RemovePerson from "../buttons/RemovePerson";
import { EditOutlined } from "@ant-design/icons";
import { useState } from "react";
import UpdatePerson from "../forms/UpdatePerson";
import PersonWithCars from "../lists/PersonWithCars";

const getStyles = () => ({
  card: {
    width: "1200px",
  },
});

const Person = (props) => {
  const { id, firstName, lastName } = props;
  const styles = getStyles();
  const [editMode, setEditMode] = useState(false);

  const handleButtonClick = () => {
    setEditMode(!editMode);
  };

  return (
    <div>
      {editMode ? (
        <UpdatePerson
          id={id}
          firstName={firstName}
          lastName={lastName}
          onButtonClick={handleButtonClick}
        />
      ) : (
        <Card
          style={styles.card}
          actions={[
            <EditOutlined key="edit" onClick={handleButtonClick} />,
            <RemovePerson id={id} />,
          ]}
        >
          <b>
            {firstName} {lastName}
          </b>
          <PersonWithCars personId={id} />
        </Card>
      )}
    </div>
  );
};

export default Person;
