import { useMutation, useQuery } from "@apollo/client";
import { ADD_CAR, GET_CARS } from "../../queries/carQueries";
import { Form, Input, Select } from "antd";
import { useEffect, useState } from "react";
import SubTitle from "../layout/SubTitle";
import { GET_PEOPLE } from "../../queries/personQueries";
import { v4 as uuidv4 } from "uuid";

const { Option } = Select;

const AddCar = () => {
  const [addCar] = useMutation(ADD_CAR);
  const { loading, data } = useQuery(GET_PEOPLE);

  const [form] = Form.useForm();
  const [, forceUpdate] = useState();

  // to disable the submit button at the beginning
  useEffect(() => {
    forceUpdate({});
  }, []);

  const onFinish = (value) => {
    const { year, make, model, price, personId } = value;
    const id = uuidv4();
    addCar({
      variables: {
        id,
        year,
        make,
        model,
        price,
        personId,
      },
      update: (cache, { data: { addCar } }) => {
        const data = cache.readQuery({ query: GET_CARS });
        if (data && data.cars) {
          cache.writeQuery({
            query: GET_CARS,
            data: {
              ...data,
              cars: [...data.cars, addCar],
            },
          });
        }
      },
    });
  };

  return (
    <div>
      <SubTitle title={"Add Car"} />
      <Form
        form={form}
        name="add-car-form"
        layout="inline"
        onFinish={onFinish}
        size="large"
        style={{ marginBottom: "40px" }}
      >
        <Form.Item
          label="Year"
          name="year"
          rules={[{ required: true, message: "Please input year!" }]}
        >
          <Input placeholder="Year" />
        </Form.Item>
        <Form.Item
          label="Make"
          name="make"
          rules={[{ required: true, message: "Please input make!" }]}
        >
          <Input placeholder="Make" />
        </Form.Item>
        <Form.Item
          label="Model"
          name="model"
          rules={[{ required: true, message: "Please input model!" }]}
        >
          <Input placeholder="Model" />
        </Form.Item>
        <Form.Item
          label="Price"
          name="price"
          rules={[{ required: true, message: "Please input price!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Person"
          name="personId"
          rules={[{ required: true, message: "Please select a person!" }]}
        >
          <Select placeholder="Select a person" loading={loading}>
            {data &&
              data.people.map((person) => (
                <Option key={person.id} value={person.id}>
                  {person.name}
                </Option>
              ))}
          </Select>
        </Form.Item>
        <Form.Item shouldUpdate={true}>
          {() => (
            <button
              type="submit"
              disabled={
                !form.isFieldsTouched(true) ||
                form.getFieldsError().filter(({ errors }) => errors.length)
                  .length
              }
            >
              Add Car
            </button>
          )}
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddCar;
