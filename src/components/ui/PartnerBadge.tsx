export function PartnerBadge() {
  return (
    <a href="https://in.pinterest.com/destinovaailabs/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 sm:gap-2.5 bg-white rounded-[4px] shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-shadow duration-300 py-1.5 sm:py-2 px-3 sm:px-4 cursor-pointer">
      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#eb8248] rounded-sm flex items-center justify-center text-white text-[12px] font-bold">D</div>
      <div className="flex flex-col">
        <span className="text-[13px] sm:text-[14px] font-medium text-[#000000] leading-none">Destinova AI Labs</span>
        <span className="text-[10px] sm:text-[11px] text-gray-500 font-medium">Feature partner</span>
      </div>
    </a>
  );
}
