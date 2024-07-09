function round(num: number, decimalPlaces: number = 6) {
  const num2 = Math.round((num + 'e' + decimalPlaces) as unknown as number);

  return Number(num2 + 'e' + -decimalPlaces);
}

export default round;
