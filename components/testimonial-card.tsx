import { Star } from "lucide-react";
import { testimonials, type Testimonial } from "@/lib/testimonials";

function StarRating({ rating }: { rating: number }) {
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.5;

    return (
        <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => {
                const filled = i < fullStars || (i === fullStars && hasHalf);
                return (
                    <Star
                        key={i}
                        className={`h-3.5 w-3.5 ${filled
                                ? "fill-yellow-400 text-yellow-400"
                                : "fill-muted text-muted"
                            }`}
                    />
                );
            })}
            <span className="ml-1 text-xs font-medium text-muted-foreground">
                {rating.toFixed(1)}
            </span>
        </div>
    );
}

function Avatar({ name }: { name: string }) {
    const isAnon = name.startsWith("*");
    const initials = isAnon
        ? "?"
        : name
            .split(" ")
            .map((n) => n[0])
            .slice(0, 2)
            .join("")
            .toUpperCase();

    return (
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
            {initials}
        </div>
    );
}

function TestimonialCard({ t }: { t: Testimonial }) {
    return (
        <div className="rounded-lg border bg-card p-4 shadow-sm">
            <div className="flex items-start gap-3">
                <Avatar name={t.name} />
                <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                        <p className="text-sm font-semibold text-foreground">{t.name}</p>
                        <span className="text-xs text-muted-foreground">{t.date}</span>
                    </div>
                    <StarRating rating={t.rating} />
                    {t.review && (
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                            {t.review}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}

export function TestimonialSummary() {
    const avg = (
        testimonials.reduce((acc, t) => acc + t.rating, 0) / testimonials.length
    ).toFixed(1);

    return (
        <div className="flex items-center gap-6 rounded-lg border bg-card p-5">
            {/* Score */}
            <div className="flex flex-col items-center justify-center rounded-full bg-primary/10 px-5 py-4 text-center">
                <span className="text-3xl font-bold text-primary">{avg}</span>
                <span className="text-xs text-muted-foreground">Dari 5</span>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-x-12 gap-y-2 text-sm">
                {[
                    "Kecepatan membalas",
                    "Pelayanan",
                    "Ketrampilan dan keahlian",
                    "Value for money",
                ].map((label) => (
                    <div key={label}>
                        <p className="text-muted-foreground">{label}</p>
                        <div className="mt-0.5 flex gap-0.5">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <Star
                                    key={i}
                                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export function TestimonialList() {
    return (
        <div className="space-y-4">
            {testimonials.map((t, i) => (
                <TestimonialCard key={i} t={t} />
            ))}
        </div>
    );
}
