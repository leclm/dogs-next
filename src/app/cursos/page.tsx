import { Metadata } from 'next';
import { getCursos } from '@/api/cursos';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cursos',
  description: 'Cursos page',
};

export default async function CursosPage() {
  const cursos = await getCursos();

  return (
    <main>
      <h2>Cursos</h2>
      <ul>
        {cursos.map((curso) => (
          <li key={curso.id}>
            <Link href={`/cursos/${curso.slug}`}>
              {curso.nome}: {curso.descricao}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
