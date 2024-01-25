type Units = "kWt" | "m3";

type ElectricityUserData = {
  readings: number;
  units: Units;
  mode: "double";
};
type WaterUserData = {
  readings: number;
  units: Units;
};

const electricityUserData: ElectricityUserData = {
  readings: 95,
  units: "kWt",
  mode: "double",
};

const waterUserData: WaterUserData = {
  readings: 3,
  units: "m3",
};

const elRate: number = 0.45;
const wRate: number = 2;

const monthPayments: number[] = [0, 0]; // [electricity, water]

const calculatePayments = (
  elData: ElectricityUserData,
  wData: WaterUserData,
  elRate: number,
  wRate: number
) => {
  if (elData.mode === "double" && elData.readings < 50) {
    monthPayments[0] = elData.readings * elRate * 0.7;
  } else {
    monthPayments[0] = elData.readings * elRate;
  }

  monthPayments[1] = wData.readings * wRate;
};

calculatePayments(electricityUserData, waterUserData, elRate, wRate);

const sendInvoice = (
  monthPayments: number[],
  electricityUserData: ElectricityUserData,
  waterUserData: WaterUserData
): string => {
  const text = `    Hello!
    This month you used ${electricityUserData.readings} ${electricityUserData.units} of electricity
    It will cost: ${monthPayments[0]}€
    
    This month you used ${waterUserData.readings} ${waterUserData.units} of water
    It will cost: ${monthPayments[1]}€`;

  return text;
};
