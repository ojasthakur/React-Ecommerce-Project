export const formatPrice = (number) => {
  const newNumber = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(number / 100);
  return newNumber;
};

export const getUniqueValues = (data, type) => {
  let allDataTypes = data.map((item) => {
    return item[type];
  });
  if (type === "colors") {
    allDataTypes = allDataTypes.flat();
  }
  let uniqueDataTypes = new Set(allDataTypes);
  return ["all", ...uniqueDataTypes];
};
