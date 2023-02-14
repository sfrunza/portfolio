import Section from '@/components/Section';
import SectionHeader from '@/components/SectionHeader';
import ContactForm from './ContactForm';

export default function ContactPage() {
  return (
    <Section>
      <SectionHeader title="Let's talk" />
      <ContactForm />
    </Section>
  );
}
