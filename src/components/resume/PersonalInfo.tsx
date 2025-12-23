interface PersonalInfoProps {
  email?: string;
  phone?: string;
  github?: string;
  website?: string;
  education?: {
    school: string;
    major: string;
    period?: string;
  };
}

export default function PersonalInfo({
  email,
  phone,
  github,
  website,
  education,
}: PersonalInfoProps) {
  const contacts = [];

  if (email) contacts.push(email);
  if (phone) contacts.push(phone);
  if (github) contacts.push(`GitHub: ${github}`);
  if (website) contacts.push(website);

  return (
    <div className="space-y-0.5">
      {/* 학력 정보 */}
      {education && (
        <p className="text-slate-700 text-sm">
          {education.school} {education.major} 전공{" "}
          {education.period && `(${education.period})`}
        </p>
      )}
      {/* 연락 정보 */}
      <p className="text-slate-700 text-sm">{contacts.join(" | ")}</p>
    </div>
  );
}
