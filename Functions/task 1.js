let arr = [1, 2, 3, 4, 5, "string"];
let oddCounter = 0;
let evenCounter = 0;
let nullCounter = 0;
let otherCounter = 0;
function checkTypeElem(){
	for (i = 0; i < arr.length; i++) {
		if (typeof arr[i] == "number") {
			if (arr[i] % 2 != 0) {
				oddCounter++;
			}
			else if (arr[i] % 2 == 0) {
				evenCounter++;
			}
		}
		else if (typeof arr[i] == "null") {
			nullCounter++;
		}
		else {
			otherCounter++;
		};
	};
};
checkTypeElem(arr);
console.log("Количество нечётных чисел - " + oddCounter);
console.log("Количество чётных чисел - " + evenCounter);
console.log("Количество пустых значений - " + nullCounter);
console.log("Количество других элементов - " + otherCounter);