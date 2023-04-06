export const formatPrice = (number) => {
  const newNumber = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(number / 100);
  return newNumber;
};

export const getUniqueValues = () => {};
