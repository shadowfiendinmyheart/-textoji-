// Skip Husky install in production
if (process.env.NODE_ENV === "production") {
  process.exit(0);
}
const husky = (await import("husky")).default;
console.log(husky());
