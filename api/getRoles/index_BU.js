module.exports = async function (context, req) {
  const claims = Array.isArray(req.body?.claims) ? req.body.claims : [];
  const appRoleValues = claims
    .filter(c => c.typ === "roles")
    .map(c => c.val); // 例: ["Admin", "User"]

  const roles = [];
  if (appRoleValues.includes("Admin")) roles.push("Admin");
  if (appRoleValues.includes("User"))  roles.push("User");

  context.res = {
    status: 200,
    headers: { "Content-Type": "application/json" },
    body: { roles }
  };
};
