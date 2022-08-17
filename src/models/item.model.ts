export interface Item {
  id: string;
  name: string;
  description?: string;
  quantity: number;
  createdAt: Date;
  deletedAt?: Date;
}

export function generateFakeData(): Item {
  return {
    id: Math.random().toString(),
    quantity: Math.random(),
    name: 'gibi-' + Math.random().toString(),
    description: 'descricao fake',
    createdAt: new Date(),
  };
}
