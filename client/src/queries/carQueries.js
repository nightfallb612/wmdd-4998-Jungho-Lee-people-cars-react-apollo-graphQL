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
