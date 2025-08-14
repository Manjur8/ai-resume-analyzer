import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumine" },
    { name: "description", content: "Smart feedback for your resume" },
  ];
}

export default function Home() {
  return <main>
    <section className="main-section">
      <div className="page-heading">
        <h1>Track Your Resume</h1>
      </div>
    </section>
  </main>;
}
