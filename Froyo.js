const userInput = prompt(
    "please enter a list of comma-separated froyo flavors.",);

const orderArray = userInput.split(",");

function countOrders(orderArray){
    const count = {};

    for (let flavor of orderArray) {
        if (count[flavor]){
            count[flavor] += 1;

        }else {
            count[flavor] = 1;
        }
    }

    return count;
}


console.log ("your order is; ${countOrders"(orderArray));

alert("Froyo Flavors: Vanilla,Vanilla,Vanilla,strawberry,coffee,coffee");