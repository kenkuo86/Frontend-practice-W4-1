$(document).ready(function(){
	let hasOperator = false,
		operand = "",
		result = "0",
		operator = "";

	$("#result").html(result);
	$("table").click(function(e){
		if (e.target.className === "num") {
			operand += e.target.innerHTML;
		} else if (e.target.className === "operator") {
			operator = e.target.innerHTML;
			hasOperator = true;
			result = operand;
			operand = "";
		} else if (e.target.id === "dot"){
			if ((operand === "0"||operand === "") && !operand.includes(".")) {
				operand = "0.";
			} else if (operand !== "0" && !operand.includes(".")) {
				operand += "."
			}
		} else if (e.target.id === "AC") {
			operand = "";
			result = "0";
		} else if (e.target.id === "equal" && hasOperator) {
			if (operator === "+") {
				result = parseFloat(result) + parseFloat(operand);
				operand = "";
			} else if (operator === "-") {
				result = parseFloat(result) - parseFloat(operand);
				operand = "";
			} else if (operator === "×") {
				result = parseFloat(result) * parseFloat(operand);
				operand = "";
			} else if (operator === "÷") {
				result = parseFloat(result) / parseFloat(operand);
				operand = "";
			}
		}

		if (operand === "") {
			$("#result").html(result);	
		} else {
			$("#result").html(operand);	
		}
	});
});