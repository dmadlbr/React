export type Transaction = {
  id: number;
  title: string;
  amount: number;
  type: "income" | "expense";
  category: string;
  date: string;
}



// export type Action =
//    { type: 'Add'; payload: Transaction } | { type: 'Edit'; payload: Transaction }| { type: 'Delete'; payload: number };