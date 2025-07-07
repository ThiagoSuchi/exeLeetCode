/*
Questão 3: Seja um detetive

Detetive, um dos membros da nossa equipe rastreou nosso alvo, Vincent o
ladrão, até um depósito escondido. Acreditamos que é onde ele está guardando
os produtos roubados. A entrada deste depósito é protegida por um cadeado
digital de combinação. No entanto, nosso informante não tem certeza total
sobre o PIN que testemunhou Vincent digitar.

O teclado tem o seguinte layout:

┌───┬───┬───┐
│ 1 │ 2 │ 3 │
├───┼───┼───┤
│ 4 │ 5 │ 6 │
├───┼───┼───┤
│ 7 │ 8 │ 9 │
└───┼───┼───┘
    │ 0 │
    └───┘

Ele observou o PIN 1357, mas ele também disse que é possível que cada um dos
dígitos que ele viu pudesse na verdade ser outro dígito adjacente (horizontal ou
verticalmente, mas não na diagonal). Por exemplo, em vez do 1, também poderia ser o 2
ou 4. E em vez do 5, também poderia ser o 2, 4, 6, ou 8.

Ele também mencionou que conhece esse tipo de cadeado. Você pode inserir uma
quantidade ilimitada de PINs errados, mas eles nunca travam o sistema ou
tocam o alarme. É por isso que podemos experimentar todas as variações possíveis.

Todas as possíveis no sentido do PIN observado em si e todas as variações
considerando os dígitos adjacentes.

Você pode nos ajudar a encontrar todas essas variações? O array deve conter todos
os PINs possíveis ordenados em valor crescente.

Detetive, estamos contando com você!

Notas:
Entrada: PIN em formato string
Saída: Array de strings (o PIN observado deve estar incluído no array)

Exemplo de entrada: "8"
Exemplo de saída: ["0", "5", "7", "8", "9"]

Explicação:
Se o PIN observado é "8", todas as combinações possíveis considerando movimento
horizontal e vertical nos dão o próximo array de saída:
["0", "5", "7", "8", "9"]

Outro exemplo seria para o PIN observado "11":
Neste caso, a saída será:
["11", "12", "14", "21", "22", "24", "41", "42", "44"]

Lembre-se de que a saída deve ser ordenada crescentemente.
*/

type Digit = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';

interface AdjacentMap {
    [key: string]: Digit[];
}

const solution = (pin: string): string[] => {
    // Validação de entrada
    if (!pin || pin.length === 0) {
        return [];
    }
    
    // Mapeamento dos dígitos adjacentes no teclado
    const adjacents: AdjacentMap = {
        '0': ['0', '8'],
        '1': ['1', '2', '4'],
        '2': ['1', '2', '3', '5'],
        '3': ['2', '3', '6'],
        '4': ['1', '4', '5', '7'],
        '5': ['2', '4', '5', '6', '8'],
        '6': ['3', '5', '6', '9'],
        '7': ['4', '7', '8'],
        '8': ['5', '7', '8', '9', '0'],
        '9': ['6', '8', '9']
    };
    
    // Função recursiva para gerar todas as combinações
    const generateCombinations = (
        position: number, 
        currentPin: string, 
        allCombinations: Set<string>
    ): void => {
        if (position === pin.length) {
            allCombinations.add(currentPin);
            return;
        }
        
        const digit: string = pin[position];
        
        // Verificar se o dígito é válido
        if (!adjacents[digit]) {
            return;
        }
        
        const possibleDigits: Digit[] = adjacents[digit];
        
        for (const possibleDigit of possibleDigits) {
            generateCombinations(position + 1, currentPin + possibleDigit, allCombinations);
        }
    };
    
    const allCombinations: Set<string> = new Set();
    generateCombinations(0, '', allCombinations);
    
    // Converter para array e ordenar numericamente
    return Array.from(allCombinations).sort((a: string, b: string): number => {
        // Converter para número para ordenação correta
        const numA: number = parseInt(a, 10);
        const numB: number = parseInt(b, 10);
        return numA - numB;
    });
};

export { solution };
