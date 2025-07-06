import DesignCard from './DesignCard';

const designProjects = [
  {
    title: "IPA Can Redesign",
    description: "A packaging project for a fictional IPA.",
    preview: "/design/ipa-preview.jpg",
    fullText: "This redesign explores brand identity across different formats...",
    images: [
      "/images/ipa-wrap.jpg",
      "/images/ipa-render.jpg",
      "/images/ipa-tent.jpg"
    ]
  }
];

export default function DesignSection() {
  return (
    <div>
      <h2>Graphic Design Portfolio</h2>
      <p>This is where I’ll showcase my visual and creative work.</p>
       {designProjects.map((proj, i) => (
        <DesignCard key={i} {...proj} />
      ))}
    </div>
  );
}
