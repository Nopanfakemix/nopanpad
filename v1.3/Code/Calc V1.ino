/*
this code by itself should run operate as a calculator using (not yet) existing nopanpad hardware.
no idea how I switch from numpad mode to standalone calculator mode!
*/

#include <Keypad.h>
#include <SPI.h>

//keypad
const byte ROWS = 4;
const byte COLS = 4;

char numkeys[ROWS][COLS] = {
{'7', '8', '9', '-'},
{'4', '5', '6', '+'},
{'1', '2', '3', '*'},
{'D', '0', '.', '='},
};

byte colPins[COLS] = {6, 7, 8, 9};
byte rowPins[ROWS] = {2, 3, 4, 5}; //pin numbers on the SOM I's using

Keypad kpd = Keypad(makeKeymap(numkeys), rowPins, colPins, ROWS, COLS);
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
uint8_t Ct=0; //character count
uint8_t Dt=0; //after decimal count

String SEX0 = String(""); //string of above expressions 4 print to display
String SEX1 = String(""); //string expression
String SEX2 = String(""); //haha funneeeeeeee


void setup(){
  Serial1.begin(115200);
  Serial1.println("FUCK");
  delay(1000);
  Serial1.println("this");
}

void loop(){
  key = kpd.getKey(); //this stores the pressed key in a char value according to built makeKeymap

  if (key != NO_KEY){DoMath();}          //do the thing called DoMath
  
  delay(10);
}

void DoMath(){              //okay here we go this is where i try to write code to make
  if (key=='1'||key=='2'||key=='3'||key=='4'||key=='5'||key=='6'||key=='7'||key=='8'||key=='9'||key=='0'||key=='.'){   //if any number or decimal
    if ((Ct==0)&&(key=='0')&&(Dt==0)){Ct=0;} else {    //if
      if(key=='.'){if(Dt==0){SEX0= SEX0 + String(key);Dt++;}}  //if '.', then if Dt=0, add '.' as string to SEX1
      else{ SEX0= SEX0 + String(key);if (Dt>0){Dt++;} else {Ct++;}}    //this will probably misbehave if you hit 0 multiple times.
      Serial1.print(key);
      //Serial1.print(Ct);Serial1.print(Dt);Serial1.print("key:");Serial1.print(key);Serial1.println(" Ex:" + SEX0);
      //yoink.PuttaCursor(FarRight-Ct-Dt) \\start FarRight, move left as many times as are strings in result
      //yoink.print(SEX1)
      EX = SEX0.toFloat();
      
    }
  }
  if (key=='D'){
    EX = 0;
    E1 = 0;
    E2 = 0;
    E3 = 0;
    SEX0 = String("");
    Ct=0;
    Dt=0;
    Serial1.println("KILL");
  }
  if (key=='*'||key=='/'||key=='-'||key=='+'||key=='='){    //if operator key pressed
    if (key=='*'){oper='*';}
    if (key=='/'){oper='/';}
    if (key=='-'){oper='-';}
    if (key=='+'){oper='+';}
    Serial1.println(oper);
        //yoink.PuttaCursor(OnDaLeft)
        //yoink.print(oper);}
    Calculate();
  }

}

void Calculate(){  // okay by here we should have SEX0 as a string containing whatever buttons we pushed and the desired operator
if (SEX1==""){E1=EX;SEX1=SEX0;} //if first time, move the expressions around so we can get the second expression
else      {E2=EX;SEX2=SEX0;}
  if (oper =='*') {E1=E1*E2;}
  if (oper =='/') {E1=E1/E2;}
  if (oper =='-') {E1=E1-E2;}
  if (oper =='+') {E1=E1+E2;}
  
if ((E1!=0)&&(key=='=')){
  Serial1.println(E1);
  Serial1.print(E1);Serial1.print(oper);Serial1.print(E2);
}
SEX0 = String("");
SEX1 = String("");
Ct=0;
Dt=0;
E1,E2,EX=0;
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
