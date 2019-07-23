/*
--------------------------------------------------
Задача 2.1
--------------------------------------------------

Для страницы:

<!DOCTYPE HTML>
<html>

<head>
  <meta charset="utf-8">
</head>

<body>
  <div>Покупки:</div>
  <ul>
    <li>Хлеб</li>
    <li>Масло</li>
  </ul>

  <!-- комментарий -->

  <script>
    // ... ваш код
  </script>

</body>

</html>

Напишите код, который получит элемент HEAD.
Напишите код, который получит UL.
Напишите код, который получит второй LI.
*/
document.head
document.body.children[1]
document.body.children[1].children[2]