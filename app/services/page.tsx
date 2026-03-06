import type { Metadata } from "next";
import { ServiceList } from "@/components/service-card";
import { TestimonialList, TestimonialSummary } from "@/components/testimonial-card";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
    title: "Services",
    description:
        "Jasa pembuatan website dengan 3 pilihan paket: Basic, Pro, dan Custom sesuai kebutuhan Anda.",
};

export default function ServicesPage() {
    return (
        <div className="space-y-10 py-10">
            {/* Services */}
            <section className="space-y-6">
                <div>
                    <h1 className="text-3xl font-semibold">Services</h1>
                    <p className="mt-2 text-muted-foreground">
                        Pilih paket layanan yang sesuai dengan kebutuhan dan anggaran Anda.
                    </p>
                </div>
                <ServiceList />
            </section>

            <Separator />

            {/* Testimonials */}
            <section className="space-y-6">
                <div>
                    <h2 className="text-2xl font-semibold">Ulasan dari Pembeli (15)</h2>
                    <p className="mt-1 text-sm text-muted-foreground">
                        Diambil dari profil Fastwork · rahmatflyr
                    </p>
                </div>
                <TestimonialSummary />
                <TestimonialList />
            </section>
        </div>
    );
}
