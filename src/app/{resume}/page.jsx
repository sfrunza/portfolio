import SectionHeader from '@/components/SectionHeader';
import Section from '@/components/Section';
import Skills from './Skills';
import Experience from './Experience';
import Education from './Education';

export default function ResumePage() {
  return (
    <Section>
      <SectionHeader title="Resume" />
      <Experience />
      <Education />
      <Skills />
    </Section>
  );
}
