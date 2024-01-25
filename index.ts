const y = typeof Array;

type ClothesWarehouse = {
  jackets: "empty" | number;
  hats: "empty" | number;
  socks: "empty" | number;
  pants: "empty" | number;
};

// структура данных склада с канцтоварами

type StationeryWarehouse = {
  scissors: "empty" | number;
  paper: "empty" | boolean;
};

// структура данных склада с бытовой техникой

type AppliancesWarehouse = {
  dishwashers: "empty" | number;
  cookers: "empty" | number;
  mixers: "empty" | number;
};

// общая структура данных, наследует все данные из трех выше
// + добавляет свои

type TotalWarehouse = ClothesWarehouse &
  StationeryWarehouse &
  AppliancesWarehouse & {
    deficit: boolean;
    date: Date;
  };

// главный объект со всеми данными, должен подходить под формат TotalWarehouse

const totalData: TotalWarehouse = {
  jackets: 5,
  hats: "empty",
  socks: "empty",
  pants: 15,
  scissors: 15,
  paper: true,
  dishwashers: 3,
  cookers: "empty",
  mixers: 14,
  deficit: false,
  date: new Date(),
};

// Реализуйте функцию, которая принимает в себя главный объект totalData нужного формата
// и возвращает всегда строку
// Функция должна отфильтровать данные из объекта и оставить только те названия товаров, у которых значение "empty"
// и поместить их в эту строку. Если таких товаров нет - возвращается другая строка (см ниже)

// С данным объектом totalData строка будет выглядеть:
// "We need this items: hats, socks, cookers"
// Товары через запятую, в конце её не должно быть. Пробел после двоеточия, в конце строки его нет.

Array.isArray([1, 2, 3]);

function printReport(data: TotalWarehouse): string {
  let missed: string[] = [];
  for (const idx in data) {
    if (data[idx as keyof TotalWarehouse] === "empty") {
      missed.push(idx);
    }
  }

  // another way
  // for (const [idx, val] of Object.entries(data)) {
  //   if (val === "empty") {
  //     missed.push(idx);
  //   }
  // }

  // OR like that
  // const result: string = Object.entries(data)
  // 	.filter((item) => item[1] === "empty")
  // 	.reduce((res, item) => `${res} ${item[0]},`, "");

  // if (result.trim().length) {
  // 	return `We need this items:${result.slice(0, -1)}`;
  // } else {
  // 	return "Everything fine";
  // }

  console.log(Object.entries(data));
  return missed.length
    ? `We need this items: ${missed.join(", ")}`
    : "Everything fine";
}

console.log(printReport(totalData));
