import { gql } from "@apollo/client";

export const GET_CARS = gql`
  {
    cars {
      id
      year
      make
      model
      price
      personId
    }
  }
`;

export const GET_PERSON_WITH_CARS = gql`
  query PersonWithCars($personId: String!) {
    personWithCars(personId: $personId) {
      id
      year
      make
      model
      price
      personId
    }
  }
`;

export const ADD_CAR = gql`
  mutation AddCar(
    $id: String!
    $personId: String!
    $year: String
    $make: String
    $model: String
    $price: String
  ) {
    addCar(
      id: $id
      personId: $personId
      year: $year
      make: $make
      model: $model
      price: $price
    ) {
      id
      year
      make
      model
      price
      personId
    }
  }
`;

export const UPDATE_CAR = gql`
  mutation UpdateCar(
    $id: String!
    $year: String
    $make: String
    $model: String
    $price: String
    $personId: String!
  ) {
    updateCar(
      id: $id
      year: $year
      make: $make
      model: $model
      price: $price
      personId: $personId
    ) {
      id
      year
      make
      model
      price
      personId
    }
  }
`;

export const REMOVE_CAR = gql`
  mutation RemoveCar($id: String!) {
    removeCar(id: $id) {
      id
      year
      make
      model
      price
      personId
    }
  }
`;
