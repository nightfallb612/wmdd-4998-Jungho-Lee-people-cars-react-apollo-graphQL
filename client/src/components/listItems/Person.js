import { Card } from "antd";

const getStyles = () => ({
  card: {
    width: "500px",
  },
});

const Person = (props) => {
  const { id, firstName, lastName } = props;
  const styles = getStyles();

  return (
    <Card style={styles.card}>
      {firstName} {lastName}
    </Card>
  );
};

export default Person;
