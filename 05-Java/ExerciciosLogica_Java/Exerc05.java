import java.util.Scanner;
public class Exerc05 {
    public static void main(String[] args) {
        float valor, valorTotal;
        int quantd;

        Scanner leia = new Scanner(System.in);

        System.out.println("Digite o valor do produto: ");
        valor = leia.nextFloat();

        System.out.println("Digite a quantidade de produtos: ");
        quantd = leia.nextInt();

        valorTotal = valor * quantd;

        if (quantd > 10) {
            valorTotal = valorTotal * 0.9f; 
        };

        System.out.println("O valor total da compra é: " + valorTotal);

        leia.close();
    }
}
