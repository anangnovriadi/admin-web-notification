self.addEventListener("push", e => {
  const data = e.data.json();
  self.registration.showNotification(data.title, {
    body:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "",
    icon: ""
  });
});
