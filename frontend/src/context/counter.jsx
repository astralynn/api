import { createContext } from "react";

const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
const [count, srCount] = useSate(0)

const value = {count, setCount}

   return <CounterContext>
      {children}
   </CounterContext>
}

export default CounterContext