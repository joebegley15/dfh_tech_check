function printLabels(batchSize, caseQty, labeledFcst, unlabeledFcst) {
	var ratio, labeledOrder, unLabeledOrder;

	ratio = labeledFcst / (labeledFcst + unlabeledFcst);

	labeledOrder = Math.floor((ratio * batchSize)/caseQty) * caseQty;
	unLabeledOrder = batchSize - labeledOrder;

	return 'We will need ' + labeledOrder + ' labeled units and ' + unLabeledOrder + ' unlabeled units.';
}

console.log(printLabels(2500,60,1520,180));
console.log(printLabels(2500,60,762,493));
console.log(printLabels(5000,42,1997,601));
console.log(printLabels(5000,60,2280,960));