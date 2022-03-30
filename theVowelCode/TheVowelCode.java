/*// Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5
// For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

// Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

// For example, decode("h3 th2r2") would return "hi there".

// For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.*/

import java.util.Arrays;
import java.util.*;

import javax.swing.plaf.basic.BasicSliderUI.ChangeHandler;
class TheVowelCode{

    public static char[] encode(String userInput){
        char[] ch = userInput.toCharArray();
        char[] vowel = {'a','e','i','o','u'};
        for(int i=0; i<=ch.length-1;i++){
            for(int j=0; j<=4; j++){
                if(ch[i] == vowel[j]){
                    if(vowel[j] == 'a'){
                        ch[i] = '1';
                    }else if(vowel[j] == 'e'){
                        ch[i] = '2';
                    }else if(vowel[j] == 'i'){
                        ch[i] = '3';
                    }else if(vowel[j] == 'o'){
                        ch[i] = '4';
                    }else if(vowel[j] == 'u'){
                        ch[i] = '5';
                    }
                }
            }
        }
        return ch;
    }

    public static char[] decode(String userInput){
        char[] ch = userInput.toCharArray();
        char[] num = {'1','2','3','4','5'};
        for(int i=0; i<=ch.length-1;i++){
            for(int j=0; j<=4; j++){
                if(ch[i] == num[j]){
                    if(num[j] == '1'){
                        ch[i] = 'a';
                    }else if(num[j] == '2'){
                        ch[i] = 'e';
                    }else if(num[j] == '3'){
                        ch[i] = 'i';
                    }else if(num[j] == '4'){
                        ch[i] = 'o';
                    }else if(num[j] == '5'){
                        ch[i] = 'u';
                    }
                }
            }
        }
        return ch;
    }


    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter your string input");
        String userInput = sc.nextLine();
        char encodeResult[] = encode(userInput);
        char decodeResult[] = decode(userInput);
        for(int i=0; i< encodeResult.length;i++){
            System.out.print(encodeResult[i]);
        }
        System.out.println("");
//        for(int i=0; i< decodeResult.length;i++){
//            System.out.print(decodeResult[i]);
//        }

    }
}