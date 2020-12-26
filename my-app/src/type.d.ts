interface ITodo {
  _id: string;
  name: string;
  description: string;
  status: boolean;
  createdAt?: string;
  updatedAt?: string;
}

interface TodoProps {
  todo: ITodo;
}

type ApiDateType = {
  message: string;
  status: boolean;
  todos: ITodo[];
  todo: ITodo;
};
