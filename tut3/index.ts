let num = 6 as const;
let arr = [1, 3, 5, 7, 9] as const;

type ArrT = (typeof arr)[number];

function isNumber(n: string | number | boolean): n is number {
  return typeof n === "number";
}

const tyt = isNumber(1);

type Square = {
  side: number;
  area: number;
};

type Rect = {
  width: number;
  height: number;
  area: number;
};

function calc(a: number): Square;
function calc(a: number, b: number): Rect;

function calc(a: number, b?: number): Square | Rect {
  if (b) {
    return {
      width: a,
      height: b,
      area: a * b,
    };
  }
  return {
    side: a,
    area: a * a,
  };
}
