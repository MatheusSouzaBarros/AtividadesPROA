import java.util.Scanner;
public class Exerc03 {
    public static void main(String[] args) {
        double base, altura, area;

        Scanner leia = new Scanner(System.in);

        System.out.println("Digite o valor da base do triângulo:");
        base = leia.nextDouble();

        System.out.println("Digite o valor da altura do triângulo:");
        altura = leia.nextDouble();

        area = (base * altura) / 2;

        System.out.println("Área do triângulo: " + area);

        leia.close();
    }
}
