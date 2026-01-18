//shitass!

#include <Keypad.h>
#include <SPI.h>
#include <LiquidCrystal.h>

//keypad
const byte ROWS = 5;
const byte COLS = 4;

char numkeys[ROWS][COLS] = {
{'N', '/', '*', 'D'},
{'7', '8', '9', '-'},
{'4', '5', '6', '+'},
{'1', '2', '3', 'X'},
{'0', 'X', '.', '='},
};

byte colPins[COLS] = {6, 7, 8, 9};
byte rowPins[ROWS] = {1, 2, 3, 4, 5}; //pin numbers on the SOM I's using

Keypad kpd = Keypad(makeKeymap(numkeys), rowPins, colPins, ROWS, COLS);


LiquidCrystal lcd(21,20,19,18,17,16);
/*
//how tf do I setup SPI i never done this before
// 2.9" Display, B/W, 128*296
//SDA=7, CS=8, RES=9, BUSY=10, D/C=11, SCL=11 <<planned display pins for current E-ink display and PCB design
//SPI display
*/

//dunno the right terms but these get assigned values to make calculations and displays

float E1;  //first expression
float E2;  //second expression
float E3;  //result
float EX;  //swap area
char key, oper;
uint8_t Ct=1; //character count. Starts at 1 cuz 0 is default displayed character
uint8_t Dt=0; //after decimal count
bool  calc=false;

String SEX0 = String("0"); //string of above expressions 4 print to display
String SEX1 = String(""); //string expression
String SEX2 = String(""); //haha funneeeeeeee
String SEX3 = String("");


void setup(){
  Serial1.begin(9600);
  lcd.begin(20, 4);
  // you can now interact with the LCD, e.g.:
  lcd.print("Hello World!");
  delay(1000);
  lcd.clear();
}

void loop(){
  key = kpd.getKey(); //this stores the pressed key in a char value according to built makeKeymap
  lcd.setCursor(0,0);lcd.print("0:"+SEX0+" E:"+EX);
  lcd.setCursor(0,1);lcd.print("1:"+SEX1+" E:"+E1);
  lcd.setCursor(0,2);lcd.print("2:"+SEX2+" E:"+E2);
  lcd.setCursor(0,3);lcd.print("3:"+SEX3+" E:"+E3);
  lcd.setCursor(12,2);lcd.print("K:"+String(key));
  lcd.setCursor(10,3);lcd.print("C:");lcd.print(Ct);lcd.print(" D:");lcd.print(Dt);
  if (key != NO_KEY){DoMath();}          //do the thing called DoMath
  lcd.setCursor(18-Ct-Dt,0);
  lcd.print(SEX0);
  delay(10);
}

void DoMath(){              //okay here we go this is where i try to write code to make
  if (key=='1'||key=='2'||key=='3'||key=='4'||key=='5'||key=='6'||key=='7'||key=='8'||key=='9'||key=='0'||key=='.'){  //if any number or decimal
    if ((SEX0=="0")&&(key!='.')) if (key!='0'){SEX0=String(key);} else {Ct=1;} else {    //if
      if(key=='.'){if(Dt==0){SEX0= SEX0 + String(key);Dt++;}}  //if '.', then if Dt=0, add '.' as string to SEX1
      else{ SEX0= SEX0 + String(key);if (Dt>0){Dt++;} else {Ct++;}}    //this will probably misbehave if you hit 0 multiple times.
      lcd.setCursor(20,0);lcd.print("          ");//this sucks find a better way!!
      lcd.setCursor(18-Ct-Dt,0);
      lcd.print(SEX0);
      //Serial1.print(Ct);Serial1.print(Dt);Serial1.print("key:");Serial1.print(key);Serial1.println(" Ex:" + SEX0);
      //yoink.PuttaCursor(FarRight-Ct-Dt) \\start FarRight, move left as many times as are strings in result
      //yoink.print(SEX1)
      //EX = SEX0.toFloat();
    }
  EX = SEX0.toFloat();
  }

  if (key=='D'){
    EX = 0;
    E1 = 0;
    E2 = 0;
    E3 = 0;
    SEX0 = String("0");
    SEX1 = String("");
    SEX2 = String("");
    SEX3 = String("");
    Ct=1;
    Dt=0;
    calc=false;
    lcd.setCursor(0,0);
    String killmess = "KILLEMALLKILLEMALLKILLEMALLKILLEMALLKILLEMALLKILLEMALL";
    for (byte i = 0; i < killmess.length(); i++) {
      lcd.print(killmess[i]);
      delay(10);}
    delay(100);lcd.clear();
  }
  if (key=='*'||key=='/'||key=='-'||key=='+'||key=='='){    //if operator key pressed
    if (key=='*'){oper='*';}
    if (key=='/'){oper='/';}
    if (key=='-'){oper='-';}
    if (key=='+'){oper='+';}
    Ct=1;Dt=0;
    lcd.clear();
    lcd.setCursor(12,1);lcd.print(oper);
    Calculate();
  }

}

void Calculate(){  // okay by here we should have SEX0 as a string containing whatever buttons we pushed and the desired operator
if (!calc){E1=E2=EX;SEX1=SEX0;SEX0=String("0");} //if first time, move the expressions around so we can get the second expression
else {E2=EX;SEX2=SEX0;SEX0=String("0");
  if (oper =='*') {E1=E1*E2;}
  if (oper =='/') {E1=E1/E2;}
  if (oper =='-') {E1=E1-E2;}
  if (oper =='+') {E1=E1+E2;}
  SEX3=String(E1);}
if ((E1!=0)&&(key=='=')){
  Ct=1;
  Dt=0;}
calc=true;
}

//void DisplayResult(){
    //Make this shrimple, single line of display on the Calc. say, 12-15 characters on screen 128*296
    //operator symbol aligned right, expression aligned right
    //[+____16.0625]
    /******************************************
     *                                        *
     *    |                  000        111   *
     * ---|---              0   0         1   *         <this kinda shit
     *    |                 0   0         1   *
     *                       000    0   11111 *
     *                                        *
     ******************************************
    */
//}
