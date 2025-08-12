interface ContactInfoProps {
  email?: string;
  phone?: string;
  github?: string;
  website?: string;
}

export default function ContactInfo({ email, phone, github, website }: ContactInfoProps) {
  const contacts = [];
  
  if (email) contacts.push(email);
  if (phone) contacts.push(phone);
  if (github) contacts.push(`GitHub: ${github}`);
  if (website) contacts.push(website);
  
  return (
    <p className="text-gray-700 text-sm">
      {contacts.join(' | ')}
    </p>
  );
}