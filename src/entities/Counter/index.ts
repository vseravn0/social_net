import type { CounterSchema } from 'entities/Counter/model/types/counterSchema';
import { counterReducer } from './model/slice/counterSlice';
import { Counter } from './ui/Counter';

export {
    CounterSchema,
    counterReducer,
    Counter,
};
