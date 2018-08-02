function printLabels(batchSize, caseQty, labeledFcst, unlabeledFcst) {
	var ratio, labeledOrder, unLabeledOrder;

	ratio = labeledFcst / (labeledFcst + unlabeledFcst);

	labeledOrder = Math.floor((ratio * batchSize)/caseQty) * caseQty;
	unLabeledOrder = batchSize - labeledOrder;

	return 'We will need ' + labeledOrder + ' labeled units and ' + unLabeledOrder + ' unlabeled units.';
}

function printLabelsOneLiner(e,n,l,t){return"We will need "+Math.floor(l/(l+t)*e/n)*n+" labeled units and "+(e-Math.floor(l/(l+t)*e/n)*n)+" unlabeled units."}}

console.log(printLabelsQuick(2500,60,1520,180));
console.log(printLabelsQuick(2500,60,762,493));
console.log(printLabelsQuick(5000,42,1997,601));
console.log(printLabelsQuick(5000,60,2280,960));
console.log(printLabelsQuick(5000,50,3000,2000));