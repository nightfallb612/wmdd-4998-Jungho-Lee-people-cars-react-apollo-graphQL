import { Card } from "antd";

const getStyles = () => ({
  card: {
    width: "1100px",
  },
});

const Car = (props) => {
  const { id, year, make, model, price, personId } = props;
  const styles = getStyles();

  return (
    <div style={styles.card}>
      <Card>
        {year} {make} {model} -&gt; ${price}
      </Card>
    </div>
  );
};

export default Car;
