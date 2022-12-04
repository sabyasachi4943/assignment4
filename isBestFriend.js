function isBestFriend(friend1, friend2) {
  if ("object" == typeof friend1 && "object" == typeof friend2) {
    if (friend1.name === friend2.friend && friend2.name === friend1.friend) {
      return true;
    } else {
      return false;
    }
  } else {
    return `please provide objects`;
  }
} 

console.log(
  isBestFriend(
    { name: "abul", friend: "babul" },
    { name: "babul", friend: "abul" }
  )
);
console.log(
  isBestFriend(
    { name: "abul", friend: "kabul" },
    { name: "kabul", friend: "sabul" }
  )
);
console.log(
  isBestFriend(
    { name: "doe", friend: "alex" },
    { name: "john", friend: "doe" }
  )
);
console.log(
  isBestFriend({ name: "doe", friend: "alex" }, 54)
);
