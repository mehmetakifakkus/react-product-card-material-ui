import React from "react";

type Props = {
  label: String;
};

export default function Chip({ label }: Props) {
  return (
    <span className="px-4 py-[6px] text-xs rounded-full bg-rose text-white">
      {label}
    </span>
  );
}
