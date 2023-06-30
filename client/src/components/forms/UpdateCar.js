import { useMutation, useQuery } from "@apollo/client";
import { Form, Input, Select } from "antd";
import { useEffect, useState } from "react";
import { UPDATE_CAR } from "../../queries/carQueries";
import { GET_PEOPLE } from "../../queries/personQueries";

const { Option } = Select;

const UpdateCar = (props) => {
  const { id, year, make, model, price, personId } = props;
  const [form] = Form.useForm();
  const [, forceUpdate] = useState();

  const [updateCar] = useMutation(UPDATE_CAR);
  const { loading, data } = useQuery(GET_PEOPLE);

  useEffect(() => {
    forceUpdate({});
  }, []);

  const onFinish = (values) => {
    const { year, make, model, price, personId } = values;

    updateCar({
      variables: {
        id,
        year,
        make,
        model,
        price,
        personId,
      },
    });
    props.onButtonClick();
  };

  return (
    <Form
      form={form}
      name="update-car-form"
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
              form.getFieldsError().filter(({ errors }) => errors.length).length
            }
          >
            Update Car
          </button>
        )}
      </Form.Item>
    </Form>
  );
};

export default UpdateCar;
