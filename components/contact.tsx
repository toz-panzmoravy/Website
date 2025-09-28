import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Github, Twitter } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl">
          <h2 className="text-sm text-muted-foreground mb-8 font-mono uppercase tracking-wider">Contact</h2>

          <h3 className="text-3xl font-bold mb-6 text-balance">
            If you would like to discuss a project or just say hi, I'm always open to chat.
          </h3>

          <Button className="mb-12">
            <Mail className="h-4 w-4 mr-2" />
            Get in touch
          </Button>

          <div className="space-y-4">
            <div>
              <h4 className="text-sm text-muted-foreground mb-2 font-mono uppercase tracking-wider">Email</h4>
              <a
                href="mailto:hello@productowner.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                hello@productowner.com
              </a>
            </div>

            <div className="pt-8">
              <div className="flex gap-6">
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">© 2025. Crafted with attention to detail.</p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">
                Imprint
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
