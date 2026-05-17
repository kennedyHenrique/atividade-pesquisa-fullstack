import { computed, Signal, signal, WritableSignal } from "@angular/core";


//Writable signals

// Um sinal é criado usando a função signal, que recebe um valor inicial como argumento:
const count = signal(0);
console.log('The count is: ' + count());

// para atualizar o valor do sinal, use a função set:
count.set(1);
console.log('The count is: ' + count());

// Você também pode usar a função update para atualizar o valor do sinal com base no valor anterior:
count.update(value => value + 1);
console.log('The count is: ' + count());

//converter um writable signal em um sinal somente leitura usando a função asReadonly:
const readonlyCount = count.asReadonly();
console.log('The readonly count is: ' + readonlyCount());

//Computed signals são sinais read-only que derivam seu valor de outros sinais. Eles são criados usando a função computed, que recebe uma função como argumento. A função é executada sempre que os sinais dos quais ela depende mudam, e o valor do sinal computado é atualizado automaticamente.
const count2: WritableSignal<number> = signal(0);
const doubleCount: Signal<number> = computed(() => count2() * 2);