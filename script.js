let phrases = [
  "Наш менеджер передзвонить Вам найближчим часом!",
  "Уточнити деталі можна за телефоном 123456789",
  "Залишайтеся на зв'язку!",
  "Cьогодні прекрасна погода!",
  "З Вами дуже приємно спілкуватися!",
];
let js = [
  "JavaScript має багато методів для роботи з рядком",
  "Масиви в JavaScript схожі на об'єкти",
];
let html = [
  " HTML це мова, якою спілкується твій браузер",
  "У HTML текст позначається за допомогою теґів",
];
let php = [
  "PHP - це широко використовувана мова сценаріїв загального призначення з відкритим вихідним кодом",
  "PHP доступний для більшості операційних систем",
];
let user = "строка";
alert("Вітаю шановне панство!");
while (!user.includes("до побачення")) {
  user = prompt("Пишіть що заманеться").toLowerCase();
  if (user == "привіт") alert("Привіт :)");
  else if (user == "ти хто") alert("Я бот Василь");
  else if (user.includes("javascript") || user.includes("js"))
    alert(js[Math.floor(Math.random() * js.length)]);
  else if (user.includes("html"))
    alert(html[Math.floor(Math.random() * html.length)]);
  else if (user.includes("php"))
    alert(php[Math.floor(Math.random() * php.length)]);
  else alert(phrases[Math.floor(Math.random() * phrases.length)]);
}
alert("Бувайте!");
