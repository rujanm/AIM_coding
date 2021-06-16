public class Exercise2_3 {
    public static void main(String[] agrs) {
        System.out.println("This program calculates pounds per kilogram in a table.");
        System.out.println("\n\tkilograms  pounds");
        System.out.println("\t---------  ------");

        for (int i=1; i<=15; i+=2){
            int kilograms = i;
            double pounds = kilograms*2.2;
            System.out.format("\t%-9d  %-4.1f\n", kilograms, pounds);

        }
        System.out.println("\nGoodbye ...\n");
    }
}
