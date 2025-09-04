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
          {/* Industries */}
          <div className="bg-white rounded-xl border border-orange-100 shadow-sm p-4">
            <div className="flex items-center mb-3">
              <div className="w-5 h-5 rounded-full bg-orange-500/10 flex items-center justify-center mr-2">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 10h18M3 14h18"/>
                </svg>
              </div>
              <div className="font-semibold text-gray-900">Industries</div>
            </div>

            <div className="space-y-3">
              {/* Selected industry */}
              <div className="rounded-lg border border-orange-200 bg-orange-50 p-3">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-gray-900 font-medium">Technology</div>
                    <div className="text-xs text-gray-500">Primary industry</div>
                  </div>
                  <div className="w-5 h-5 rounded-full bg-white border border-orange-300 flex items-center justify-center text-orange-500">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Other industries */}
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-3">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-gray-700 font-medium">Retail & E‑commerce</div>
                    <div className="text-xs text-gray-500">Consumer brands</div>
                  </div>
                  <div className="w-5 h-5 rounded-full bg-white border border-gray-300" />
                </div>
              </div>

              <div className="rounded-lg border border-gray-200 bg-gray-50 p-3">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-gray-700 font-medium">Healthcare</div>
                    <div className="text-xs text-gray-500">Hospitals & pharma</div>
                  </div>
                  <div className="w-5 h-5 rounded-full bg-white border border-gray-300" />
                </div>
              </div>

              <div className="rounded-lg border border-gray-200 bg-gray-50 p-3">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-gray-700 font-medium">Financial Services</div>
                    <div className="text-xs text-gray-500">Banking & fintech</div>
                  </div>
                  <div className="w-5 h-5 rounded-full bg-white border border-gray-300" />
                </div>
              </div>

              <div className="rounded-lg border border-gray-200 bg-gray-50 p-3">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-gray-700 font-medium">Hospitality & Travel</div>
                    <div className="text-xs text-gray-500">Hotels, airlines, tourism</div>
                  </div>
                  <div className="w-5 h-5 rounded-full bg-white border border-gray-300" />
                </div>
              </div>
            </div>
          </div>

          {/* Inventory Selection */}
          <div className="bg-white rounded-xl border border-orange-100 shadow-sm p-4">
            <div className="flex items-center mb-3">
              <div className="w-5 h-5 rounded-full bg-orange-500/10 flex items-center justify-center mr-2">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 1 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div className="font-semibold text-gray-900">Inventory Selection</div>
              <span className="ml-auto text-[10px] px-2 py-0.5 rounded-full bg-orange-500/10 text-orange-600 border border-orange-200">Los Angeles, CA</span>
            </div>

            <div className="space-y-4">
              {/* Totals */}
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-lg bg-orange-50 border border-orange-200 p-3">
                  <div className="text-xs text-gray-600">Total inventory</div>
                  <div className="text-2xl font-extrabold text-gray-900 leading-tight">2,340</div>
                  <div className="text-[10px] text-gray-500">screens in city limits</div>
                </div>
                <div className="rounded-lg bg-gray-50 border border-gray-200 p-3">
                  <div className="text-xs text-gray-600">Availability</div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="inline-block w-2 h-2 rounded-full bg-orange-500" />
                    <span className="text-xs text-gray-700">Outdoor 68%</span>
                    <span className="inline-block w-2 h-2 rounded-full bg-sky-500 ml-3" />
                    <span className="text-xs text-gray-700">Indoor 32%</span>
                  </div>
                </div>
              </div>

              {/* By format */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm text-gray-700"><span>Billboard</span><span className="text-gray-500">820</span></div>
                <div className="h-2 rounded-full bg-gray-100">
                  <div className="h-2 rounded-full bg-orange-400 w-[35%]" />
                </div>
                <div className="flex items-center justify-between text-sm text-gray-700 mt-2"><span>Transit</span><span className="text-gray-500">760</span></div>
                <div className="h-2 rounded-full bg-gray-100">
                  <div className="h-2 rounded-full bg-orange-400/80 w-[32%]" />
                </div>
                <div className="flex items-center justify-between text-sm text-gray-700 mt-2"><span>Street Furniture</span><span className="text-gray-500">760</span></div>
                <div className="h-2 rounded-full bg-gray-100">
                  <div className="h-2 rounded-full bg-orange-400/70 w-[32%]" />
                </div>
              </div>

              {/* Networks */}
              <div className="pt-1">
                <div className="text-sm font-medium text-gray-900 mb-2">Networks</div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center justify-between">
                    <div className="flex items-center"><span className="w-2 h-2 rounded-full bg-emerald-500 mr-2"/>Clear Channel</div>
                    <span className="text-gray-500">640</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <div className="flex items-center"><span className="w-2 h-2 rounded-full bg-sky-500 mr-2"/>Lamar</div>
                    <span className="text-gray-500">520</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <div className="flex items-center"><span className="w-2 h-2 rounded-full bg-orange-500 mr-2"/>Outfront</div>
                    <span className="text-gray-500">480</span>
                  </li>
                </ul>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2 pt-1">
                <button className="px-3 py-1.5 text-xs rounded-md border border-gray-200 text-gray-700 bg-white hover:bg-gray-50">Select All</button>
                <button className="px-3 py-1.5 text-xs rounded-md bg-orange-500 text-white hover:bg-orange-600">Add to Plan</button>
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
