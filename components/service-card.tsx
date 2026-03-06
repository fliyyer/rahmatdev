import { Clock, RefreshCw } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { packages, type ServicePackage } from "@/lib/services";

export function ServiceCard({ pkg }: { pkg: ServicePackage }) {
  return (
    <div className="rounded-lg border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-bold text-primary">{pkg.name}</h3>
          <div className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              Waktu pengerjaan {pkg.duration}
            </span>
            <span className="flex items-center gap-1.5">
              <RefreshCw className="h-3.5 w-3.5" />
              Jumlah Revisi {pkg.revisions}
            </span>
          </div>
        </div>
        <span className="shrink-0 text-lg font-bold text-primary">
          {pkg.price}
        </span>
      </div>

      <Separator className="my-4" />

      {/* Features */}
      <ol className="space-y-1 text-sm text-muted-foreground">
        {pkg.features.map((f, i) => (
          <li key={i}>
            {i + 1}. {f}
          </li>
        ))}
      </ol>

      {/* Deliverables */}
      <div className="mt-4">
        <p className="text-sm font-semibold text-foreground">
          Apa yang akan diterima pemberi kerja
        </p>
        <ul className="mt-1.5 space-y-1 text-sm text-muted-foreground">
          {pkg.deliverables.map((d, i) => (
            <li key={i}>• {d}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function ServiceList() {
  return (
    <div className="space-y-6">
      {packages.map((pkg) => (
        <ServiceCard key={pkg.name} pkg={pkg} />
      ))}
    </div>
  );
}
