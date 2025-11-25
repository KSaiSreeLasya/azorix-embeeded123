import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Section from "@/components/Section";
import DomainHero from "@/components/DomainHero";
import {
  Hammer,
  BarChart3,
  HandshakeIcon,
  Users,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import { AnimatedCard } from "@/components/AnimatedCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Bot() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <SEO
        title="Build Operate Transfer Model | Embinsys"
        description="We build capability, operate services, then transfer knowledge to your team. Long-term partnership with knowledge transfer."
        canonicalPath="/engagement/bot"
      />
      <Section container>
        <DomainHero
          title="Build, Operate, Transfer"
          subtitle="We build the capability, operate the services, then transfer knowledge and control to your team. A long-term partnership that builds your internal expertise."
          image="https://images.pexels.com/photos/3183097/pexels-photo-3183097.jpeg"
          icon={<Hammer className="h-5 w-5" />}
        />
      </Section>

      {/* Overview */}
      <Section container>
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          What Is This Model?
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
          You need capabilities developed and operational, but want to
          eventually own them internally. We help you build the solution, run it
          while you build your team's expertise, then transfer everything to
          your control. Perfect for developing new capabilities or services that
          will become core to your business.
        </p>
      </Section>

      {/* Best For */}
      <Section className="bg-secondary/40">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Best For</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <UseCase
            icon="🏗️"
            title="New Services"
            desc="Building new products or services from scratch"
          />
          <UseCase
            icon="📈"
            title="Scaling Operations"
            desc="Growing services while building your team"
          />
          <UseCase
            icon="🎓"
            title="Knowledge Transfer"
            desc="Developing internal expertise over time"
          />
          <UseCase
            icon="🎯"
            title="Long-term Growth"
            desc="Services that become strategic to your business"
          />
        </div>
      </Section>

      {/* The Three Phases */}
      <Section>
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Three Phases of Partnership
        </h2>
        <div className="space-y-6">
          <PhaseCard
            phase="1"
            title="Build"
            subtitle="Design & Develop"
            desc="We design the solution and build it from scratch. Your team learns by working alongside us."
            items={[
              "Complete solution design",
              "Full development and implementation",
              "Your team participates and learns",
              "Quality assurance and testing",
              "Documentation creation",
            ]}
          />
          <PhaseCard
            phase="2"
            title="Operate"
            subtitle="Run & Optimize"
            desc="The solution is now running. We operate it while training your team to take over."
            items={[
              "24/7 operational support",
              "Performance monitoring",
              "Optimization and tuning",
              "Team training and mentoring",
              "Knowledge documentation",
            ]}
          />
          <PhaseCard
            phase="3"
            title="Transfer"
            subtitle="Hand-off & Support"
            desc="Your team is ready. We transfer full control while providing support during the transition."
            items={[
              "Gradual responsibility transfer",
              "Advanced training and certification",
              "Ongoing technical support",
              "Documentation review",
              "Transition verification",
            ]}
          />
        </div>
      </Section>

      {/* Key Benefits */}
      <Section className="bg-secondary/40">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Key Benefits</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <BenefitBox
            title="Build Internal Capability"
            items={[
              "Your team gains deep expertise",
              "Knowledge stays with your company",
              "Reduced long-term dependency",
              "Career development for your team",
            ]}
          />
          <BenefitBox
            title="De-Risk the Transition"
            items={[
              "Gradual handoff with safety net",
              "We support during transition",
              "Your team trained and confident",
              "Business continuity assured",
            ]}
          />
          <BenefitBox
            title="Cost Effective"
            items={[
              "No hiring overhead",
              "Clear timeline and milestones",
              "Predictable costs across phases",
              "No long-term vendor lock-in",
            ]}
          />
          <BenefitBox
            title="Strategic Advantage"
            items={[
              "Services become proprietary",
              "Align with your business strategy",
              "Control and ownership",
              "Competitive advantage",
            ]}
          />
        </div>
      </Section>

      {/* Timeline */}
      <Section>
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Typical Timeline & Costs
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
          Each BOT engagement is unique, but here's a typical progression:
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          <TimelineCard
            phase="Build"
            duration="3-6 months"
            cost="Upfront development investment"
            desc="Initial solution design and development"
          />
          <TimelineCard
            phase="Operate"
            duration="6-12 months"
            cost="Monthly operational fees"
            desc="Running the solution while training your team"
          />
          <TimelineCard
            phase="Transfer"
            duration="1-2 months"
            cost="Transition support fees"
            desc="Handoff of full operational responsibility"
          />
        </div>
      </Section>

      {/* Success Stories */}
      <Section className="bg-secondary/40">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Real-World Examples
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <StoryCard
            title="IoT Platform Development"
            desc="Built a complete IoT platform for a company, ran it for a year while their team learned, then transferred to their internal team who now operates it independently"
          />
          <StoryCard
            title="Telematics Service"
            desc="Developed a vehicle telematics service, operated it with support from the customer, trained their team, and successfully transitioned to their ownership"
          />
        </div>
      </Section>

      {/* Partnership Model */}
      <Section>
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Partnership Approach
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
          BOT is a true partnership. We succeed when you succeed, and we're
          committed to your team's success.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <ApproachBox
            title="Shared Success"
            items={[
              "We're invested in your success",
              "Aligned incentives throughout",
              "Clear milestones and metrics",
              "Regular reviews and adjustments",
            ]}
          />
          <ApproachBox
            title="Knowledge Transfer"
            items={[
              "Continuous training and mentoring",
              "Comprehensive documentation",
              "Best practices and patterns",
              "Your team becomes the experts",
            ]}
          />
        </div>
      </Section>

      {/* Why Choose BOT */}
      <Section className="bg-secondary/40">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Why Choose Build, Operate, Transfer?
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <ReasonCard
            icon="🎯"
            title="Strategic"
            desc="Services become part of your competitive advantage"
          />
          <ReasonCard
            icon="👥"
            title="Team Building"
            desc="Develop expert teams with deep domain knowledge"
          />
          <ReasonCard
            icon="📊"
            title="Proven"
            desc="You can see the service running before taking over"
          />
          <ReasonCard
            icon="💼"
            title="Smooth Transition"
            desc="De-risked handoff with continuing support"
          />
          <ReasonCard
            icon="💰"
            title="Cost Efficient"
            desc="More affordable than hiring and training internally"
          />
          <ReasonCard
            icon="🔒"
            title="Full Control"
            desc="Eventually own and control all aspects"
          />
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Build Internal Capability?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how the Build, Operate, Transfer model can help you
            develop strategic capabilities.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">Start a Conversation</Link>
          </Button>
        </div>
      </Section>

      <SiteFooter />
    </div>
  );
}

function UseCase({
  icon,
  title,
  desc,
}: {
  icon: string;
  title: string;
  desc: string;
}) {
  return (
    <AnimatedCard variant="hover-glow">
      <div className="text-center">
        <div className="text-3xl mb-3">{icon}</div>
        <h3 className="font-semibold mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground">{desc}</p>
      </div>
    </AnimatedCard>
  );
}

function PhaseCard({
  phase,
  title,
  subtitle,
  desc,
  items,
}: {
  phase: string;
  title: string;
  subtitle: string;
  desc: string;
  items: string[];
}) {
  return (
    <AnimatedCard variant="default">
      <div className="flex gap-6">
        <div className="flex-shrink-0">
          <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary/20 text-primary font-bold text-xl">
            {phase}
          </div>
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-xl mb-1">{title}</h3>
          <p className="text-sm font-semibold text-primary/80 mb-3 uppercase tracking-wide">
            {subtitle}
          </p>
          <p className="text-muted-foreground mb-4">{desc}</p>
          <ul className="space-y-2">
            {items.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </AnimatedCard>
  );
}

function BenefitBox({ title, items }: { title: string; items: string[] }) {
  return (
    <AnimatedCard variant="hover-glow">
      <h3 className="font-semibold text-lg mb-4">{title}</h3>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
            <span className="text-muted-foreground text-sm">{item}</span>
          </li>
        ))}
      </ul>
    </AnimatedCard>
  );
}

function TimelineCard({
  phase,
  duration,
  cost,
  desc,
}: {
  phase: string;
  duration: string;
  cost: string;
  desc: string;
}) {
  return (
    <AnimatedCard variant="hover-lift">
      <div className="text-center">
        <h3 className="font-semibold text-lg mb-2">{phase}</h3>
        <p className="text-sm font-semibold text-primary/80 mb-3">{duration}</p>
        <p className="text-sm text-muted-foreground mb-3">{desc}</p>
        <p className="text-xs text-primary font-semibold">{cost}</p>
      </div>
    </AnimatedCard>
  );
}

function StoryCard({ title, desc }: { title: string; desc: string }) {
  return (
    <AnimatedCard variant="hover-glow">
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-muted-foreground">{desc}</p>
    </AnimatedCard>
  );
}

function ApproachBox({ title, items }: { title: string; items: string[] }) {
  return (
    <AnimatedCard variant="hover-glow">
      <h3 className="font-semibold text-lg mb-4">{title}</h3>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
            <span className="text-muted-foreground text-sm">{item}</span>
          </li>
        ))}
      </ul>
    </AnimatedCard>
  );
}

function ReasonCard({
  icon,
  title,
  desc,
}: {
  icon: string;
  title: string;
  desc: string;
}) {
  return (
    <AnimatedCard variant="default">
      <div className="text-center">
        <div className="text-3xl mb-3">{icon}</div>
        <h3 className="font-semibold mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground">{desc}</p>
      </div>
    </AnimatedCard>
  );
}
