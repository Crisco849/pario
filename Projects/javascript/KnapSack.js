var values = [100, 20, 60, 40];
var weights = [3, 2, 4, 1];
var capacity = 5;
itemCount = 4;

KnapSack(values, weights, capacity, itemCount);

function max(a, b){
	return (a > b) ? a : b;
}

function KnapSack(val, wt, W, n){
	var table = new Array(n+1);

	for (var i = 0; i < table.length; i++) { 
    	table[i] = new Array(W+1 ); 
	} 
  
	for(var i = 0; i < n+1; i++){
		table[i][0] = 0;
	}

	for(var j = 0; j < W+1; j++){
		table[0][j] = 0;
	}
	 
	for(var i = 1; i <= n; i++){
		for(var j = 1; j <= W; j++){
			if(wt[i-1] <= j){
				table[i][j] = max(table[i-1][j], val[i-1] + table[i-1][j-wt[i-1]]);
			} else {
				table[i][j] = table[i-1][j];
			}
		}
	} 



	// Display Elements
	for (var i = 0; i <= n; i++) { 
	    for (var j = 0; j <= W; j++)    { 
	        document.write(table[i][j] + " "); 
	    } 
	    document.write("<br>"); 
	}  
	document.write("Max value is " + table[n][W]);
}