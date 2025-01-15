import { Metadata } from 'next';
import { getAula } from '@/api/cursos';

export const metadata: Metadata = {
  title: 'Aula',
  description: 'Aula page',
};

type AulaParams = {
  params: { curso: string; aula: string };
};
export default async function AulaPage({ params }: AulaParams) {
  const aula = await getAula(params.curso, params.aula);

  return (
    <main>
      <h2>Aula: {params.curso}/{params.aula}</h2>
      <p>{aula.nome}</p>
    </main>
  );
}
