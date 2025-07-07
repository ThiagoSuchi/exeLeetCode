/*
Questão 2: Transformar duração em texto

Sua tarefa neste desafio é escrever uma função que transforme uma 
duração (dada como um número de segundos) em texto legível.

A função deve aceitar um número inteiro não negativo. Se for zero, 
apenas retorna "now". Caso contrário, deve retornar a duração expressa 
como uma combinação de anos, dias, horas, minutos e segundos.

Exemplo:
- Para segundos = 62, sua função deve retornar "1 minute and 2 seconds"
- Para segundos = 3662, sua função deve retornar "1 hour, 1 minute and 2 seconds"

Para este desafio, um ano é 365 dias e um dia é 24 horas.

Regras detalhadas:
- O resultado é feito de componentes como "4 seconds, 1 year", etc.
- Os componentes são separados por vírgula e espaço (", ").
- Exceto o último componente, que é separado por " and ".
- Uma unidade mais significativa ocorre antes de uma menos significativa.
- Diferentes componentes têm diferentes unidades de tempo.
- Um componente não aparece se seu valor for zero.
- Uma unidade de tempo deve ser usada "o máximo possível".
*/

interface TimeUnit {
    name: string;
    value: number;
    plural: string;
}

type TimeUnitName = 'year' | 'day' | 'hour' | 'minute' | 'second';

const solution = (seconds: number): string => {
    if (seconds === 0) {
        return "now";
    }
    
    // Definir as unidades de tempo em segundos
    const units: TimeUnit[] = [
        { name: "year", value: 365 * 24 * 60 * 60, plural: "years" },
        { name: "day", value: 24 * 60 * 60, plural: "days" },
        { name: "hour", value: 60 * 60, plural: "hours" },
        { name: "minute", value: 60, plural: "minutes" },
        { name: "second", value: 1, plural: "seconds" }
    ];
    
    const components: string[] = [];
    let remaining: number = seconds;
    
    // Calcular cada componente
    for (const unit of units) {
        if (remaining >= unit.value) {
            const count: number = Math.floor(remaining / unit.value);
            remaining = remaining % unit.value;
            
            // Escolher singular ou plural
            const unitName: string = count === 1 ? unit.name : unit.plural;
            components.push(`${count} ${unitName}`);
        }
    }
    
    // Formar o resultado final
    if (components.length === 1) {
        return components[0];
    } else if (components.length === 2) {
        return components.join(" and ");
    } else {
        // Juntar todos exceto o último com vírgula, e o último com " and "
        const allButLast: string = components.slice(0, -1).join(", ");
        const last: string = components[components.length - 1];
        return `${allButLast} and ${last}`;
    }
};

export { solution };
