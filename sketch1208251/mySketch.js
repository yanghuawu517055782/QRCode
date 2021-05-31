// Given the following CSV file called "mammals.csv"
// located in the project's "assets" folder:
//
// id,species,name
// 0,Capra hircus,Goat
// 1,Panthera pardus,Leopard
// 2,Equus zebra,Zebra

let table;

function preload() {
  //my table is comma separated value "csv"
  //and has a header specifying the columns labels
  table = loadTable('data_1.csv', 'csv', 'header');
  //the file can be remote
  //table = loadTable("http://p5js.org/reference/assets/mammals.csv",
  //                  "csv", "header");
}

function setup() {
  //count the columns
	createCanvas(800,400);
	background(color(37,40,86));
  print(table.getRowCount() + ' total rows in table');
  print(table.getColumnCount() + ' total columns in table');

	stroke(131,248,255)
	line(50,300,750,300);
	line(50,300,50,50);
	noStroke();
 for (let i=0; i< 8; i++) {
	 var value=table.getColumn("data");
	 print(value);
	 fill(228,57,104);
	 rect(i*100+100,300,20,-value[i]*200);
 }
	
  // print(table.getColumn('data'));
	
  //["Goat", "Leopard", "Zebra"]

  //cycle through the table
//   for (let r = 0; r < table.getRowCount(); r++)
//     for (let c = 0; c < table.getColumnCount(); c++) {
//       print(table.getString(r, c));
//     }
// 	  for (let r = 0; r < table.getRowCount(); r++){
			
// 		}
			


}
