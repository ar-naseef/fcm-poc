const admin = require("firebase-admin");
const fetch = require("node-fetch");

var serviceAccount = require("./browserbird-dev-firebase-adminsdk-p0vjs-b116615bbe.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

console.log("Hello");

const sendNotification = async () => {
  const resp = await fetch("https://fcm.googleapis.com/fcm/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "",
    },
    body: JSON.stringify({
      to:
        "fcm token to be added here",
      notification: {
        title: "Breaking News",
        body: "New news story available.",
      },
      data: {
        story_id: "story_12345",
      },
    }),
  }).then((res) => res.text());
  console.log("Resp, ", resp);
};

sendNotification();
