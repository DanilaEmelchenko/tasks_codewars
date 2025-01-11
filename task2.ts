// У вас есть отмеченный наградами сад, и каждый день растениям нужно ровно 40 мм воды.
// Вы создали отличный фрагмент JavaScript для расчета количества воды,
// необходимой вашим растениям, принимая во внимание прогнозируемое на день количество дождевой воды.
// Ваш завистливый сосед взломал ваш компьютер и наполнил ваш код ошибками.

// Ваша задача — отладить код, прежде чем ваши растения погибнут!

// function rainAmount(mm){
//     if (rainAmount = 40) {
//          return "You need to give your plant " + {rainAmount - 40} + " mm of water"
//     };
//     if else {
//          return "Your plant has had more than enough water for today!"
//     };
// }

const rainAmount = (mm: number): string => {
  if (mm < 40) {
    return `You need to give your plant ${40 - mm}mm of water`;
  } else {
    return "Your plant has had more than enough water for today!";
  }
};

console.log(rainAmount(40));
