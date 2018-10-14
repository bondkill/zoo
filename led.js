function lcd(numberx){
	
	
var integerx = numberx.toString();
var len = integerx.length;

var str = integerx;
var ar = str.split(''); // empty string separator

var strJoinLine1=" ";
var strJoinLine2=" ";
var strJoinLine3=" ";

for (var index = 0; index < len; index++) {
	var str = ar[index].toString()
	
	console.log(str);
	switch (str) {
    case '1':
        // one();
		strJoinLine1 +=
		strJoinLine2 +='|'+' ';	
		strJoinLine3 +='|'+' ';		
        break;
    case '2':
		strJoinLine1 +='   '+'_';
		strJoinLine2 +=' '+'_|'+' ';	
		strJoinLine3 +='|_'+' ';
        break;
	case '3':
        strJoinLine1 +='  '+'_'+' ';
		strJoinLine2 +='_|'+' ';	
		strJoinLine3 +=' '+'_|'+' ';
        break;
	case '4':
        strJoinLine1 +=' '+' '+' ';
		strJoinLine2 +='|_|'+' ';	
		strJoinLine3 +='  '+'|'+' ';
        break;
	case '5':
        strJoinLine1 +='   '+'_'+' ';
		strJoinLine2 +='|_'+' ';	
		strJoinLine3 +=' '+'_|'+' ';
        break;
	case '6':
        strJoinLine1 +='  '+'_'+' ';
		strJoinLine2 +=' '+'|_';	
		strJoinLine3 +='|_|'+' ';
        break;
	case '7':
        strJoinLine1 +=' '+'_'+' ';
		strJoinLine2 +='   '+'|'+' ';	
		strJoinLine3 +=' '+'|'+' ';
        break;
	case '8':
        strJoinLine1 +='  '+'_'+' ';
		strJoinLine2 +=''+'|_|'+' ';	
		strJoinLine3 +=''+'|_|'+' ';
        break;
	case '9':
        strJoinLine1 +='  '+'_'+' ';
		strJoinLine2 +=''+'|_|'+' ';	
		strJoinLine3 +=' '+'_|'+' ';
    break;
	case '0':
        strJoinLine1 +=' '+'_'+' ';
		strJoinLine2 +='|_|'+' ';	
		strJoinLine3 +=' '+'|_|'+' ';
    break;
	case '.':
        strJoinLine1 +='   ';
		strJoinLine2 +='   ';	
		strJoinLine3 +=' '+'.'+' ';
    break;
   }//end switch case
   
} //end for
	console.log(strJoinLine1);
   console.log(strJoinLine2);
   console.log(strJoinLine3);
}//end function

 lcd(123456789.99999);




