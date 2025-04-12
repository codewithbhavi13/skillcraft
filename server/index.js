import jwt from "jsonwebtoken";

let token = jwt.sign({ name: "hello" }, "shhhh");

let original = jwt.verify(token, "shhhh");

console.log("Original: ", original);
