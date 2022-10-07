let phrases = [
  "Наш менеджер передзвонить Вам найближчим часом!",
  "Уточнити деталі можна за телефоном 123456789",
  "Залишайтеся на зв'язку!",
  "Cьогодні прекрасна погода!",
  "З Вами дуже приємно спілкуватися!",
];
let user = "строка";
alert("Вітаю шановне панство!");
while (!user.includes("до побачення")) {
  user = prompt("Пишіть що заманеться").toLowerCase();
  switch (user) {
    case "привіт":
      alert("Привіт :)");
      break;
    case "ти хто?":
      alert("Я бот Василь");
      break;
    default:
      alert(phrases[Math.floor(Math.random() * phrases.length)]);
  }
}
alert("Бувайте!");
