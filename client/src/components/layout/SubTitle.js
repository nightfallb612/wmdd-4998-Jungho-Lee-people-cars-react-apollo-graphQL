const getStyles = () => ({
  title: {
    fontSize: 35,
    padding: "15px",
    marginBottom: "20px",
    textAlign: "center",
  },
});

const SubTitle = (props) => {
  const { title } = props;
  const styles = getStyles();

  return <h1 style={styles.title}>{title}</h1>;
};

export default SubTitle;
