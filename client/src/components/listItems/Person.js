import { Card } from "antd";
import RemovePerson from "../buttons/RemovePerson";

const getStyles = () => ({
  card: {
    width: "500px",
  },
});

const Person = (props) => {
  const { id, firstName, lastName } = props;
  const styles = getStyles();

  return (
    <Card
      style={styles.card}
      actions={[
        <RemovePerson id={id} firstName={firstName} lastName={lastName} />,
      ]}
    >
      {firstName} {lastName}
    </Card>
  );
};

export default Person;
