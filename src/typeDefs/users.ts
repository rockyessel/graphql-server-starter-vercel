export const Users = `#graphql

type User {
    address:ID!
    blogs:[Blog!]
    articles:[Article!]
}


type Balance {
    raw:String!
    point:String!
}

type Query {
    users:[User!],
    user(address:ID!): User
    balance(address:ID!): Balance
}
`;
