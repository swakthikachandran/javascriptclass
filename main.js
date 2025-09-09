
import User from "./user.js";


try {
  const user1 = new User("Alice", "alice@example.com");

  console.log("Name:", user1.name);
  console.log("Email:", user1.email);

  
  user1.email = "newalice@example.com";
  console.log("Updated Email:", user1.email);

  user1.logActivity("Logged in");
  user1.logActivity("Uploaded a file");

  
  console.log("Is 'test@test.com' valid?", User.validateEmail("test@test.com"));
  console.log("Is 'wrongEmail' valid?", User.validateEmail("wrongEmail"));

} catch (err) {
  console.error("Error:", err.message);
}
