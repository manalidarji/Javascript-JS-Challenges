const getBill = (numOfCoffeesArr) => {
	const pricePerCoffee = 1.25;
	const totalNumOfCoffees = numOfCoffeesArr.reduce( (previousVal, currentVal) => previousVal + currentVal, 0);
	const totalBill = totalNumOfCoffees * pricePerCoffee;
	return `The total bill is, $${totalBill}`;
}

const numOfCoffees = [5, 4, 6, 3, 3, 9];
console.log( getBill(numOfCoffees) );