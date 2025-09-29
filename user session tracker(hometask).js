
const activeUserIDs = new Set();

const userMetadata = new WeakMap();

function addUser(user, userId) {
  activeUserIDs.add(userId);
  userMetadata.set(user, {
    lastActivity: new Date(),
  });
  console.log(`User ${userId} added.`);
}

function removeUser(user, userId) {
  activeUserIDs.delete(userId);
  userMetadata.delete(user);
  console.log(`User ${userId} removed.`);
}


function updateUserActivity(user, userId) {
  if (activeUserIDs.has(userId)) {
    userMetadata.set(user, { lastActivity: new Date() });
    console.log(`User ${userId} activity updated.`);
  } else {
    console.log(`User ${userId} not found.`);
  }
}


function cleanUpInactiveUsers(timeoutMs) {
  const now = new Date();
  for (let [user, metadata] of userMetadata.entries()) {
    if (now - metadata.lastActivity > timeoutMs) {
      
      activeUserIDs.delete(user.id);
      userMetadata.delete(user);
      console.log(`User ${user.id} cleaned up due to inactivity.`);
    }
  }
}


(function demo() {
  let user1 = { id: 1, name: "Alice" };
  let user2 = { id: 2, name: "Bob" };

  addUser(user1, user1.id);
  addUser(user2, user2.id);

  updateUserActivity(user1, user1.id);

  
  setTimeout(() => {
    cleanUpInactiveUsers(2000);

    
    user1 = null;
    console.log("User1 object reference removed (eligible for GC).");

  }, 3000);
})();
