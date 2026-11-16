import java.util.Scanner;
public class Exerc02 {
    public static void main(String[] args) {
        double raio, area, perimetro;

        Scanner leia = new Scanner(System.in);

        System.out.println("Digite o valor do raio do círculo:");
        raio = leia.nextDouble();

        area = 3.14 * (raio * raio);
        perimetro = 2 * 3.14 * raio;

        System.out.println("Área do círculo: " + area);
        System.out.println("Perímetro do círculo: " + perimetro);

        leia.close();
    }
}
