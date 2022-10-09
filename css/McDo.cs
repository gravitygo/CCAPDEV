class McDo{
 static void Main(string[] args){
	int money = 1000;
	int change, netCost;
	int A = 90,B = 20,C = 10;
	string ordA="Tite",ordB="dick",ordC="";

	Console.WriteLine("What/'s your order?");
	char order = Console.ReadLine()[0];
	if(order == 'A')
		Console.WriteLine(ordA);
	else if(order == 'B')
		Console.WriteLine(ordB);
	else if(order == 'C')
		Console.WriteLine(ordC);
	else
		return;
	
	Console.WriteLine("How Many?");
	int qty = Int32.Parse(Console.ReadLine());

	if(order == 'A')
		netCost=qty*A;
	else if(order == 'B')
		netCost=qty*B;
	else if(order == 'C')
		netCost=qty*C;
	else
		return;

	change = money-netCost;

	if(change<0)
		Console.WriteLine("Order is Cancelledt");
	else
		Console.WriteLine("Your change is " + change + ".");
 }
}