import StarField from '@/components/StarField';
import RosePetals from '@/components/RosePetals';
import HeroSection from '@/components/HeroSection';
import LetterSection from '@/components/LetterSection';
import TimelineSection from '@/components/TimelineSection';
import PromiseSection from '@/components/PromiseSection';
import ProposalSection from '@/components/ProposalSection';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Grain overlay */}
      <div className="grain-overlay" />

      {/* Background stars */}
      <StarField />

      {/* Falling rose petals */}
      <RosePetals />

      {/* Content */}
      <div className="relative z-20">
        <HeroSection />
        <LetterSection />
        <TimelineSection />
        <PromiseSection />
        <ProposalSection />

        {/* Footer */}
        <footer className="py-12 text-center border-t border-gold-300 border-opacity-10">
          <p className="font-script text-gold-300 opacity-50" style={{ fontSize: '1rem' }}>
            Made with love, for Sammy 🖤
          </p>
        </footer>
      </div>
    </main>
  );
}
