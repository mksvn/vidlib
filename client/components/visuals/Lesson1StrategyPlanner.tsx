import React from "react";

export default function Lesson1StrategyPlanner() {
  return (
    <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-amber-100" />

      <div className="relative h-full w-full p-4 sm:p-6 text-gray-800">
        {/* Header */}
        <div className="flex items-center mb-4">
          <div className="w-6 h-6 rounded-full bg-orange-500/10 flex items-center justify-center mr-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="8" x2="12" y2="12"/>
              <line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
          </div>
          <div>
            <div className="font-semibold text-gray-900">Strategy Planner</div>
            <div className="text-xs text-gray-500 -mt-0.5">AI-powered campaign optimization</div>
          </div>
          <div className="ml-auto flex items-center text-xs text-gray-500">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-orange-500/10 text-orange-600 border border-orange-200">AI Powered</span>
          </div>
        </div>

        {/* Main cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Campaign Goals */}
          <div className="bg-white rounded-xl border border-orange-100 shadow-sm p-4">
            <div className="flex items-center mb-3">
              <div className="w-5 h-5 rounded-full bg-orange-500/10 flex items-center justify-center mr-2">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20l9-5-9-5-9 5 9 5z"/>
                  <path d="M12 12l9-5-9-5-9 5 9 5z"/>
                </svg>
              </div>
              <div className="font-semibold text-gray-900">Campaign Goals</div>
            </div>

            <div className="space-y-3">
              {/* Selected item */}
              <div className="rounded-lg border border-orange-200 bg-orange-50 p-3">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-gray-900 font-medium">Brand Awareness</div>
                    <div className="text-xs text-gray-500">Primary objective</div>
                  </div>
                  <div className="w-5 h-5 rounded-full bg-white border border-orange-300 flex items-center justify-center text-orange-500">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Other items */}
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-3">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-gray-700 font-medium">Lead Generation</div>
                    <div className="text-xs text-gray-500">Secondary objective</div>
                  </div>
                  <div className="w-5 h-5 rounded-full bg-white border border-gray-300" />
                </div>
              </div>

              <div className="rounded-lg border border-gray-200 bg-gray-50 p-3">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-gray-700 font-medium">Sales Conversion</div>
                    <div className="text-xs text-gray-500">Future consideration</div>
                  </div>
                  <div className="w-5 h-5 rounded-full bg-white border border-gray-300" />
                </div>
              </div>
            </div>
          </div>

          {/* Target Audience */}
          <div className="bg-white rounded-xl border border-orange-100 shadow-sm p-4">
            <div className="flex items-center mb-3">
              <div className="w-5 h-5 rounded-full bg-orange-500/10 flex items-center justify-center mr-2">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-8 0v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </div>
              <div className="font-semibold text-gray-900">Target Audience</div>
              <span className="ml-auto text-[10px] px-2 py-0.5 rounded-full bg-orange-500/10 text-orange-600 border border-orange-200">High Priority</span>
            </div>

            <div className="space-y-3">
              {/* Bars */}
              <div>
                <div className="text-sm text-gray-700 mb-1">Age 35-45</div>
                <div className="h-2 rounded-full bg-gray-100">
                  <div className="h-2 rounded-full bg-orange-400 w-[80%]" />
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-700 mb-1">Manager+</div>
                <div className="h-2 rounded-full bg-gray-100">
                  <div className="h-2 rounded-full bg-orange-400/80 w-[75%]" />
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-700 mb-1">Tech Industry</div>
                <div className="h-2 rounded-full bg-gray-100">
                  <div className="h-2 rounded-full bg-orange-400/70 w-[60%]" />
                </div>
              </div>

              <div className="pt-2">
                <div className="text-sm font-medium text-gray-900 mb-2">AI Recommendations</div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-emerald-500 mr-2"/>Focus on LinkedIn targeting</li>
                  <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-sky-500 mr-2"/>B2B messaging approach</li>
                  <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-orange-500 mr-2"/>Consider mobile optimization</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Floating badges */}
        <div className="absolute left-3 bottom-3 bg-white rounded-xl shadow-lg border border-gray-200 px-3 py-2">
          <div className="text-[10px] text-gray-500">AI Confidence</div>
          <div className="text-emerald-600 font-semibold leading-none">High</div>
        </div>
        <div className="absolute right-3 top-3 bg-white rounded-xl shadow-lg border border-gray-200 px-3 py-2 text-right">
          <div className="text-[10px] text-gray-500">Strategy Score</div>
          <div className="text-orange-600 font-extrabold leading-none">94%</div>
        </div>
      </div>
    </div>
  );
}
