import { SectionOne, SectionTwo } from "@/components";
import { getArticle } from "@/lib/api/articlesAPI";
import { getRecurringSchedule } from "@/lib/api/schedules/recurringScheduleAPI";
import { getSpecialEvent } from "@/lib/api/schedules/specialEventAPI";
import dynamic from "next/dynamic";

const MimbarArticle = dynamic(() => import("@/components/home/MimbarArticle/MimbarArticle"), {
  ssr: false,
});
const GalerySection = dynamic(() => import("@/components/home/GalerySection/GalerySection"), {
  ssr: false,
});
const ReminderOverlay = dynamic(() => import("@/components/ReminderOverlay/ReminderOverlay"), {
  ssr: false,
});

export default async function Home() {
  const articles = await getArticle();
  const recurringSchedules = await getRecurringSchedule();
  const specialEventSchedules = await getSpecialEvent();

  return (
    <main className="relative">
      {(Boolean(recurringSchedules.data.length) || Boolean(specialEventSchedules.data.length)) && (
        <ReminderOverlay
          recurringSchedules={recurringSchedules.data}
          specialEventSchedules={specialEventSchedules.data}
        />
      )}
      <SectionOne />
      <GalerySection articles={articles.data} />
      <MimbarArticle articles={articles.data} />
      <SectionTwo articles={articles.data} />
    </main>
  );
}
