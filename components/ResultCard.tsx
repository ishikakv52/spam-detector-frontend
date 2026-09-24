import { MessageRecord } from "@/lib/api";

const CATEGORY_LABELS: Record<string, string> = {
  promotional: "Promotional",
  prize_reward: "Prize/Reward",
  financial: "Financial",
  suspicious_link: "Suspicious Link",
  personal_info_request: "Personal Info Request",
  otp_auth: "OTP/Authentication",
  normal: "Normal Message",
  other: "Other",
};

export default function ResultCard({ record }: { record: MessageRecord }) {
  const isSpam = record.classification === "spam";

  return (
    <div
      className={`rounded-xl border p-5 ${
        isSpam ? "border-red-200 bg-red-50" : "border-green-200 bg-green-50"
      }`}
    >
      <div className="flex items-center justify-between">
        <span
          className={`rounded-full px-3 py-1 text-sm font-semibold ${
            isSpam ? "bg-red-600 text-white" : "bg-green-600 text-white"
          }`}
        >
          {isSpam ? "Spam" : "Not Spam"}
        </span>
        <span className="text-xs text-slate-500">
          {CATEGORY_LABELS[record.category] || record.category}
        </span>
      </div>

      <p className="mt-3 text-sm text-slate-700">{record.explanation}</p>

      {record.suspicious_indicators?.length > 0 && (
        <div className="mt-3">
          <p className="text-xs font-medium text-slate-500">
            Suspicious indicators
          </p>
          <ul className="mt-1 flex flex-wrap gap-2">
            {record.suspicious_indicators.map((ind, i) => (
              <li
                key={i}
                className="rounded-full bg-white px-2.5 py-1 text-xs text-slate-700 ring-1 ring-slate-200"
              >
                {ind}
              </li>
            ))}
          </ul>
        </div>
      )}

      {record.safety_suggestion && (
        <p className="mt-3 rounded-md bg-white/70 p-2 text-xs text-slate-600">
          💡 {record.safety_suggestion}
        </p>
      )}

      <p className="mt-3 text-xs text-slate-400">
        Note: AI classification is assistive, not a guarantee — always use your
        own judgement.
      </p>
    </div>
  );
}
