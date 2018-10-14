const numbers = [];
const symbol = [];

function main(items){
	var ordered  = convertToNumberArray(items);
	
	if(checkSymbolMatch(symbol)){
		if(checkOrderArray(ordered)){ 
			result = "Stage flush";
		}else{
			result = "flush";
		}
	}else{
		countPairs =countPair(ordered);
		if(countPairs == 6){
			result =  "1 pair";
		}else if(countPairs == 7){
			result = "2 pair";
		}else if(countPairs == 8){
			result = "Tong";
		}else if(countPairs == 9){
			result = "FullHouse";
		}else if(countPairs == 11){
			result = "Four mod";
		}else{
			result = "Hight scroll"
		}
	}
	return result;
}

function convertToNumberArray(items){
	console.log("Your card "+items);
	var result;
	var ordered =[];
	var numberTmp;
	var numberTmp2 ="";
	var numberTmp3
	

	
	items.forEach(function(item){
		numberTmp2 = item.substring(0,1);
		numberTmp3 = item.substring(1,2)
		
		if(numberTmp2=='J'){
			numberTmp = 11;
		}else if(numberTmp2=='Q'){
			numberTmp = 12;
		}else if(numberTmp2=='K'){
			numberTmp = 13;
		}else if(numberTmp2=='A'){
			numberTmp = 14;
		}else{
			numberTmp=parseInt(numberTmp2);
		}
		
			numbers.push(numberTmp);
			symbol.push(numberTmp3);
		
	});
	
	//Order seqence card
	ordered = numbers.sort(function(a, b){return b-a});
	

	
	return ordered;
}
function checkOrderArray(card){
	var i =0;
	var tmp;
	var check = true;
	do{

		tmp = card[i];
		
		if(tmp - card[i+1] == 1 ){
			check = true;			
		}else{
			check = false;
			break;
		}
		//console.log("......................................");
		i++;
	}while(i<card.length-1)

	return check;
}
/***
checkSymbolMatch function
*/
function checkSymbolMatch(card){
	
	var i =0;
	var tmp;
	var check = true;
	do{

		tmp = card[i];
		
		if(tmp == card[i+1]){
			check = true;			
		}else{
			check = false;
			break;
		}
		//console.log("......................................");
		i++;
	}while(i<card.length-1)
	return check;
}

/***
countPair function
*/
function countPair(card){
	var i =0;
	var check =1;
	var pair = [];
	var result=0;
	
	pair.push(check);
	do{ //Give point for card paired
		if(card[i] == card[i+1]){
			check++;
		}else{
			check = 1;
		}
		pair.push(check);
		i++;
		
	}while(i<card.length-1)

pair.forEach(function(point){result+=point;});
	return result;
}

//call main function
console.log(" Your type : "+main(['6H','2H','4H','5H','3H']));