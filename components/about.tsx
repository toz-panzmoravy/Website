export function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-sm text-muted-foreground mb-6 font-mono uppercase tracking-wider">Information</h2>
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Currently, I'm a Product Owner specializing in professional applications and trading systems. I
                contribute to the creation and strategy of products that bridge complex technical requirements with user
                needs, ensuring our solutions deliver real business value.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                In the past, I've had the opportunity to develop software across a variety of domains — from
                productivity applications to advanced trading indicators and algorithmic order systems. Additionally,
                I've led product initiatives that required deep technical understanding and strategic thinking.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                In my spare time, I'm usually exploring new technologies, analyzing market trends, or working on
                personal projects that challenge conventional approaches to problem-solving.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-sm text-muted-foreground mb-6 font-mono uppercase tracking-wider">Selected work</h2>
            <div className="space-y-8">
              <div className="group">
                <div className="aspect-video bg-muted rounded-lg mb-4 overflow-hidden">
                  <img
                    src="/professional-todo-app-interface.jpg"
                    alt="TODO Professional App"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-semibold mb-2">TODO Professional</h3>
                <p className="text-sm text-muted-foreground">
                  Advanced task management system with team collaboration features
                </p>
              </div>

              <div className="group">
                <div className="aspect-video bg-muted rounded-lg mb-4 overflow-hidden">
                  <img
                    src="/trading-indicators-dashboard.jpg"
                    alt="Trading Indicators System"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-semibold mb-2">Trading Indicators Suite</h3>
                <p className="text-sm text-muted-foreground">
                  Comprehensive technical analysis tools for professional traders
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
