/*
Questão 1: Avaliações de comida

Um restaurante lançou um aplicativo para entrega de comida. 'n' avaliações
sobre vários itens do cardápio foram enviadas. Os usuários enviaram
uma avaliação de 1 a 5 (1 sendo pior e 5 sendo melhor). O
gerente quer saber o prato mais amado do restaurante.

Descubra o prato com a maior avaliação média.

Nota: Se dois pratos tiverem a mesma avaliação, retorne o prato com o menor ID.

Descrição da função:
Complete a função solution() fornecida no editor. A função
recebe os seguintes 2 parâmetros e retorna a solução:

- n: Representa o número de avaliações (este parâmetro é para propósitos
  internos, não o remova da função)
- ratings: Representa as avaliações de cada prato

Formato de entrada para testes customizados:
- A primeira linha contém n denotando o número de avaliações.
- As próximas n linhas contêm dois inteiros cada, o ID e a avaliação da
  i-ésima avaliação.

Formato de saída:
Retorne um único inteiro, representando o ID do prato com maior avaliação.

Restrições:
1 ≤ n ≤ 10^5
1 ≤ ratings[i][0] ≤ 10^9
1 ≤ ratings[i][1] ≤ 5

Exemplo de entrada:
4
512 2
123 3
987 4
123 5

Exemplo de saída:
123

Explicação:
O prato único que se repete é o 123, então sua avaliação média será:
média = (3+5)/2 = 4

Os outros pratos têm apenas uma avaliação. As avaliações médias são:
média_avaliações = [[512, 2], [123, 4], [987, 4]]

Agora, tanto os pratos 123 quanto 987 têm avaliações médias de 4, mas 123 é
numericamente menor, o que significa que a solução deve retornar 123.
*/

type Rating = [number, number]; // [dishId, rating]
type RatingValue = 1 | 2 | 3 | 4 | 5;

interface DishRatings {
    [dishId: string]: RatingValue[];
}

interface DishAverage {
    dishId: number;
    average: number;
}

const solution = (n: number, ratings: Rating[]): number => {
    // Objeto para armazenar as avaliações de cada prato
    const dishRatings: DishRatings = {};
    
    // Agrupa as avaliações por ID do prato
    for (let i = 0; i < n; i++) {
        const dishId: number = ratings[i][0];
        const rating: RatingValue = ratings[i][1] as RatingValue;
        
        if (!dishRatings[dishId]) {
            dishRatings[dishId] = [];
        }
        dishRatings[dishId].push(rating);
    }
    
    let maxAverage: number = -1;
    let bestDishId: number = Infinity; // Inicia com infinito para comparar o menor ID
    
    // Calcula a média de cada prato e encontra o melhor
    for (const dishId in dishRatings) {
        const ratingsArray: RatingValue[] = dishRatings[dishId];
        const average: number = ratingsArray.reduce((sum: number, rating: RatingValue) => sum + rating, 0) / ratingsArray.length;
        
        const dishIdNum: number = parseInt(dishId);
        
        // Se a média é maior, ou se é igual mas o ID é menor
        if (average > maxAverage || (average === maxAverage && dishIdNum < bestDishId)) {
            maxAverage = average;
            bestDishId = dishIdNum;
        }
    }
    
    return bestDishId;
};

export { solution };
