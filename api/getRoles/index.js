const rolesFromEntra = req.body.claims
  .filter(c => c.typ === "roles")
  .map(c => c.val);

const roles = [];
if (rolesFromEntra.includes("Admin")) {
  roles.push("Admin");
}
if (rolesFromEntra.includes("User")) {
  roles.push("User");
}

context.res = {
  status: 200,
  body: { roles }
};
``
