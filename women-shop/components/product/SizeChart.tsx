import type { Product } from "@/types/product";

export default function SizeChart({
  sizeChart,
}: {
  sizeChart: NonNullable<Product["sizeChart"]>;
}) {
  return (
    <div className="mt-10 border-t border-brand-200 pt-8">
      <h3 className="text-xs uppercase tracking-[0.25em] text-cocoa">
        尺码对照
      </h3>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-brand-200 bg-brand-50">
              {sizeChart.headers.map((h) => (
                <th
                  key={h}
                  className="px-4 py-2.5 font-medium text-cocoa"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sizeChart.rows.map((row, i) => (
              <tr key={i} className="border-b border-brand-200/60">
                {row.map((cell, j) => (
                  <td
                    key={j}
                    className={`px-4 py-2.5 ${
                      j === 0 ? "font-medium text-cocoa" : "text-cocoa-light"
                    }`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}