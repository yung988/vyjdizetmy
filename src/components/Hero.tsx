import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="py-20 px-4 text-center">
      <h1 className="text-4xl font-bold mb-4">Vítejte v Terapeutické Praxi</h1>
      <p className="text-xl mb-8">Pomáháme vám najít cestu k duševní pohodě a rovnováze.</p>
      <Button size="lg">Kontaktujte nás</Button>
    </section>
  )
}