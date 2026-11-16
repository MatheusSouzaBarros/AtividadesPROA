import java.util.Scanner;
public class Exerc04 {
    public static void main (String[] args) {
        float nota1, nota2, nota3, media;

        Scanner leia = new Scanner(System.in);

        System.out.println("Digite a primeira nota: ");
        nota1 = leia.nextFloat();

        System.out.println("Digite a segunda nota: ");
        nota2 = leia.nextFloat();

        System.out.println("Digite a terceira nota: ");
        nota3 = leia.nextFloat();

        media = ((nota1 * 2) + (nota2 * 3) + (nota3 * 5)) / (2 + 3 + 5);

        System.out.println("A média ponderada é: " + media);

        leia.close();
    }
}
