import java.util.Scanner;
public class ImportTest {
    
public static void main(String[] args) {
    Scanner in = new Scanner(System.in);
    System.out.println("Enter your first name:");
    String firstName = in.nextLine();
    System.out.println("Enter your last name:");
    String lastName = in.nextLine();
    System.out.println("Enter your city");
    String city = in.nextLine();
    in.close();
    String result = firstName + " " + lastName + " " + city;
    System.out.println(result);

}


}
