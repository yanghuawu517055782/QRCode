
let table;

function preload() {
  table = loadTable('data_1.csv', 'csv', 'header');
}

function setup() {
  //count the columns
	createCanvas(800,350);
	background(color(37,40,86));
  print(table.getRowCount() + ' total rows in table');
  print(table.getColumnCount() + ' total columns in table');

	stroke(131,248,255)
	line(750,300,740,295);
		line(750,300,740,305);
		line(50,50,45,60);
		line(50,50,55,60);
	
	line(50,300,750,300);
	line(50,300,50,50);
	textSize(15);
		fill(131,248,255)
	text("0%",25,300);
		text("20%",20,260);
		text("40%",20,220);
		text("60%",20,180);
		text("70%",20,140);
		text("100%",15,100);
	
	
	noStroke();
 for (let i=0; i< 8; i++) {
	 var value=table.getColumn("data");
	 print(value);
	 fill(228,57,104);
	 rect(i*100+100,300,20,-value[i]*200);
 }
 for (let i=0; i< 8; i++) {
	 var time=table.getColumn("time");
	 print(time);
	fill(131,248,255)
	 textSize(20);
	text(time[i],i*100+90,330);
 }
	text(" Hi, Jason",400,50);
	text("This is your last week's data.",300,80);
	

}
