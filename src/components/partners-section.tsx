export function PartnersSection() {
  return (
    <section className="w-full px-6 py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Důvěryhodnost a certifikace</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Mé vzdělání a zkušenosti jsou podloženy oficiálními certifikacemi a uznávanými metodami
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* PSYCH-K Certification */}
          <div className="text-center p-6 bg-card rounded-xl shadow-sm border">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-8 h-8 bg-primary rounded-full"></div>
            </div>
            <h3 className="font-semibold mb-2">PSYCH-K® Facilitator</h3>
            <p className="text-sm text-muted-foreground mb-3">Oficiální certifikace od PSYCH-K® International</p>
            <div className="text-xs text-primary font-medium">Certifikováno 2014</div>
          </div>

          {/* Experience */}
          <div className="text-center p-6 bg-card rounded-xl shadow-sm border">
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-8 h-8 bg-secondary rounded-full"></div>
            </div>
            <h3 className="font-semibold mb-2">10+ let praxe</h3>
            <p className="text-sm text-muted-foreground mb-3">Tisíce hodin práce s klienty</p>
            <div className="text-xs text-secondary-foreground font-medium">Od 2014</div>
          </div>

          {/* Bach Flowers */}
          <div className="text-center p-6 bg-card rounded-xl shadow-sm border">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-8 h-8 bg-accent rounded-full"></div>
            </div>
            <h3 className="font-semibold mb-2">Bachovy esence</h3>
            <p className="text-sm text-muted-foreground mb-3">Specializace na květové terapie</p>
            <div className="text-xs text-accent-foreground font-medium">Certifikovaný praktik</div>
          </div>

          {/* Client Satisfaction */}
          <div className="text-center p-6 bg-card rounded-xl shadow-sm border">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-8 h-8 bg-green-500 rounded-full"></div>
            </div>
            <h3 className="font-semibold mb-2">98% spokojenost</h3>
            <p className="text-sm text-muted-foreground mb-3">Zpětná vazba od klientů</p>
            <div className="text-xs text-green-700 font-medium">Ověřeno referencemi</div>
          </div>
        </div>


      </div>
    </section>
  )
}
