$(document).ready(function(){
	let hasOperator = false,
		operand = "",
		result = "0",
		operator = "";

	$("#result").html(result);
	$("table").click(function(e){
		if (e.target.className === "num") {
			if (hasOperator) {
				result = operand;
				operand = "0";
			} else {
				operand += e.target.innerHTML;
			}
		} else if (e.target.className === "operator") {

		} else if (e.target.id === "dot"){
			if ((operand === "0"||operand === "") && !operand.includes(".")) {
				operand = "0.";
			} else if (operand !== "0" && !operand.includes(".")) {
				operand += "."
			}
		} else if (e.target.id === "AC") {
			operand = "";
			result = "0";
		}

		if (operand === "") {
			$("#result").html(result);	
		} else {
			$("#result").html(operand);	
		}
	});
});